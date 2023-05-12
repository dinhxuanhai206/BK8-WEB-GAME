import React from "react";
import classNames from "classnames/bind";
import styles from "./Transfer.module.scss";

const cx = classNames.bind(styles);

function Transfer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("block-trans")}>
        <p>Transaction Date</p>
        <p>Amount</p>
        <p>From</p>
        <p>To</p>
        <p>Promotion Name</p>
        <p>Status</p>
      </div>
    </div>
  );
}

export default Transfer;
