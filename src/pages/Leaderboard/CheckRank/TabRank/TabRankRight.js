import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./TabRankRight.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

TabRankRight.propTypes = {
  data: PropTypes.array,
};

function TabRankRight(props) {
  const { data } = props;
  const [active, setActive] = useState(5);

  return (
    <div className={cx("tab-page-logo")}>
      {data && data.length > 0
        ? data?.map((item, index) => (
            <li key={index} className={cx("tab-items")}>
              <button
                className={cx("logo-img", active === index ? "active" : "")}
                onClick={() => setActive(index)}
              >
                <i style={active === index ? item.imgActive : item.img} />
                <p>{item.name}</p>
              </button>
            </li>
          ))
        : null}
    </div>
  );
}

export default TabRankRight;
