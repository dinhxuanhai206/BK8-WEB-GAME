import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./TranferContent.module.scss";

import Select from "react-select";
const cx = classNames.bind(styles);

const optionsDeposit = [
  { value: "copay", label: "CoPay" },

];
function TranferContent() {
  const [value, setValue] = useState(0);
  const [valueCode, setValueCode] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChangeCode = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>Weekly Turnover</div>
      <form className={cx("form")}>
        <div className={cx("amount")}>
          <p className={cx("titles")}>Top Up Amount</p>
          <div className={cx("inputs")}>
            <input
              type="number"
              min="0.001"
              value={value}
              placeholder="Amount"
              onChange={handleChange}
              className={cx("input")}
            />
          </div>
        </div>
        <div className={cx("amount")}>
          <p className={cx("titles")}>Special Code</p>
          <div className={cx("inputs")}>
            <input
              value={valueCode}
              placeholder="Special Code"
              onChange={handleChangeCode}
              className={cx("input")}
            />
          </div>
        </div>
        <div className={cx("amount")}>
          <p className={cx("titles")}>
            Method <span>*</span>
          </p>
          <div className={cx("select")}>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={optionsDeposit}
              style={styles.select}
            />
          </div>
        </div>
        <div className={cx("btn")}>
          <button className={cx("btn-submit")}>SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default TranferContent;
