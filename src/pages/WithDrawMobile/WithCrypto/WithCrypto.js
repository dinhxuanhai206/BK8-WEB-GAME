import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./WithCrypto.module.scss";
import Select from "react-select";

const cx = classNames.bind(styles);

const optionsCoin = [{ value: "usdt", label: "USDT-TRC20" }];
const optionsAddress = [{ value: "address", label: "-- Select Address" }];

function WithCrypto() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [valueAmount, setValueAmount] = useState(0);
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChangeAmount = (event) => {
    setValueAmount(event.target.value);
  };
  const handleShow = (show) => {
    setShow(true);
  };
  const handleClose = (show) => {
    setShow(false);
  };
  return (
    <div className={cx("wrapper")}>
      <form className={cx("form")}>
        <p className={cx("title")}>
          Method <span>*</span>
        </p>
        <div className={cx("select")}>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={optionsCoin}
            style={styles.select}
          />
        </div>
        <p className={cx("title")}>
          Address <span>*</span>
        </p>
        <div className={cx("block")}>
          {" "}
          <div className={cx("select")}>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={optionsAddress}
              style={styles.select}
            />
          </div>
          <div className={cx("add-plus")}>+</div>
        </div>
        <p className={cx("title")}>
          Amout <span>*</span>
        </p>
        <div className={cx("inputs")}>
          <input
            type="number"
            min="150"
            max="200000"
            value={valueAmount}
            placeholder="Min: 150.00/ Max: 200,000.00"
            onChange={handleChangeAmount}
            className={cx("input")}
          />
        </div>
        {valueAmount ? (
          valueAmount < 150 || valueAmount > 200000 ? (
            <p className={cx("min")}>* Amount must be between: 150 - 300000</p>
          ) : null
        ) : null}
        <p className={cx("title")}>
          Account Name <span>*</span>
        </p>
        <div className={cx("inputs")}>
          <input placeholder="USDT" className={cx("input")} />
        </div>
        <div className={cx("button-deposit")}>
          <button className={cx("btn-dep")}>WITHDRAW</button>
        </div>
      </form>
      <div className={cx("notice")}>
        <p className={cx("notice-title")}>Reminder</p>
        <div className={cx("content")}>
          <div className={cx("desc")}>
            <div className={cx("num")}>1.</div>
            <p className={cx("text-num")}>
              Please check the current exchange rate before submit withdrawal.
            </p>
          </div>
          <div className={cx("desc")}>
            <div className={cx("num")}>2.</div>
            <p className={cx("text-num")}>
              Please make sure provide correct address as withdrawal, wrong
              provide others address may result in the loss of your withdrawal.
            </p>
          </div>
          <div className={cx("desc")}>
            <div className={cx("num")}>3.</div>
            <p className={cx("text-num")}>
              Withdrawal address must belong to your personal crypto wallet
              address, strictly not allow to 3rd party crypto wallet address or
              directly to an exchange.
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithCrypto;

