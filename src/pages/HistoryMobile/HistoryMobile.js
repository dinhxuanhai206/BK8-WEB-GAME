import React, { useState, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./HistoryMobile.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import TranferHistory from "./TranferHistory/TranferHistory";
import BettingHistory from "./BettingHistory/BettingHistory";
import DepositHistory from "./DepositHistory/DepositHistory";
import PromotionHistory from "./PromotionHistory/PromotionHistory";
import RewardHistory from "./RewardHistory/RewardHistory";

const cx = classNames.bind(styles);

const tabPageHistory = [
  {
    display: "Tranfer",
  },
  {
    display: "Betting Summary",
  },
  {
    display: "WithDrawal/Deposit",
  },
  {
    display: "Promotion Apply",
  },
  {
    display: "Rewards",
  },
  
];


function HistoryMobile() {
    const [active, setActive] = useState(0);
  const pagination = {
    renderBullet: function (index, className) {
      return `<span class="${className} ${cx("custom-pagination")}"></span>`;
    },
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("tab-block")}>
        <Swiper
          slidesPerView={2}
          modules={[Pagination]}
          className={cx("mySwiper")}
        >
          {tabPageHistory.map((item, index) => (
            <SwiperSlide
            key={index}
            className={cx("item", active === index ? "active" : "")}
            onClick={() => setActive(index)}
            >
              <span className={cx("tab-page__name")}>{item.display}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={cx("content")}>
        {active === 0 ? (
          <TranferHistory />
        ) : active === 1 ? (
          <BettingHistory />
        ) : active === 2 ? (
          <DepositHistory />
        ) : active === 3 ? (
          <PromotionHistory />
        ): active === 4 ? (
          <RewardHistory />
        ): null}
      </div>
      
    </div>
  );
}

export default HistoryMobile;
