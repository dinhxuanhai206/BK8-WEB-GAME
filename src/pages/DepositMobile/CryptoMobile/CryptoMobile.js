import React, { useEffect, useReducer, useState, useContext } from "react";
import classNames from "classnames/bind";
import styles from "./CryptoMobile.module.scss";
import Select from "react-select";
import { Store } from "~/Store";
import * as userService from "~/services/userService";
const cx = classNames.bind(styles);

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        paymentGatewayTypeList: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
function CryptoMobile({ code }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [value, setValue] = useState(0);
  const [active, setActive] = useState(0);
  const [{ paymentGatewayTypeList, loading }, dispatch] = useReducer(reducer, {
    paymentGatewayTypeList: [],
    loading: true,
  });
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const [optionsBank, setOptionsBank] = useState([
    { value: "MB", label: "Maybank Berhad" },
    { value: "PBB", label: "Public Bank Berhad" },
    { value: "CIMB", label: "CIMB Bank Berhad" },
  ]);
  const [rate, setRate] = useState(1.0);

  useEffect(() => {
    const fetchList = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      const result = await userService.getPaymentGatewayTypeList(code);
      if (result?.status === 0) {
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      }
    };
    fetchList();
  }, [code]);

  const onClickBankHandler = (index, data) => {
    setActive(index);
    setRate(data.t_currency_rate);
    var temp = [];
    for (var item of data.bank_data) {
      const newOptions = { value: item, label: item + " Bank Berhad" };
      temp.push(newOptions);
    }
    setOptionsBank(temp);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("bank")}>
        {paymentGatewayTypeList?.map((item, index) => (
          <div
            key={index}
            className={cx("bank-item", active === index ? "active" : "")}
            onClick={() => onClickBankHandler(index, item)}
          >
            <p className={cx("name")}>{item.payment_gateway_code}</p>
          </div>
        ))}
      </div>
      <form>
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
          Currency <span>*</span>
        </p>
        <div className={cx("select")}>
          <input disabled className={cx("input")} value="MYR" />
        </div>
        <p className={cx("title")}>
          Amount(MYR)<span>*</span>
        </p>
        <div className={cx("select")}>
          <input
            disabled
            placeholder="0.00"
            className={cx("input")}
            value={(value * rate).toFixed(2)}
          />
        </div>
        <p className={cx("title")}>
          Currency Rate<span>*</span>
        </p>
        <div className={cx("select")}>
          <input
            disabled
            placeholder="1.0000"
            className={cx("input")}
            value={rate}
          />
        </div>
        <p className={cx("title")}>
          Receive Amount<span>*</span>
        </p>
        <div className={cx("select")}>
          <input disabled placeholder="0.00" className={cx("input")} />
        </div>
        <p className={cx("title")}>
          Promotion<span>*</span>
        </p>
        <div className={cx("select")}>
          <p>{userInfo.promotionList}</p>
        </div>
      </form>
    </div>
  );
}

export default CryptoMobile;
