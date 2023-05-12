import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import styles from "./BankingMobile.module.scss";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import images from "~/constants/imagePromosMobile";
import { BiRefresh } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import TranferCollab from "~/components/TranferCollab/TranferCollab";
import TranferContent from "~/components/TranferCollab/TranferContent/TranferContent";
import { Store } from "~/Store";

import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const tabTranfer = [
  {
    key: "all",
    display: "ALL",
  },
  {
    key: "sport",
    display: "SPORTS",
  },
  {
    key: "eSport",
    display: "E-SPORTS",
  },
  {
    key: "casino",
    display: "CASINO",
  },
  {
    key: "slots",
    display: "SLOTS",
  },
  {
    key: "fishing",
    display: "FISHING",
  },
  {
    key: "games",
    display: "3D GAMES",
  },
  {
    key: "lottery",
    display: "LOTTERY",
  },
];

const bankingNav = [
  {
    img: images.headerDeposit,
    name: "Deposit",
    link: "/deposit",
  },
  {
    img: images.headerTranfer,
    name: "Tranfer",
    link: "/tranfer",
  },
  {
    img: images.headerWithdraw,
    name: "Withdraw",
    link: "/withdraw",
  },
  {
    img: images.headerHistory,
    name: "History",
    link: "/history",
  },
  {
    img: images.headerInstant,
    name: "Instant rebate",
    link: "/minstantrebate",
  },
];
const dataTranferMobile = [
  { id: 1, title: "AE Casio", category: ["all", "sport"] },
  { id: 2, title: "AllBet", category: ["all", "eSport"] },
  { id: 3, title: "Asia Gaming", category: ["all", "casino"] },
  { id: 4, title: "Big Gaming", category: ["all", "slots"] },
  { id: 5, title: "BK8-Sports", category: ["all", "fishing"] },
  { id: 6, title: "c-Sports", category: ["all", "games"] },
  { id: 7, title: "Dream Gaming", category: ["all", "lottery"] },
  { id: 8, title: "EBET", category: ["all", "sport"] },
];

function BankingMobile() {
  const [renderTab, setRenderTab] = useState("all");
  const [number, setNumber] = useState(true);
  const [show, setShow] = useState(false);
  const [focusTranferCollab, setFocusTranferCollab] = useState(1);
  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { userInfo } = state

  const handleChangeEye = () => {
    setNumber(!number);
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
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
                VND <span>{number ? userInfo.balance : '***'}</span>{" "}
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
        <div className={cx("right")}>
          <div className={cx("img")}>
            <img src={images.restore} alt="" className={cx("img-store")} />
          </div>
          <p className={cx("title")}>Restore</p>
        </div>
      </div>
      {!show ? (
        <div className={cx("show-blance")} onClick={() => handleShow(true)}>
          <p className={cx("show")}>Show Blance / Turnover </p>
          <AiOutlinePlusCircle style={{ fontSize: "30px" }} />
        </div>
      ) : (
        <div className={cx("content-show")}>
          <div className={cx("hide-blance")} onClick={() => handleShow(false)}>
            <p className={cx("show")}>Hide Blance / Turnover </p>
            <AiOutlineMinusCircle style={{ fontSize: "30px" }} />
          </div>
          <div className={cx("inner")}>
            <Swiper
              slidesPerView={3}
              spaceBetween={8}
              modules={[Pagination]}
              className={cx("mySwiper")}
            >
              {tabTranfer.map((item, index) => (
                <SwiperSlide className={cx("items")} key={index}>
                  <button
                    onClick={() => setRenderTab(item.key)}
                    className={cx("btn", renderTab === item.key && "active")}
                  >
                    {item.display}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={cx("content-turnover")}>
            <div className={cx("total")}>
              <p>Weekly Turnover Total</p>
              <div className={cx("block-total")}>
                <p>0.00</p>
                <BiRefresh
                  style={{
                    color: "blue",
                  }}
                />
              </div>
            </div>
          </div>
          <div className={cx("tranfer-list")}>
            {dataTranferMobile?.map((item, index) => {
              if (renderTab === "all") {
                return (
                  <div key={index} className={cx("item")}>
                    <TranferCollab
                      title={item.title}
                      bg={"#bebebe"}
                      index={item.id}
                      onClick={() => setFocusTranferCollab(item.id)}
                      {...{ focusTranferCollab, setFocusTranferCollab }}
                    >
                      <TranferContent />
                    </TranferCollab>
                  </div>
                );
              } else {
                if (item.category?.includes(renderTab)) {
                  return (
                    <div key={index} className={cx("item")}>
                      <TranferCollab
                        title={item.title}
                        bg={"#bebebe"}
                        index={item.id}
                        onClick={() => setFocusTranferCollab(item.id)}
                        {...{ focusTranferCollab, setFocusTranferCollab }}
                      >
                        <TranferContent />
                      </TranferCollab>
                    </div>
                  );
                }
                return null;
              }
            })}
          </div>
        </div>
      )}
      <div className={cx("banking-bottom")}>
        {bankingNav.map((item, index) => (
          <Link to={item.link} className={cx("block-item")} key={index}>
            <div className={cx("item-img")}>
              <img src={item.img} alt="" className={cx("img")} />
            </div>
            <p className={cx("name")}>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BankingMobile;
