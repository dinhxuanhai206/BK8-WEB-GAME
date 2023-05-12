import React from "react";
import classNames from "classnames/bind";
import styles from "./EsportsMobile.module.scss";
import { dataEsport } from "~/constants/mockNavHomeMobile/dataTab";
import * as gameService from "~/services/gameService";
import { useContext, useState } from "react";
import { Store } from "~/Store";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);

function EsportsMobile() {
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
        "ES",
        ""
      );
      if (result?.status === 0) {
        window.open(result.url, "_blank", "noopener noreferrer");
      }
    }
  }

  return (
    <div className={cx("wrapper")}>    
    {dataEsport.map((item, index) => (
      <div key={index} className={cx("block-item")}>
      <div className={cx("img")}>
        <img src={item.image} alt="" className={cx("img-item")} onClick={() => loginGameHandler(item)}/>
      </div>
        <p className={cx("text")}>{item.provider_name}</p>
      </div>
    ))}
  </div>
  );
}

export default EsportsMobile;
