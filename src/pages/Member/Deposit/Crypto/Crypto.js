import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Crypto.module.scss";
import { dataCryto } from "~/constants/mock-member/dataCrypto";
import Tera from "./Tera/Tera";
import TeraErc from "./TeraErc/TeraErc";
import Eth from "./Eth/Eth";
import Btc from "./Btc/Btc";

const cx = classNames.bind(styles);

function Crypto() {
  const [value, setValue] = useState(0);
  const [active, setActive] = useState(0);
  const [renderTab, setRenderTab] = useState("tera");

  const handleChangeTab = (index, key) => {
    setActive(index);
    setRenderTab(key);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("Channel")}>
        <p className={cx("Channel-title")}>Deposit Channel</p>
        <select className={cx("select")}>
          <option>Channel1</option>
          <option>Channel2</option>
        </select>
      </div>
      <div className={cx("inner")}>
        <div className={cx("cryto-logo")}>
          <p className={cx("cryto-title")}></p>
          <div className={cx("cryto-block")}>
            {dataCryto.map((item, index) => (
              <div
              onClick={() => handleChangeTab(index, item.key)}
                key={index}
                className={cx(
                  "cryto-item",
                  active === index ? "activeBank" : ""
                )}
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
          {renderTab === "tera" ? (
            <Tera/>
          ) : renderTab === "teraErc" ? (
            <TeraErc />
          ) : renderTab === "eth" ? (
            <Eth />
          ) : renderTab === "btc" ? (
            <Btc />
          )  : null}
        </div>
      </div>
    </div>
  );
}

export default Crypto;