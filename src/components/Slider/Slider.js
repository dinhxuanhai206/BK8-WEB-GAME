import React from "react";
import classNames from "classnames/bind";
import styles from "./Slider.module.scss";
import images from "~/constants/images";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
  
import { AiFillNotification } from "react-icons/ai";

const cx = classNames.bind(styles);

const Slider = () => {
  const pagination = {
    clickable: true,
    autoplay: 1000,
    renderBullet: function (index, className) {
      return `<span class="${className} ${cx('custom-pagination')}"></span>`
    },
  };
  return (
    <div className={cx("wrapper")}>
      <Swiper
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        className={cx("swiper")}
        autoplay={{
          delay: 3000,
        }}
      >
        <SwiperSlide className={cx("swiper-slide ")}>
          <img src={images.banner1} alt="" className={cx("img")} />
        </SwiperSlide>
        <SwiperSlide className={cx("swiper-slide ")}>
          <img src={images.banner2} alt="" className={cx("img")} />
        </SwiperSlide>
        <SwiperSlide className={cx("swiper-slide ")}>
          <img src={images.banner3} alt="" className={cx("img")} />
        </SwiperSlide>
        <SwiperSlide className={cx("swiper-slide ")}>
          <img src={images.banner4} alt="" className={cx("img")} />
        </SwiperSlide>
        <SwiperSlide className={cx("swiper-slide ")}>
          <img src={images.banner5} alt="" className={cx("img")} />
        </SwiperSlide>
        <SwiperSlide className={cx("swiper-slide ")}>
          <img src={images.banner6} alt="" className={cx("img")} />
        </SwiperSlide>
      </Swiper>

      <div className={cx("notification")}>
        <AiFillNotification style={{ fontSize: "20px", color: "#a9aaab",marginTop:"10px" }} />
        <div className={cx("div")}>
          <marquee>
            {" "}
            Welcome June on BK8 with attractive promotions! Be excited with Sports events and new providers! Every holiday is rewarded with the Golden Day offering up to VND1800! Daily freebet VND888! Further, BK8 gives a such valuable 9999 gold coin! Join now!
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Slider;
