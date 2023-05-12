import React, { useContext, useEffect, useReducer } from "react";
import classNames from "classnames/bind";
import styles from "./BankList.module.scss";
import * as userService from "~/services/userService";
import { Store } from "~/Store";


const cx = classNames.bind(styles);
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, playerBank: action.payload, loading: false };
    default:
      return state;
  }
};

const BankList = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const [{ playerBank, loading }, dispatch] = useReducer(reducer, {
    playerBank: [],
    loading: true,
  });
  console.log(playerBank);
  useEffect(() => {
    const FetchPlayBank = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      const result = await userService.getBankList(userInfo.username);
      if (result?.status === 0) {
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      }
    };
    FetchPlayBank();
  }, []);

  return (
    <div className={cx("wrapper")}>
      {playerBank.map((item) => (
        <div className={cx("bank-list")} key={item.bank_id}>
            <div className={cx('bank-id')}>
              {item.bank_id}.<span>{item.bank_name}</span>
            </div>
        </div>
      ))}
    </div>
  );
};
export default BankList;
