import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Referral.module.scss";
import MyBonus from "./MyBonus/MyBonus";
import MyReferral from "./MyReferral/MyReferral";

const cx = classNames.bind(styles);
const tabPassword = [
  {
    key: "myreferral",
    display: "My Referral",
  },
  {
    key: "mybonus",
    display: "My Bonus",
  },
];

function Referral() {
  const [active, setActive] = useState(0);
  const [renderTab, setRenderTab] = useState("myreferral");

  const handleChangeTab = (index, key) => {
    setActive(index);
    setRenderTab(key);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("referral-block")}>
          <p className={cx("referral-title")}>REFERRAL</p>
          <div className={cx("title-block")}>
            {tabPassword.map((item, index) => (
              <div
              key={index}
               onClick={() => handleChangeTab(index, item.key)}
                className={cx("with-title", index === active ? "active" : "")}>
                {item.display}
              </div>
            ))}
          </div>
        </div>
        <div className={cx("message-body")}>
          {renderTab === "myreferral" ? (
            <MyReferral />
          ) : renderTab === "mybonus" ? (
            <MyBonus />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Referral;
