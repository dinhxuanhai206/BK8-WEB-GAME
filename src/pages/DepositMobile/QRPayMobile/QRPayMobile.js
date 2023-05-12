import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./QRPayMobile.module.scss";
import Select from "react-select";
const cx = classNames.bind(styles);

const optionsDeposit = [
  { value: "copay", label: "CoPay" },
  { value: "jspay", label: "JSPay" },
  { value: "apviet", label: "AP Vietnam" },
  { value: "dongnanpay", label: "Dongnan Pay" },
];
const optionsMethod = [
  { value: "select", label: "-- Select A Method --" },
  { value: "momo", label: "momo E-Wallet" },

];
const number = [250, 500, 1600, 2700, 5500];

function QRPayMobile() {
  const [value, setValue] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChangeButton = (event) => {};
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={cx("wrapper")}>
      <form onSubmit={(e) => handleSubmit()}>
        <p className={cx("title")}>
          Deposit Channel <span>*</span>
        </p>
        <div className={cx("select")}>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={optionsDeposit}
          style={styles.select}
        />
        </div>
        <p className={cx("title")}>
          Method <span>*</span>
        </p>
        <div className={cx("select")}>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={optionsMethod}
          style={styles.select}
        />
        </div>
        <div>
          <p className={cx("title")}>
            Amout <span>*</span>
          </p>
          <div className={cx("inputs")}>
            <input
              type="number"
              min="100"
              max="20000"
              value={value}
              placeholder="Amount MIN/MAX: 100/20000"
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
          <p className={cx("qr-text")}>
            <span>Reminder:</span>
            <span>QR deposit can only be used to scan once only</span>
          </p>
        </div>
        <div className={cx("button-deposit")}>
          <button type="submit" className={cx("btn-dep")}>
            DEPOSIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default QRPayMobile;
