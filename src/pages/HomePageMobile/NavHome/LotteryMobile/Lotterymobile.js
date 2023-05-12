import React from "react";
import classNames from "classnames/bind";
import styles from "./LotteryMobile.module.scss";
import { dataLottery } from "~/constants/mockNavHomeMobile/dataTab";
import * as gameService from "~/services/gameService";
import { useContext, useState } from "react";
import { Store } from "~/Store";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function LotteryMobile() {
  const [showModal, setShowModal] = useState(false);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate()

  const loginGameHandler = async (item) => {
    if (!userInfo) {
      navigate('/login?redirect=/')
    } else {
      const result = await gameService.loginGame(
        userInfo.username,
        item.provider_code,
        "SB",
        ""
      );
      if (result?.status === 0) {
        window.open(result.url, "_blank", "noopener noreferrer");
      }
    }
  }

  return (
    <div>
    <div className={cx("wrapper")}>
      {dataLottery.map((item, index) => (
        <div key={index} className={cx("block-item")}>
          <div className={cx("img")}>
            <img src={item.image} alt="" className={cx("img-item")} onClick={() => loginGameHandler(item)}/>
          </div>
          <p className={cx("text")}>{item.provider_name}</p>
        </div>
      ))}
    </div>
  </div>
  );
}

export default LotteryMobile;
