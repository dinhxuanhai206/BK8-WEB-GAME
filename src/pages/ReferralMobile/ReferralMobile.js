import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ReferralMobile.module.scss";
import MyBonus from "./MyBonus/MyBonus";
import {RiShareForwardLine} from "react-icons/ri"
import MyReferral from "./MyReferral/MyReferral";

const cx = classNames.bind(styles);
const tabReferral = [
    {
      display: "My Referral",
    },
    {
      display: "My Bonus",
    },
  ];
const ReferralMobile = () => {
    const [active, setActive] = useState(0);
  
    const handleChangeTab = (index) => {
      setActive(index);
    };
  return (
    <div className={cx("wrapper")}>
        <div className={cx("refrral-menu")}>
          {tabReferral.map((item, index) => (
            <div
            className={cx("title")}
              key={index}
              onClick={() => handleChangeTab(index, item.key)}
            > 
                {item.display}
            </div>
          ))}
        </div>
        <div className={cx("title-block")}>
        <p className={cx("desc")}>
          Share the referral code with your friend.
          <span className={cx("span")}>
            Get exclusive referral bonuses when your friend signs up using your
            referral code.
          </span>
        </p>
        <div className={cx('name')}>
          <input type="text" className={cx("input")}/>
          <button className={cx("btn-share")}>SHARE <RiShareForwardLine style={{ color: "white", fontSize: "16px", marginBottom: "-3px"}}/></button>
        </div>
      </div>
        <div className={cx("sponsrors-body")}>
          {active === 0 ? (
            <MyReferral/>
          ) : active === 1 ? (
            <MyBonus />
          ) : null}
        </div>
    </div>
  );
};
export default ReferralMobile;
