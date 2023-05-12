import React, { useState, useContext } from "react";
import styles from "./Card.module.scss";
import className from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { NewIcon } from "../../constants/icons";
import { useMediaQuery } from "react-responsive";
import PopupCard from "./PopupCard/PopupCard";
import images from "~/constants/images";
import * as gameService from '~/services/gameService'
import { Store } from "~/Store";
import CustomModal from '~/components/CustomModal/CustomModal'
//CustomModal.setAppElement("#root");

const cx = className.bind(styles);

const Card = ({ image, title, isHot, isNew, isProgressive, linkDemo, className, type, code, subCode }) => {
  const [showModal, setShowModal] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { userInfo } = state

  const onClickLoginGameHandler = async () => {
    if (!userInfo) {
      setShowModal(true)
    } else {
      const result = await gameService.loginGame(userInfo.username, code, type, type!== 'LT' ? '' : subCode)
      if (result?.status === 0) {
        window.open(result.url, '_blank', 'noopener noreferrer')
      }
    }
  }

  return (
    <>
      <CustomModal showModal={showModal} setShowModal={setShowModal} title='Please Login to Proceed' button='OK' />
      <div onClick={() => setOpenPopup(true)} className={cx("card-item", className)}>
        <div className={cx("card-img")}>
          <img src={image} alt="no images" />
        </div>
        <div className={cx("card-text")}>
          <p>{title}</p>
          {isNew && <NewIcon />}
        </div>
        {!isMobile &&
          title !== "" && image !== "" ? (
          <div className={cx("card-over-box")}>
            <div className={cx("card-text")}>
              <p>{title}</p>
              {isNew ? <NewIcon /> : null}
            </div>
            <div className={cx("card-img")}>
              <img src={image} alt={title} />
              <div className={cx("over-action")}>
                <div className={cx("wrap-action")}>
                  <div className={cx("btn-play")} onClick={() => onClickLoginGameHandler(code)}>
                    Play
                  </div>
                  {linkDemo ? (
                    <a href={linkDemo} className={cx("btn-demo")}>
                      Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ) : null
        }
      </div>
      {
        isMobile && openPopup
          ?
          <PopupCard
            title={title}
            image={image}
            onClick={setOpenPopup}
            linkDemo={linkDemo}
            linkPlay={subCode}
            type={type}
          //onClick={() => onClickLoginGameHandler(code)}
          />
          :
          null
      }
    </>
  );
};

export default Card;
