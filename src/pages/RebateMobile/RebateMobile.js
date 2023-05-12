import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./RebateMobile.module.scss";
import Rebate from "./Rebate/Rebate";
import RebateHistory from "./RebateHistory/RebateHistory";


const cx = classNames.bind(styles);

const tabPageSponsor = [
  {
    display: "Rebate",
  },
  {
    display: "History",
  },
];

const RebateMobile = () => {
  const [active, setActive] = useState(0);

  const handleChangeTab = (index) => {
    setActive(index);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("tab-rebate")}>
          {tabPageSponsor.map((item, index) => (
            <div
              className={cx(
                "tab-rebate__items",
                index === active ? "active" : ""
              )}
              key={index}
            >
              <button
                onClick={() => handleChangeTab(index)}
                className={cx("tab-rebate__name")}
              >
                {item.display}
              </button>
            </div>
          ))}
        </div>
        <div>
          {active === 0 ? (
            <Rebate />
          ) : active === 1 ? (
            <RebateHistory />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RebateMobile;
