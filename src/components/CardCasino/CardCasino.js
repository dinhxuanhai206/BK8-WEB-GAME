import React, { useState, useContext } from "react";
import styles from "./CardCasino.module.scss";
import className from "classnames/bind";
import { NewIcon } from "~/constants/icons";
import { useMediaQuery } from "react-responsive";
import images from "~/constants/images";
import * as gameService from "~/services/gameService";
import { Store } from "~/Store";
import CustomModal from "~/components/CustomModal/CustomModal";

const cx = className.bind(styles);

const CardCasino = ({
  image,
  title,
  feature,
  linkDemo,
  className,
  type,
  code,
}) => {
  const [showModal, setShowModal] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const onClickLoginGameHandler = async () => {
    if (!userInfo) {
      setShowModal(true);
    } else {
      const result = await gameService.loginGame(
        userInfo.username,
        code,
        type,
        ""
      );
      if (result?.status === 0) {
        window.open(result.url, "_blank", "noopener noreferrer");
      }
    }
  };

  return (
    <>
      <CustomModal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Please Login to Proceed"
        button="OK"
      />
      <div className={cx("card-item", "card-casino", className)}>
        {title !== "" && image !== "" ? (
          <>
            <div className={cx("card-img")} onClick={onClickLoginGameHandler}>
              <img src={images[code]} alt="no images" />
            </div>
            <div className={cx("card-text")}>
              <p>{title}</p>
              {!isMobile ? feature ? <NewIcon /> : null : null}
            </div>
          </>
        ) : (
          <div
            style={{ background: "#f2f2f2", width: "100%", height: "102%" }}
          ></div>
        )}
      </div>
    </>
  );
};

export default CardCasino;
