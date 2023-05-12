import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./TabRankMobile.module.scss";
import classNames from "classnames/bind";
import TabRankRightMobile from "./TabRankRightMobile";
import { rankTabMobile } from "~/constants/mock-leaderboard/rankTab";

const cx = classNames.bind(styles);

TabRankMobile.propTypes = {
  data: PropTypes.array,
};

function TabRankMobile(props) {
  const { data } = props;
  const [active, setActive] = useState(0);

  return (
    <div className={cx("wrapper","container")}>
      <div className={cx("block-left")}>
        <div className={cx("block")}>
          <div className={cx("tab-page-logo")}>
            {data && data.length > 0
              ? data?.map((item, index) => (
                  <div
                    key={index}
                    className={cx(
                      "tab-items",
                      active === index ? "active" : ""
                    )}
                    onClick={() => setActive(index)}
                  >
                    <button className={cx("logo-img")}>
                      <i style={active === index ? item.imgActive : item.img} />
                    </button>
                    <p>{item.name}</p>
                  </div>
                ))
              : null}
          </div>
          <div><TabRankRightMobile data={rankTabMobile} /></div>
        </div>
      </div>
    </div>
  );
}

export default TabRankMobile;
