import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Ewallet.module.scss";
import Doitnow from "./Doitnow/Doitnow";
import Fpay from "./Fpay/Fpay";
import Surepay from "./Surepay/Surepay";
import { dataEwallet, dataEwalletTablet } from "~/constants/mock-member/dataEllawet";
import { useMediaQuery } from "react-responsive";

const cx = classNames.bind(styles);

function Ewallet() {
  const [active, setActive] = useState(0);
  const [renderTab, setRenderTab] = useState("doitnow");
  const isTablet = useMediaQuery({ query: `(max-width: 1023px)` });
  const handleChangeTab = (index, key) => {
    setActive(index);
    setRenderTab(key);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("channel-block")}>
          <p className={cx("channel-option")}>Deposit Channel*</p>
          <div className={cx("title-block")}>
            {isTablet ? dataEwalletTablet.map((item, index) => (
              <div
                onClick={() => handleChangeTab(index, item.key)}
                className={cx("with-title", index === active ? "active" : "")}
                key={index}
              >
                <button
                  className={cx("logo-img", active === index ? "actives" : "")}
                  onClick={() => setActive(index)}
                >
                  <i style={active === index ? item.imgActive : item.img} />
                </button>
                <p className={cx("name")}>{item.name}</p>
              </div>
            )):dataEwallet.map((item, index) => (
              <div
                onClick={() => handleChangeTab(index, item.key)}
                className={cx("with-title", index === active ? "active" : "")}
                key={index}
              >
                <button
                  className={cx("logo-img", active === index ? "actives" : "")}
                  onClick={() => setActive(index)}
                >
                  <i style={active === index ? item.imgActive : item.img} />
                </button>
                <p className={cx("name")}>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={cx("message-body")}>
          {renderTab === "doitnow" ? (
            <Doitnow />
          ) : renderTab === "surepay" ? (
            <Surepay />
          ) : renderTab === "fpay" ? (
            <Fpay />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Ewallet;
