import React from "react";
import classNames from "classnames/bind";
import styles from "./Withdrawal.module.scss";

const cx = classNames.bind(styles);

function Withdrawal() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("block-trans")}>
        <p>Transaction Date</p>
        <p>Amount</p>
        <p>Method</p>
        <p>Status</p>
        <p>Type</p>
      </div>
    </div>
  );
}

export default Withdrawal;
