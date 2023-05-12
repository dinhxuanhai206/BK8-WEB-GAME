import React from "react";
import classNames from "classnames/bind";
import styles from "./SportsMobile.module.scss";
import { dataSport } from "~/constants/mockNavHomeMobile/dataTab";
import * as gameService from "~/services/gameService";
import { useContext, useState } from "react";
import { Store } from "~/Store";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);

function SportsMobile() {
  const [showModal, setShowModal] = useState(false);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate()

  const loginGameHandler = async (item) => {
    if (!userInfo.token) {
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
    <div className={cx("wrapper")}>    
      {dataSport.map((item, index) => (
        <div key={index} className={cx("block-item")}>
        <div className={cx("img")}>
          <img src={item.img} alt="" className={cx("img-item")}/>
        </div>
        <div className={cx("block-right")}>
          <p className={cx("text")}>{item.provider_name}</p>
          <div className={cx("btn-block")}>
            <button className={cx("btn-desk")} onClick={() => loginGameHandler(item)}>{item.btnDesktop}</button>
            <button className={cx("btn-now")} onClick={() => loginGameHandler(item)}>{item.btnNow}</button>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
}

export default SportsMobile;
