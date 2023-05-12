import React from "react";
import classNames from "classnames/bind";
import styles from "./SponsorMobile.module.scss";
import { dataSponsor } from "~/constants/mockNavHomeMobile/dataTab";
const cx = classNames.bind(styles);

function SponsorMobile() {
  return (
    <div>
    <div className={cx("wrapper")}>
      {dataSponsor.map((item, index) => (
        <div key={index} className={cx("block-item")}>
          <div className={cx("img")}>
            <img src={item.img} alt="" className={cx("img-item")} />
          </div>
          <p className={cx("text")}>{item.text}</p>
        </div>
      ))}
    </div>
  </div>
  );
}

export default SponsorMobile;
