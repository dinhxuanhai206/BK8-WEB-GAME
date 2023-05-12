import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./TabRank.module.scss";
import classNames from "classnames/bind";
import TabRankRight from "./TabRankRight";
import TableRank from "../TableRank/TableRank";
import { rankTab } from "~/constants/mock-leaderboard/rankTab";
import images from "~/constants/Leaderboard/leaderBoardImages";
const cx = classNames.bind(styles);

TabRank.propTypes = {
  data: PropTypes.array,
};

function TabRank(props) {
  const { data } = props;
  const [active, setActive] = useState(0);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("block-left")}>
        <div className={cx("top-image")}>
          <img src={images.levelTopDimond} className={cx("img")}/>
        </div>
        <div className={cx("block")}>
          <div className={cx("tab-page-logo")}>
            {data && data.length > 0
              ? data?.map((item, index) => (
                  <li key={index} className={cx("tab-items")}>
                    <button
                      className={cx(
                        "logo-img",
                        active === index ? "active" : ""
                      )}
                      onClick={() => setActive(index)}
                    >
                      <i style={active === index ? item.imgActive : item.img} />
                      <p>{item.name}</p>
                    </button>
                  </li>
                ))
              : null}
          </div>
          <div>
            <TabRankRight data={rankTab} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabRank;
