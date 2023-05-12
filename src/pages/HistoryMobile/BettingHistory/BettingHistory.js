import React from "react";
import classNames from "classnames/bind";
import styles from "./BettingHistory.module.scss";

const cx = classNames.bind(styles);

function BettingHistory() {
  return <div className={cx("wrapper")}>No transaction yet</div>;
}

export default BettingHistory;
