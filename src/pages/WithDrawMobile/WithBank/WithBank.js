import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./WithBank.module.scss";

import Select from "react-select";
const cx = classNames.bind(styles);

const optionsDeposit = [
  { value: "copay", label: "CoPay" },
  { value: "jspay", label: "JSPay" },
  { value: "apviet", label: "AP Vietnam" },
  { value: "dongnanpay", label: "Dongnan Pay" },
];

function WithBank() {
  const [selectedOption, setSelectedOption] = useState("usdt");
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
          Bank <span>*</span>
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
          Account Name <span>*</span>
        </p>
        <div className={cx("inputs")}>
          <input disabled className={cx("input-name")} />
        </div>
        
        <p className={cx("title")}>
          Account No <span>*</span>
        </p>
        <div className={cx("inputs")}>
          <input
            type="number"
            value={value}
            placeholder="Amount number"
            onChange={handleChange}
            className={cx("input")}
          />
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
        <div className={cx("button-deposit")}>
          <button className={cx("btn-dep")}>WITHDRAW</button>
        </div>
      </form>
      <div className={cx("notice")}>
        <p className={cx("notice-title")} onClick={() => handleShow(show)}>
          IMPORTANT NOTICE
        </p>
        {show ? (
          <div className={cx("notice-content")}>
            <div className={cx("close")} onClick={handleClose}>
              X
            </div>
            <div className={cx("content")}>
              <div className={cx("desc")}>
                <div className={cx("num")}>1.</div>
                <p className={cx("text-num")}>
                  Always check for the latest active deposit bank details before
                  making a deposit.
                </p>
              </div>
              <div className={cx("desc")}>
                <div className={cx("num")}>2.</div>
                <p className={cx("text-num")}>
                  For using deposit option "Bank Transfer", Please make the
                  transfer before submit the transaction to avoid the
                  transaction is delay.
                </p>
              </div>
              <div className={cx("desc")}>
                <div className={cx("num")}>3.</div>
                <p className={cx("text-num")}>
                  <span>Depositor’s ACCOUNT NAME </span>must match with
                  registered full name. We do not encourage transaction made
                  using 3rd party/company account.
                </p>
              </div>
              <div className={cx("desc")}>
                <div className={cx("num")}>4.</div>
                <p className={cx("text-num")}>
                  or any sensitive words related to gambling as reference/remark
                  in your online transfer transaction.
                </p>
              </div>
              <div className={cx("desc")}>
                <div className={cx("num")}>5.</div>
                <p className={cx("text-num")}>
                  Please take note that 1x turnover is required for all deposits
                  made before any withdrawal can be processed.
                </p>
              </div>
              <div className={cx("desc")}>
                <div className={cx("num")}>6.</div>
                <p className={cx("text-num")}>
                  Please take note that 1x turnover is required for all deposits
                  made before any withdrawal can be processed.
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
     
    </div>
  );
}

export default WithBank;
