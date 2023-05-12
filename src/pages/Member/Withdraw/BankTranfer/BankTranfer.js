import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./BankTranfer.module.scss";
import { dataBankTranfer } from "~/constants/mock-member/dataBanktranfer";
import iconAttention from "../../../../assets/images/img-member/img-withdraw/attention.png";

const cx = classNames.bind(styles);

function BankTranfer() {
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
      <div className={cx("Banktranfer-bank")}>
        <p className={cx("bank-title")}></p>
      </div>
      <div className={cx("bank-accout")}>
        <p className={cx("bankAccount-title")}>Bank *</p>
      </div>
      <div className={cx("bank-accout")}>
        <div className={cx("btn-bank")}>
          <button className={cx("btn-Add")}>ADD BANK</button>
        </div>
      </div>
      <div>
        <div className={cx("accountName")}>
          <p className={cx("accountName-title")}>Account Name *</p>
          <input className={cx("accountName-input")} type="text"></input>
        </div>
      </div>
      <div>
        <div className={cx("accountNo")}>
          <p className={cx("accountNo-title")}>Account No *</p>
          <input className={cx("accountNo-input")} type="text"></input>
        </div>
      </div>
      <div className={cx("amount")}>
        <p className={cx("amount-title")}>Amount (MYR) *</p>
        <div className={cx("input")}>
          <input
            type="number"
            min="50"
            max="50000"
            value={value}
            placeholder="Min/Max Limit: 50.00 / 50000.00"
            className={cx("amount-input")}
            onChange={handleChange}
          />
          {value < 30 || value > 50000 ? (
            <p className={cx("notice")}>
              {" "}
              <img className={cx("imgAttenion")} src={iconAttention} /> Limit
              Balance: 50000.00/Daily Count Balance: 10{" "}
            </p>
          ) : null}
        </div>
      </div>
      <div className={cx("block-btn")}>
        <p className={cx("channel-title")}></p>
        <button className={cx("btn-submit")}>SUBMIT</button>
      </div>
    </div>
  );
}

export default BankTranfer;
