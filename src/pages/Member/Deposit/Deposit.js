import { useEffect, useState, useContext, useReducer } from "react";
import classNames from "classnames/bind";
import styles from "./Deposit.module.scss";
import QuickPay from "../Deposit/QuickPay/QuickPay";
import BankTransfer from "./BankTransfer/BankTransfer";
import Crypto from "../Deposit/Crypto/Crypto";
import Ewallet from "../Deposit/Ewallet/Ewallet";
import {
  dataDeposit,
  dataDepositTablet,
} from "~/constants/mock-member/dataDeposit";
import { useMediaQuery } from "react-responsive";
import { AiOutlineWarning } from "react-icons/ai";
import * as userService from "~/services/userService";
import { Store } from "~/Store.js";
import Moment from 'react-moment';

const cx = classNames.bind(styles);
const importantData = [
  {
    id: 1,
    title:
      "Always check for the latest active deposit bank details before making a deposit",
  },
  {
    id: 2,
    title:
      ' For using deposit option "Bank Transfer", Please make the transfer before submit the transaction to avoid the transaction is delay. Always check for the latest active deposit bank details before',
  },
  {
    id: 3,
    title:
      " Depositor’s ACCOUNT NAME must match with registered full name. We do not encourage transaction made using 3rd party/company account.",
  },
  {
    id: 4,
    title:
      'Please DO NOT fill "BK8" # or any sensitive words related to gambling as reference/remark in your online transfer transaction',
  },
  {
    id: 5,
    title:
      "Please take note that 1x turnover is required for all deposits made before any withdrawal can be processed.",
  },
  {
    id: 6,
    title:
      "Kindly check with our 24/7 LIVECHAT if your transaction is pending for more than 5 minutes.",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, paymentGatewayType: action.payload, loading: false };
    case "FETCH_PROMO_SUCCESS":
      return { ...state, promotions: action.payload, loading: false };
    default:
      return state;
  }
};

function Deposit() {
  const [active, setActive] = useState(1);
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const isTablet = useMediaQuery({ query: `(max-width: 1023px)` });
  const [{ paymentGatewayType, promotions, loading }, dispatch] = useReducer(
    reducer,
    {
      paymentGatewayType: [],
      promotions: [],
      loading: true,
    }
  );
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchPaymentGatewayType = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      const result = await userService.getPaymentGatewayType(userInfo.username);
      if (result?.status === 0) {
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      }
    };
    /* const fetchPromotionList = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      const result = await userService.getPromotionList(userInfo.username);
      if (result?.status === 0) {
        const promotionList = result.data
        ctxDispatch({ type: "USER_UPDATE", payload: promotionList });
      }
    };
    fetchPromotionList(); */

    fetchPaymentGatewayType();
  }, []);

  const handleChangeTab = async (item) => {
    setActive(item.type_code);
  };

  const typeListHandler = (item) => {
    console.log(item);
  };

  return (
    <div className={cx("wrapper")}>
      <p className={cx("deposit-title")}>DEPOSIT</p>
      <div className={cx("deposit-container")}>
        <div className={cx("inner")}>
          <div className={cx("deposit-block")}>
            <p className={cx("deposit-option")}>Deposit Options*</p>
            <div className={cx("title-block")}>
              {paymentGatewayType?.map((item, index) => (
                <div
                  onClick={() => handleChangeTab(item)}
                  className={cx("with-title", index === active - 1 && "active")}
                  key={index}
                >
                  <span className={cx("name")}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={cx("message-body")}>
            {/* {paymentGatewayTypeList?.map((item, index) =>(
              <div key={index} className={cx("message-content")} onClick={()=>{typeListHandler(item)}}>
                {item.payment_gateway_code}
                </div>
            ))} */}
            {paymentGatewayType.length > 0 && active === 1 ? (
              <QuickPay code={active} />
            ) : active === 2 ? (
              <BankTransfer code={active} /* data={paymentGatewayTypeList} */ />
            ) : active === 3 ? (
              <Crypto />
            ) : active === 4 ? (
              <Ewallet />
            ) : null}
          </div>
          <div className={cx("block-trans")}>
            <p>Transaction Date</p>
            <p>Amount</p>
            <p>Method</p>
            <p>Status</p>
          </div>
          <div className={cx("block-date")}>
            <p>
              <Moment format="DD/MM/YYYY" />
              &nbsp;
              <Moment format="HH:mm:ss" />
            </p>
            <p>MYR 35.50</p>
            <p>VaderPay - Quick Pay</p>
            <p className={cx("reject")}>Rejected</p>
          </div>
        </div>
        <div className={cx("deposit-right")}>
          <div className={cx("right-title")}>
            <AiOutlineWarning style={{ fontSize: "34px", color: "blue" }} />
            <div className={cx("span")}>IMPORTANT NOTICE</div>
          </div>
          <div className={cx("name")}>
            {importantData.map((item) => (
              <div className={cx("desc")} key={item.id}>
                <div className={cx("num")}>{item.id}.</div>
                <p className={cx("text-num")}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
