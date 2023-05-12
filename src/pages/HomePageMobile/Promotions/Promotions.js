import React, { useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Promotions.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import images from "../../../constants/images";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
const promosList = [
  {
    category: ["slot", "sportsBook", "casino", "newMember"],
    image: images.promostion1,
    title: "KHUYẾN MÃI CHÀO MỪNG",
    description: "Chào mừng đến với BK8! Thực hiện khoản tiền gửi đầu tiên của bạn",
    morebtn: "TÌM THÊM",
  },
  {
    category: ["sportsBook", "newMember"],
    image: images.promostion2,
    title: "CƯỢC ĐẦU TIÊN CỦA BẠN KHÔNG CÓ RỦI RO",
    description: "Đây là 200 triệu cho lần đặt cược đầu tiên của bạn. Đi",
    morebtn: "TÌM THÊM",
  },
  {
    category: ["slot", "special"],
    image: images.promostion3,
	title: "KHUYẾN MÃI CHÀO MỪNG",
    description: "Chào mừng đến với BK8! Thực hiện khoản 222tr",
    morebtn: "TÌM THÊM",
  },
  {
    category: ["all"],
    image: images.promostion4,
    title: "HOÀN TRẢ TIỀN MẶT HÀNG NGÀY",
    description: "Tổng giải thưởng 640.000 triệu đang chờ bạn giành lấy",
    morebtn: "TÌM THÊM",
  },
];
function Promotions() {
  const pagination = {
    renderBullet: function (index, className) {
      return `<span class="${className} ${cx("custom-pagination")}"></span>`;
    },
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("block-title")}>
            <p className={cx("title")}>Khuyến Mãi</p>
            <Link to={"/"} className={cx("link")}>
            Xem Thêm
            </Link>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          pagination={pagination}
          modules={[Pagination]}
          className={cx("mySwiper")}
        >
          {promosList.map((item, index) => (
            <SwiperSlide key={index} className={cx("swiper-slide")}>
              <div className={cx("block")}>
                <div>
                  <img src={item.image} alt="" className={cx("image")} />
                </div>
                <p className={cx("title")}>{item.title}</p>
                <p className={cx("desc")}>{item.description}</p>
                <Link to={"/"} className={cx("btn")}>
                  {item.morebtn}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Promotions;
