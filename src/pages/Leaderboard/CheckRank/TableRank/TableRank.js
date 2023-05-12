import React, { useState } from "react";
import styles from "./TableRank.module.scss";
import classNames from "classnames/bind";
import tableRankData from "~/constants/mock-leaderboard/tableRankData";

const cx = classNames.bind(styles);

function TableRank() {
  const [data, setData] = useState(tableRankData);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("monthly")}>
        <button className={cx("btn-monthly")}>HÀNG THÁNG</button>
      </div>
      <div className={cx("table-wrapper")}>
        <div className={cx("tr1")}>
          <div className={cx("div1")}>Hạng</div>
          <div className={cx("div2")}>Tên Tài Khoản</div>
          <div className={cx("div3")}>Doanh Số</div>
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

export default TableRank;
