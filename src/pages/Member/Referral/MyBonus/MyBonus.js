import React from "react";
import classNames from "classnames/bind";
import styles from "./MyBonus.module.scss";

const cx = classNames.bind(styles);

function MyBonus() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("history-item2")}>
        <div className={cx("date-title")}>Start Date</div>
        <div className={cx("date")}>
          <div className={cx("choseDate")}>
            <input type="date" className={cx("choseDate1")} />
          </div>
          <p className={cx("to")}>To</p>
          <div className={cx("choseDate")}>
            <input type="date" className={cx("choseDate1")} />
          </div>
          <div className={cx("btn")}>
            <button className={cx("submit-btn")}> SUBMIT</button>
          </div>
        </div>
      </div>
      <div className={cx("block-trans")}>
        <p>Member Login</p>
        <p>Register Time</p>
        <p>Currency</p>
        <p>Total Deposit</p>
        <p>Bonus Amount</p>
        <p>Status</p>
      </div>
      <div className={cx("block-trans2")}>
        <p className={cx("block__cont2")}>Showing 1 - of items.</p>
        <div className={cx("block")}>
          <p>«</p>
          <p>‹</p>
          <p>1</p>
          <p>›</p>
          <p>»</p>
        </div>
      </div>
    </div>
  );
}

export default MyBonus;
