import React from "react";
import classNames from "classnames/bind";
import styles from "./Rebate.module.scss";

const cx = classNames.bind(styles);

function Rebate() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("block-trans")}>
        <p>Transaction Date</p>
        <p>Provider</p>
        <p>Total Valid Turn Over</p>
        <p>Total Promo Turn Over</p>
        <p>Total Eligible Turn Over</p>
        <p>Amount</p>
      </div>
    </div>
  );
}

export default Rebate;
