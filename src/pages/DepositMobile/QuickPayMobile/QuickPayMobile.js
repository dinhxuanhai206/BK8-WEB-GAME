import React, { useEffect, useReducer, useState, useContext } from "react";
import classNames from "classnames/bind";
import styles from "./QuickPayMobile.module.scss";
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

const number = [250, 500, 1600, 2700, 5500];

function QuickPayMobile() {
  const [value, setValue] = useState(0);
  const [bankSlip, setBankSlip] = useState();
  const [active, setActive] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [{ bankAccountList, currency, loading }, dispatch] = useReducer(
    reducer,
    {
      bankAccountList: [],
      currency: [],
      loading: true,
    }
  );
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const [optionsAccount, setOptionsAccount] = useState([]);
  const [selectedOptionC, setSelectedOptionC] = useState(null);
  const [optionsCurrency, setOptionsCurrency] = useState([]);
  // const handleChangeButton = (event) => {
  //   setActive(event.target.id);
  //   setValue(event.target.value);
  // };

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
    e.preventDefault();
    const resData = {
      currency_id: 1,
      play_bank_id: selectedOption.label,
      bank_account_id: "123123",
      bank_slip: bankSlip,
    };
    const deposit = await userService.userDeposit(
      userInfo.username,
      value,
      1,
      resData
    );
    if (deposit.status === 0) {
      console.log("success");
    }
  };

  return (
    <div className={cx("wrapper")}>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <p className={cx("title")}>
          Method <span>*</span>
        </p>
        <div className={cx("select")}>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={optionsAccount}
            style={styles.select}
          />
        </div>
        <p className={cx("title")}>
          Name Account BK8 <span>*</span>
        </p>
        <div className={cx("select")}>
          <input
            className={cx("input")}
            defaultValue={selectedOption?.name || ""}
            disabled
          />
        </div>
        <p className={cx("title")}>
          Number Account BK8 <span>*</span>
        </p>
        <div className={cx("select")}>
          <input
            className={cx("input")}
            defaultValue={selectedOption?.number || ""}
            disabled
          />
        </div>
        <p className={cx("title")}>
          Currency Name <span>*</span>
        </p>
        <div className={cx("select")}>
          <Select
            defaultValue={selectedOptionC}
            onChange={setSelectedOptionC}
            options={optionsCurrency}
            style={styles.select}
          />
        </div>
        <div>
          <p className={cx("title")}>
            Amount <span>*</span>
          </p>
          <div className={cx("inputs")}>
            <input
              type="number"
              min="150"
              max="300000"
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
        <div className={cx("button-deposit")}>
          <button className={cx("btn-dep")}>DEPOSIT</button>
        </div>
      </form>
    </div>
  );
}

export default QuickPayMobile;
