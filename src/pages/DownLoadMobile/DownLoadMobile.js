import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./DownLoadMobile.module.scss";
import BkApp from "./BkApp/BkApp";
import Android from "./Android/Android";
import Ios from "./Ios/Ios";

const cx = classNames.bind(styles);

const tabPageSponsor = [
  {
    display: "BK8 App",
  },
  {
    display: "Android",
  },
  {
    display: "IOS",
  },
];

const DownLoadMobile = () => {
  const [active, setActive] = useState(0);
  

  const handleChangeTab = (index) => {
    setActive(index);

  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("tab")}>
          {tabPageSponsor.map((item, index) => (
            <div
              className={cx(
                "tab__items",
                index === active ? "active" : ""
              )}
              key={index}
            >
              <button
                onClick={() => handleChangeTab(index, item.key)}
                className={cx("tab__name")}
              >
                {item.display}
              </button>
            </div>
          ))}
        </div>
        <div className={cx("body")}>
          {active === 0 ? (
            <BkApp />
          ) : active === 1 ? (
            <Android/>
          ) : active === 2 ? (
            <Ios />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DownLoadMobile;
