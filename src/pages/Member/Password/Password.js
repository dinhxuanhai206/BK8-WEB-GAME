import React,{useState} from "react";
import classNames from "classnames/bind";
import styles from "./Password.module.scss";
import LoginPass from "./LoginPass/LoginPass";
import GamePass from "./GamePass/GamePass";

const cx = classNames.bind(styles);
const tabPassword= [
  {
    key: "loginpass",
    display: "Login Password",
  },
  {
    key: "gamepass",
    display: "Game Password",
  },

];

function Password() {
  const [active, setActive] = useState(0);
  const [renderTab, setRenderTab] = useState("loginpass");

  const handleChangeTab = (index, key) => {
    setActive(index);
    setRenderTab(key);
  };
  return (
    <div className={cx("wrapper")}>
    
    <div className={cx("inner")}>
        <div className={cx("pass-block")}>
          <p className={cx("pass-title")}>CHANGE PASSWORD</p>
          <div className={cx("title-block")}>
          {tabPassword.map((item, index) => (
            <div
              onClick={() => handleChangeTab(index, item.key)}
              className={cx("with-title", index === active ? "active" : "")}
              key={index}
            >
              {item.display}
            </div>
          ))}
        </div>
        </div>
        <div className={cx("message-body")}>
          {renderTab === "loginpass" ? (
            <LoginPass />
          ) : renderTab === "gamepass" ? (
            <GamePass />
          ) : null}
        </div>
      </div>

    </div>
  );
}

export default Password;
