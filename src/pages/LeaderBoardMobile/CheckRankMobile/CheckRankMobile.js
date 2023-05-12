import React from "react";
import classNames from "classnames/bind";
import styles from "./CheckRankMobile.module.scss";
import TabRankMobile from "./TabRankMobile/TabRankMobile";
import TableRankMobile from "./TableRankMobile/TableRankMobile";
import { dataTabMobile } from "~/constants/mock-leaderboard/dataTab";

const cx = classNames.bind(styles);

function CheckRankMobile() {
  return (
    <div>
         <div className={cx("wrapper")}>
        <TabRankMobile data={dataTabMobile  }/>
        <TableRankMobile/>
      </div>
    </div>
  );
}

export default CheckRankMobile;
