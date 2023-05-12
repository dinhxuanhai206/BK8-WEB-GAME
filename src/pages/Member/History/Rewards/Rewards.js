import React from "react";
import classNames from "classnames/bind";
import styles from "./Rewards.module.scss";

const cx = classNames.bind(styles);

function Rewards() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("block-trans")}>
        <p>Transaction Date</p>
        <p>Reward Name</p>
        <p>Reward Type</p>
        <p>Provider</p>
        <p>Amount/Spin</p>
        <p>Transaction Status</p>
      </div>
    </div>
  );
}

export default Rewards;
