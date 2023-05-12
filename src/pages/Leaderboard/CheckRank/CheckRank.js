import React, { useState } from "react";
import classNames from "classnames/bind";
import images from "~/constants/images";
import styles from "./CheckRank.module.scss";
import TabRank from "./TabRank/TabRank";
import { dataTab } from "~/constants/mock-leaderboard/dataTab";
import TableRank from "./TableRank/TableRank";
const cx = classNames.bind(styles);

const CheckRank = () => {
  return (
    <div className="">
      <div className={cx("wrapper")}>
        <div className={cx("tabRank")}>
          <TabRank data={dataTab} />
        </div>
        <div className={cx("tableRank")}>
          <TableRank />
        </div>
      </div>
    </div>
  );
};

export default CheckRank;
