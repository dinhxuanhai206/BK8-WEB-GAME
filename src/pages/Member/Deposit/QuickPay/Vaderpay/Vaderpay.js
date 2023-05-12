import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Vaderpay.module.scss";

const cx = classNames.bind(styles);
const number = [250, 500, 1600, 2700, 5500];
function Vaderpay() {
  const [value, setValue] = useState(0);
  const [active, setActive] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChangeButton = (event) => {
    setActive(event.target.id);
    setValue(event.target.value);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("vader-block")}>
        <p className={cx("vader-title")}>Deposit Amount*</p>
        <form className={cx("form")}>
          <input
            type="number"
            min="30"
            max="100000"
            value={value}
            placeholder="Min/Max Limit 30.00/10,000.00"
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
        </form>
      </div>
    </div>
  );
}

export default Vaderpay;
