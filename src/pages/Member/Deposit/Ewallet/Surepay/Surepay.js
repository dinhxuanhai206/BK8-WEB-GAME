import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Surepay.module.scss";
import { dataTouch } from "~/constants/mock-member/dataTouch";

const cx = classNames.bind(styles);
const number = [250, 500, 1600, 2700, 5500];

function Surepay() {
  const [value, setValue] = useState(0);
  const [active, setActive] = useState(0);

  const handleChangeTab = (index) => {
    setActive(index);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChangeButton = (event) => {
    setActive(event.target.id);
    setValue(event.target.value);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("sure-block")}>
        {dataTouch.map((item, index) => (
          <div
            onClick={() => handleChangeTab(index, item.key)}
            key={index}
            className={cx("sure-item", active === index ? "activeBank" : "")}
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
      <div className={cx("amount-block")}>
        <p className={cx("amount-title")}>Deposit Amount*</p>
        <div>
          <input
            type="number"
            min="30"
            max="1000"
            value={value}
            placeholder="Min/Max Limit 30.00/1000.00"
            onChange={handleChange}
            className={cx("input")}
          />
          {value < 30 || value > 10000 ? (
            <p className={cx("min")}>Min/Max Limit: 30 / 10000</p>
          ) : null}
          <div className={cx("btn-block")}>
            {number.map((item, i) => (
              <div
                className={cx("btn-number")}
                key={i}
                onClick={() => {
                  setValue(item);
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <button className={cx("btn-save")}>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default Surepay;
