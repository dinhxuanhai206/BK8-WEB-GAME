import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./NavHome.module.scss";
import { dataNavHome } from "~/constants/mockNavHomeMobile/dataNavHome";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SportsMobile from "./SportsMobile/SportsMobile";
import CasinoMobileHome from "./CasinoMobileHome/CasinoMobileHome";
import EsportsMobile from "./EspostsMobile/EsportsMobile";
import SlotsMobile from "./SlotsMobile/SlotsMobile";
import PokerMobile from "./PokerMobile/PokerMobile";
import FishingMobile from "./FishingMobile/FishingMobile";
import LotteryMobile from "./LotteryMobile/Lotterymobile";
import SponsorMobile from "./SponsorMobile/SponsorMobile";

const cx = classNames.bind(styles);
function NavHome() {
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
          slidesPerView={6}
          spaceBetween={0}
          modules={[Pagination]}
          className={cx("mySwiper")}
        >
          {dataNavHome?.map((item, index) => (
            <SwiperSlide key={index} className={cx("tab-items")}>
              <button
                className={cx("logo-img", active === index ? "active" : "")}
                onClick={() => setActive(index)}
              >
                <i style={active === index ? item.imgActive : item.img} />
               <span className={cx("name")}> {item.name}</span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={cx("content")}>
        {active === 0 ? (
          <SportsMobile />
        ) : active === 1 ? (
          <EsportsMobile />
        ) : active === 2 ? (
          <CasinoMobileHome />
        ) : active === 3 ? (
          <SlotsMobile />
        /* ): active === 4 ? (
          <PokerMobile /> */
        ): active === 4 ? (
          <FishingMobile />
        ): active === 5 ? (
          <LotteryMobile />
        ): active === 6 ? (
          <SponsorMobile />
        ): null}
      </div>
    </div>
  );
}

export default NavHome;
