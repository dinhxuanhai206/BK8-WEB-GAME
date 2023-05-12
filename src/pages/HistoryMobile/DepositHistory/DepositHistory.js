import React from "react";
import classNames from "classnames/bind";
import styles from "./DepositHistory.module.scss";

const cx = classNames.bind(styles);

function DepositHistory() {
  return (
    <div className={cx("wrapper")}>
        No transaction yet
    </div>
  );
}

export default DepositHistory;
