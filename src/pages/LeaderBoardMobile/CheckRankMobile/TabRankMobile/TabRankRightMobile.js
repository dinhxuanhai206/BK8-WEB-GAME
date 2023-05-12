import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./TabRankRightMobile.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

TabRankRightMobile.propTypes = {
  data: PropTypes.array,
};

function TabRankRightMobile(props) {
  const { data } = props;
  const [active, setActive] = useState(0);

  return (
    <div className={cx("tab-page-logo")}>
      {data && data.length > 0
        ? data?.map((item, index) => (
            <div key={index} className={cx("tab-items")}>
              <button
                className={cx("logo-img", active === index ? "active" : "")}
                onClick={() => setActive(index)}
              >
                <i style={active === index ? item.imgActive : item.img} />
              </button>
            </div>
          ))
        : null}
    </div>
  );
}

export default TabRankRightMobile;
