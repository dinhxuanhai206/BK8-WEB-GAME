import React, { useState } from "react";
import styles from "./TableRankMobile.module.scss";
import classNames from "classnames/bind";
import tableRankData from "~/constants/mock-leaderboard/tableRankData";

const cx = classNames.bind(styles);

function TableRankMobile() {
  const [data, setData] = useState(tableRankData);

  return (
    <div className={cx("wrapper", "container")}>
      <div className={cx("table-wrapper")}>
        <div className={cx("tr1")}>
          <div className={cx("div1")}>Rank</div>
          <div className={cx("div2")}>Username</div>
          <div className={cx("div3")}>Turnover</div>
        </div>

        {data.map((item, index) => (
          <div key={index} className={cx("tr2")}>
            <div className={cx("number")}>{item.number}</div>

            <div className={cx("username")}>{item.userName}</div>

            <div className={cx("turnover")}>{item.turnover}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableRankMobile;
