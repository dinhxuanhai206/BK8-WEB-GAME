import React from "react";
import classNames from "classnames/bind";
import styles from "./Sumary.module.scss";

const cx = classNames.bind(styles);

function Sumary() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("block-trans")}>
        <p>Game Provider</p>
        <p>Bet Count</p>
        <p>Bet Amount</p>
        <p>Valid Bet Amount</p>
        <p>Bonus Turnover</p>
        <p>Turnover Without Bonus</p>
        <p>Total Bonus</p>
        <p>Total Rebate</p>
      </div>
    </div>
  );
}

export default Sumary;
