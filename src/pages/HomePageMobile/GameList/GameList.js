import React from "react";
import classNames from "classnames/bind";
import styles from "./GameList.module.scss";
import images from "~/constants/imagePromosMobile";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

const gameMonth = [
    {
        id: 1,
        image: images.g1,
        provider_name: "Roma",
        desc: "by Nextspin",
        btn: "CHƠI NGAY",
    },
    {
        id: 2,
        image: images.g2,
        provider_name: "Buffalo King",
        desc: "by Nextspin",
        btn: "CHƠI NGAY",
    },
    {
        id: 3,
        image: images.g3,
        provider_name: "5 Fortune Stars",
        desc: "by Nextspin",
        btn: "CHƠI NGAY",
    },
    {
        id: 4,
        image: images.g4,
        provider_name: "7 Dragons",
        desc: "by Nextspin",
        btn: "CHƠI NGAY",
    },
    {
        id: 5,
        image: images.g5,
        provider_name: "Long Long Long",
        desc: "by Nextspin",
        btn: "CHƠI NGAY",
    },
    {
        id: 6,
        image: images.g6,
        provider_name: "Caishen",
        desc: "by Nextspin",
        btn: "CHƠI NGAY",
    },
    {
        id: 7,
        image: images.g7,
        provider_name: "Gold Panther",
        desc: "by Nextspin",
        btn: "CHƠI NGAY",
    },
    {
        id: 8,
        image: images.g8,
        provider_name: "Wild Wet Win",
        desc: "by Nextspin",
        btn: "CHƠI NGAY",
    },
    {
        id: 9,
        image: images.g9,
        provider_name: "888",
        desc: "by Nextspin",
        btn: "CHƠI NGAY",
    },
    {
        id: 10,
        image: images.g10,
        provider_name: "Royal Katt",
        desc: "by Nextspin",
        btn: "CHƠI NGAY",
    },
];
const GameList = () => {
    const pagination = {
        renderBullet: function (index, className) {
            return `<span class="${className} ${cx(
                "custom-pagination"
            )}"></span>`;
        },
    };
    return (
        <div className={cx("wrapper")}>
            <p className={cx("month-title")}>Được Chơi Nhiều Nhất Tháng</p>
            <p className={cx("check-title")}>
                Kiểm tra các trò chơi phấn khích và giành chiến thắng lớn!
            </p>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                pagination={pagination}
                modules={[Pagination]}
                className={cx("mySwiper")}
            >
                {gameMonth.map((item, index) => (
                    <SwiperSlide key={index} className={cx("swiper-slide")}>
                        <div className={cx("layout")}> </div>
                        <div className={cx("name")}>
                            <div className={cx("block-img")}>
                                <img
                                    src={item.image}
                                    alt=""
                                    className={cx("image")}
                                />
                            </div>
                            <p className={cx("title")}>{item.provider_name}</p>
                            <p className={cx("desc")}>{item.desc}</p>
                            <div className={cx("btn")}>{item.btn}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
export default GameList;
