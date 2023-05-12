import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./PPMobile.module.scss";
import Select from "react-select";

const cx = classNames.bind(styles);

const optionsPP = [
  { value: "vnezpay", label: "VNEZPAY" },
  { value: "dongnanpay", label: "Dongnan Pay" },
  { value: "apviet", label: "AP Vietnam" },
];
const number = [250, 500, 1600, 2700, 5500];

function PPMobile() {
  const [value, setValue] = useState(0);
  const [active, setActive] = useState();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChangeButton = (event) => {
    setActive(event.target.id);
    setValue(event.target.value);
  };
  return (
    <div className={cx("wrapper")}>
      <form>
        <p className={cx("title")}>
          Method <span>*</span>
        </p>
        <div className={cx("select")}>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={optionsPP}
          />
        </div>
        <div>
          <p className={cx("title")}>
            Amount <span>*</span>
          </p>
          <div className={cx("inputs")}>
            <input
              type="number"
              min="50"
              max="100000"
              value={value}
              placeholder="Amount MIN/MAX: 50/100000"
              onChange={handleChange}
              className={cx("input")}
            />
          </div>
          {value ? (
            value < 150 || value > 300000 ? (
              <p className={cx("min")}>
                * Amount must be between: 150 - 300000
              </p>
            ) : null
          ) : null}
          <div className={cx("btn-block")}>
          {number.map((item, i) => (
              <div className={cx("btn-number")} key={i} onClick={()=>{setValue(item)}}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className={cx("button-deposit")}>
          <button className={cx("btn-dep")}>DEPOSIT</button>
        </div>
      </form>
    </div>
  );
}

export default PPMobile;
