import React, { useEffect, useState, useReducer, useContext } from "react";
import classNames from "classnames/bind";
import styles from "./DepositMobile.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import QuickPayMobile from "./QuickPayMobile/QuickPayMobile";
import BankTranferMobile from "./BankTranferMobile/BankTranferMobile";
import QRPayMobile from "./QRPayMobile/QRPayMobile";
import MobileCard from "./MobileCard/MobileCard";
import CryptoMobile from "./CryptoMobile/CryptoMobile";
import PPMobile from "./PPMobile/PPMobile";
import BankQRMobile from "./BankQRMobile/BankQRMobile";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillPlusCircle,
} from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Store } from "~/Store.js";
import * as userService from "~/services/userService";

const cx = classNames.bind(styles);

const tabPageDeposit = [
  {
    display: "Quick Pay",
  },
  {
    display: "Bank Tranfer",
  },
  {
    display: "QR Pay",
  },
  {
    display: "Mobile Card",
  },
  {
    display: "Crypto",
  },
  {
    display: "P2P",
  },
  {
    display: "Bank QR",
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
const DepositMobile = () => {
  const [active, setActive] = useState(1);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const pagination = {
    renderBullet: function (index, className) {
      return `<span class="${className} ${cx("custom-pagination")}"></span>`;
    },
  };

  const [number, setNumber] = useState(true);
  const handleChangeEye = () => {
    setNumber(!number);
  };

  const handleChangeTab = async (item) => {
    setActive(item.type_code);
  };

  const [{ paymentGatewayType, promotions, loading }, dispatch] = useReducer(
    reducer,
    {
      paymentGatewayType: [],
      promotions: [],
      loading: true,
    }
  );
  useEffect(() => {
    const fetchPaymentGatewayType = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      const result = await userService.getPaymentGatewayType(userInfo.username);
      if (result?.status === 0) {
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      }
    };
    fetchPaymentGatewayType();
  }, []);

  return (
    <div className={cx("deposit-wrapper")}>
      <div className={cx("coin")}>
        <p className={cx("main")}>Main Wallet</p>
        <div className={cx("left")}>
          <div onClick={handleChangeEye}>
            {number ? (
              <AiOutlineEye
                style={{
                  color: "black",
                  fontSize: "20px",
                  marginBottom: "-6px",
                }}
              />
            ) : (
              <AiOutlineEyeInvisible
                style={{
                  color: "black",
                  fontSize: "20px",
                  marginBottom: "-6px",
                }}
              />
            )}
          </div>
          <div className={cx("block")}>
            <div className={cx("vnd")}>
              MYR <span>{number ? userInfo.balance : "***"}</span>{" "}
              <BiRefresh
                style={{
                  color: "blue",
                  fontSize: "20px",
                  marginBottom: "-4px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={cx("inner", "container")}>
        <Swiper
          slidesPerView={4}
          spaceBetween={1}
          modules={[Pagination]}
          className={cx("mySwiper")}
        >
          {paymentGatewayType?.map((item, index) => (
            <SwiperSlide className={cx("items")} key={index}>
              <button
                onClick={() => handleChangeTab(item)}
                className={cx("btn", index === active - 1 && "active")}
              >
                {item.label}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
          {paymentGatewayType.length > 0 && active === 1 ? (
            <QuickPayMobile code={active} />
          ) : active === 2 ? (
            <CryptoMobile code={active} />
          ) : active === 3 ? (
            <QRPayMobile />
          ) : active === 4 ? (
            <BankTranferMobile />
          ) : active === 5 ? (
            <MobileCard />
          ) : active === 6 ? (
            <PPMobile />
          ) : active === 7 ? (
            <BankQRMobile />
          ) : null}
        </div>
      </div>
      <p className={cx("titles")}>Deposit History</p>
      <div className={cx("yet")}>No transaction yet</div>
      <Link to="/history" className={cx("view")}>
        view more
      </Link>
    </div>
  );
};

export default DepositMobile;
