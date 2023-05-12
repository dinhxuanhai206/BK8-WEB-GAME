import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./BankTranferMobile.module.scss";
import images from "~/constants/imagePromosMobile";
import { RiFileCopy2Line } from "react-icons/ri";
import Select from "react-select";
const cx = classNames.bind(styles);
const number = [250, 500, 1600, 2700, 5500];

const optionsBank = [
  { value: "aselect", label: "-- Please Select --" },
  { value: "online", label: "Online Banking" },
  { value: "counter", label: "Bank Counter" },
  { value: "atm", label: "ATM" },
  { value: "over", label: "Over The Counter" },
];

const bankTranferData = [
  {
    id: 1,
    imgBank: images.bankVCB,
    bank: "VCB Bank",
  },
  {
    id: 2,
    imgBank: images.bankTCB,
    bank: "TCB Bank",
  },
  {
    id: 3,
    imgBank: images.bankACB,
    bank: "ACB Bank",
  },
  {
    id: 4,
    imgBank: images.bankVTB,
    bank: "VTB Bank",
  },
];

function BankTranferMobile() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [check, setCheck] = useState(1);
  const [show, setShow] = useState(false);
  const [showBank, setShowBank] = useState(false);
  const [value, setValue] = useState(0);
  const [valueID, setValueID] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChangeID = (event) => {
    setValueID(event.target.value);
  };
  const handleCheck = (id) => {
    setCheck(id);
  };
  const handleShow = (show) => {
    setShow(true);
  };
  const ShowBank = () => {
    setShowBank(true);
  };
  const handleClose = (show) => {
    setShow(false);
  };
  const handleCloseBank = (show) => {
    setShowBank(false);
  };
  return (
    <div className={cx("wrapper")}>
      {showBank ? (
        <div className={cx("showbank")}>
          <div className={cx("close")} onClick={handleCloseBank}>
            X
          </div>
          <div className={cx("title")}>
            Bank <span>Offline</span>Status
          </div>
          <div className={cx("bank")}>
            <div className={cx("item-block")}>
              <div className={cx("img-bank")}>
                <img src={images.bankVTB} alt="" className={cx("img")} />
              </div>
              <div>
                <p className={cx("name-bank")}>Vietinbank Bank</p>
                <div className={cx("block")}>
                  <p>Daily</p>
                  <p>2300-0200(GMT+7)</p>
                </div>
              </div>
            </div>
            <div className={cx("item-block")}>
              <div className={cx("img-bank")}>
                <img src={images.bankBIDV} alt="" className={cx("img")} />
              </div>
              <div>
                <p className={cx("name-bank")}>BIDV Bank</p>
                <div className={cx("block")}>
                  <p>Daily</p>
                  <p>2300-0200(GMT+7)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <form className={cx("form")}>
        <div>
          <p className={cx("title")}>
            Amout <span>*</span>
          </p>
          <div className={cx("inputs")}>
            <input
              type="number"
              min="150"
              max="200000"
              value={value}
              placeholder="Amount MIN/MAX: 150/300000"
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
        </div>
        <div className={cx("bank-account")}>
          <p className={cx("titles")}>
            Bank Account <span>*</span>
          </p>
          <div className={cx("img")} onClick={ShowBank}>
            <img src={images.bankAccount} alt="" className={cx("img-ac")} />
          </div>
        </div>
        <div className={cx("block-bank")}>
          {bankTranferData.map((item) => (
            <div key={item.id}>
              <div className={cx("bank-item")}>
                <div className={cx("left")}>
                  {" "}
                  <input
                    type="radio"
                    value={item.id}
                    checked={check === item.id}
                    className={cx("input")}
                    onChange={() => handleCheck(item.id)}
                  />
                  <div className={cx("img")}>
                    <img src={item.imgBank} alt="" className={cx("img-logo")} />
                  </div>
                  <p className={cx("bank-title")}>{item.bank}</p>
                </div>
                <p className={cx("online")}>Online</p>
              </div>
              {check === item.id && (
                <div className={cx("show")}>
                  <div className={cx("block-name")}>
                    {" "}
                    <p className={cx("name")}>NGUYEN HOAI THU</p>
                    <RiFileCopy2Line
                      style={{
                        fontSize: "32px",
                        color: "#62adfd",
                        marginBottom: "-7px",
                      }}
                    />
                  </div>
                  <div className={cx("block-name")}>
                    {" "}
                    <p className={cx("id")}>1020298786</p>
                    <RiFileCopy2Line
                      style={{
                        fontSize: "32px",
                        color: "#62adfd",
                        marginBottom: "-7px",
                      }}
                    />
                  </div>
                  <p className={cx("title")}>Branch: VietNam</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className={cx("title")}>
          Deposit Channel <span>*</span>
        </p>
        <div className={cx("select")}>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={optionsBank}
            style={styles.select}
          />
        </div>
        <p className={cx("title")}>
          Reference ID <span>*</span>
        </p>
        <div className={cx("inputs")}>
          <input
            value={valueID}
            placeholder="Reference ID"
            onChange={handleChangeID}
            className={cx("input")}
          />
        </div>
        <div className={cx("block-upfile")}>
          <p className={cx("title")}>Upload Receipt</p>
          <button className={cx("btn-upload")}>Upload Receipt</button>
        </div>
        <div className={cx("button-tranfer")}>
          <button className={cx("btn-tranfer")}>SUBMIT</button>
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

export default BankTranferMobile;
