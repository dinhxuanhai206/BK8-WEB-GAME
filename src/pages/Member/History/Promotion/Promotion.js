import React from "react";
import classNames from "classnames/bind";
import styles from "./Promotion.module.scss";

const cx = classNames.bind(styles);

function Promotion() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("block-trans")}>
        <p>Transaction Date</p>
        <p>End Date</p>
        <p>Promotion Name</p>
        <p>Transfer Amount</p>
        <p>Bonus Amount</p>
        <p>Target Amount</p>
        <p>Target Achieved</p>
        <p>Transaction Status</p>
      </div>
    </div>
  );
}

export default Promotion;
