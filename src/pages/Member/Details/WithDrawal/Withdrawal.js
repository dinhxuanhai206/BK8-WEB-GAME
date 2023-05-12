import React, { useContext, useEffect, useReducer } from "react";
import classNames from "classnames/bind";
import styles from "./Withdrawal.module.scss";
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

function Withdrawal() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const [{ playerBank, loading }, dispatch] = useReducer(
    reducer,
    {
      playerBank: [],
      loading: true,
    }
  );
  console.log(playerBank)
  useEffect(() => {
    const FetchPlayBank = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      const result = await userService.getPlayerBank(userInfo.username);
      if (result?.status === 0) {
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      }
    };
    FetchPlayBank();
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("fiel")}>
        <div className={cx("bank")}>Bank</div>
        <div className={cx("branch")}>Bank Branch</div>
        <div className={cx("account-holder")}>Account Holder</div>
        <div className={cx("account-no")}>Account No</div>
      </div>
      <div>
        <form className={cx("form")}>
          <div className={cx("Bank-blog")}>
            <p className={cx("bank-title")}>Bank*</p>
            <select className={cx("select")}>
              <option>--- Select A Bank ---</option>
              <option>Maybank Berhad</option>
              <option>CIMB Bank Berhad</option>
              <option>Public Bank Berhad</option>
              <option>RHB Banking Group</option>
              <option>Hong Leong Bank Berhad</option>
              <option>AmBank Group</option>
              <option>Bank Rakyat</option>
              <option>BHSBC Bank</option>
              <option>Bank Islam Malaysia</option>
              <option>Affin Bank Berhad/ Affin Islamic Bank</option>
              <option>Alliance Bank</option>
              <option>Bank Simpanan Nasional Berhad</option>
              <option>Agro Bank</option>
              <option>OCBC Bank</option>
              <option>United Overseas Bank</option>
              <option>SC Bank</option>
              <option>Citibank</option>
              <option>Other Bank</option>
            </select>
          </div>
          <div className={cx("account-blog")}>
            <p className={cx("account-title")}>Account Name*</p>
            <input
              type="text"
              placeholder="kkk kkk kkk"
              className={cx("input")}
            />
          </div>
          <div className={cx("account-no")}>
            <p className={cx("accountno-title")}>Account No*</p>
            <input type="text" className={cx("input")} />
          </div>
          <div className={cx("save")}>
            <p className={cx("save-title")}></p>
            <button className={cx("btn-save")}>SAVE</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Withdrawal;
