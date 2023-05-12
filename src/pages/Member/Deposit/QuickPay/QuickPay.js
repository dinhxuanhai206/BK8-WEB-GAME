import React, { useEffect, useReducer, useState } from "react";
import classNames from "classnames/bind";
import styles from "./QuickPay.module.scss";

import {
  dataChannel,
  dataChannelTablet,
} from "~/constants/mock-member/dataChannelPay";
import Vaderpay from "./Vaderpay/Vaderpay";
import Helppay from "./Helppay/Helppay";
import Fpay from "./Fpay/Fpay";
import { useMediaQuery } from "react-responsive";
import { useContext } from "react";
import { Store } from "~/Store";
import * as userService from "~/services/userService";
import Select from "react-select";

const cx = classNames.bind(styles);
const number = [250, 500, 1600, 2700, 5500];
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        bankAccountList: action.payload,
        loading: false,
      };
    case "FETCH_CURRENCY_SUCCESS":
      return {
        ...state,
        currency: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

function QuickPay() {
  const [value, setValue] = useState(0);
  const [bankSlip, setBankSlip] = useState();
  /* const [active, setActive] = useState(0);
  const [renderTab, setRenderTab] = useState("vaderpay");
  const isTablet = useMediaQuery({ query: `(max-width: 1023px)` });
  const handleChangeTab = (index, key) => {
    setActive(index);
    setRenderTab(key);
  }; */
  const [{ bankAccountList, currency, loading }, dispatch] = useReducer(reducer, {
    bankAccountList: [],
    currency: [],
    loading: true,
  });
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const [selectedOption, setSelectedOption] = useState(null);
  const [optionsAccount, setOptionsAccount] = useState([]);
  const [selectedOptionC, setSelectedOptionC] = useState(null);
  const [optionsCurrency, setOptionsCurrency] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      const result = await userService.getOfflineGatewayBank(userInfo.username);
      if (result?.status === 0) {
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        var temp = [];
        for (var item of result.data) {
          const newOptions = {
            value: item.bank_account_id,
            label: item.bank_name,
            name: item.bank_account_name,
            number: item.bank_account_no,
          };
          temp.push(newOptions);
        }
        setOptionsAccount(temp);
      }
    };
    const fetchCurrency = async () => {
      const result = await userService.getCurrency(userInfo.username)
      if (result?.status === 0) {
        dispatch({ type: "FETCH_CURRENCY_SUCCESS", payload: result.data });
        var temp = [];
        for (var item of result.data) {
          const newOptions = {
            value: item.currency_id,
            label: item.currency_name,
            d_currency_rate: item.d_currency_rate,
            t_currency_rate: item.t_currency_rate,
            w_currency_rate: item.w_currency_rate,
          };
          temp.push(newOptions);
        }
        setOptionsCurrency(temp);
      }
    }
    fetchData();
    fetchCurrency()
  }, [userInfo.username]);

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const resData = {
      currency_id: 1,
      play_bank_id: selectedOption.label,
      bank_account_id: '123123',
      bank_slip: bankSlip
    }
    const deposit = await userService.userDeposit(userInfo.username, value, 1, resData)
    if (deposit.status === 0) {
      console.log('success')
    }
  }

  return (
    <div className={cx("wrapper")}>
      <form className={cx("inner")} onSubmit={(e) => onSubmitHandler(e)}>
        <div className={cx("deposit-channel")}>
          <p className={cx("channel-title")}>Deposit Channel*</p>
          <div className={cx("channel-select")}>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={optionsAccount}
              style={styles.select}
            />
          </div>
        </div>
        <div className={cx("deposit-channel")}>
          <label className={cx("channel-title")}>Name Account BK8 </label>
          <div className={cx("channel-select")}>
            <input className={cx("input")} defaultValue={selectedOption?.name || ''} disabled />
          </div>
        </div>
        <div className={cx("deposit-channel")}>
          <label className={cx("channel-title")}>Number Account BK8</label>
          <div className={cx("channel-select")}>
            <input className={cx("input")} defaultValue={selectedOption?.number || ''} disabled />
          </div>
        </div>
        <div className={cx("deposit-channel")}>
          <p className={cx("channel-title")}>Currency Name*</p>
          <div className={cx("channel-select")}>
            <Select
              defaultValue={selectedOptionC}
              onChange={setSelectedOptionC}
              options={optionsCurrency}
              style={styles.select}
            />
          </div>
        </div>
        <div className={cx("vader-block")}>
          <p className={cx("vader-title")}>Deposit Amount*</p>
          <div className={cx("form")}>
            <input
              type="number"
              min="30"
              max="100000"
              value={value}
              placeholder="Min/Max Limit 30.00/10,000.00"
              onChange={(e) => setValue(e.target.value)}
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
                  onClick={() => { setValue(item) }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={cx("deposit-channel")}>
          <label className={cx("channel-title")}>Bank Slip</label>
          <div className={cx("channel-select")}>
            <input className={cx("input")} onChange={(e) => setBankSlip(e.target.files[0])} type='file' accept="image/png" required/>
          </div>
        </div>
        <button type='submit' className={cx("btn-save")}> SUBMIT</button>
      </form>
    </div >
  );
}

export default QuickPay;
