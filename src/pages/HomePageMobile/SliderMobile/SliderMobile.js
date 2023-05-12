import React, { useRef, useState, useContext } from "react";
import { Store } from "~/Store";
import classNames from "classnames/bind";
import styles from "./SliderMobile.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import images from "../../../constants/imagePromosMobile";
import { Link } from "react-router-dom";
import {
    AiOutlineEye,
    AiOutlineEyeInvisible,
    AiFillPlusCircle,
    AiOutlineClose,
} from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import MenuWalletTranfer from "~/components/Popper/MenuWallet/MenuWalletTranfer";
import { MENU_WALLET_ITEMS_TRANFER } from "~/constants/mockHeader/dataHeader";
const cx = classNames.bind(styles);
const promosList = [
    {
        image: images.banner1,
    },
    {
        image: images.banner2,
    },
    {
        image: images.banner3,
    },
    {
        image: images.banner4,
    },
    {
        image: images.banner5,
    },
];

const headerNav = [
    {
        img: images.headerDeposit,
        name: "Gửi Tiền",
        link: "/deposit",
    },
    {
        img: images.headerTranfer,
        name: "Chuyển Khoản",
        link: "/tranfer",
    },
    {
        img: images.headerWithdraw,
        name: "Rút Tiền",
        link: "/withdraw",
    },
    {
        img: images.headerPromo,
        name: "Khuyến Mãi",
        link: "/mpromos",
    },
    {
        img: images.headerHistory,
        name: "Lịch Sử",
        link: "/history",
    },
];
function SliderMobile() {
    const pagination = {
        clickable: true,
        autoplay: 1000,
        renderBullet: function (index, className) {
            return `<span class="${className} ${cx(
                "custom-pagination"
            )}"></span>`;
        },
    };
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const [number, setNumber] = useState(true);
    const [open, setOpen] = useState(false);
    const handleChangeEye = () => {
        setNumber(!number);
    };
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={cx("wrapper")}>
            {open && (
                <div className={cx("img-info")}>
                    <div className={cx("block-image")}>
                        <AiOutlineClose
                            className={cx("img-infoClose")}
                            onClick={() => setOpen(false)}
                        />
                        <div className={cx("toggle")}>
                            <MenuWalletTranfer
                                items={MENU_WALLET_ITEMS_TRANFER}
                            ></MenuWalletTranfer>
                        </div>
                    </div>
                </div>
            )}
            {userInfo ? (
                <div className={cx("balance-wrapper")}>
                    <div className={cx("balance-top")}>
                        <div className={cx("coin")}>
                            <div onClick={handleChangeEye}>
                                {number ? (
                                    <AiOutlineEye
                                        style={{
                                            color: "gray",
                                            fontSize: "20px",
                                        }}
                                    />
                                ) : (
                                    <AiOutlineEyeInvisible
                                        style={{
                                            color: "gray",
                                            fontSize: "20px",
                                        }}
                                    />
                                )}
                            </div>
                            <div className={cx("left")}>
                                <p className={cx("title")}>Cân Bằng</p>
                                <div className={cx("block")}>
                                    <div className={cx("vnd")}>
                                        MYR{" "}
                                        <span>
                                            {number ? userInfo.balance : "***"}
                                        </span>{" "}
                                        <BiRefresh
                                            style={{
                                                color: "blue",
                                                fontSize: "20px",
                                                marginBottom: "-4px",
                                            }}
                                        />
                                    </div>
                                    <AiFillPlusCircle
                                        style={{ color: "gray" }}
                                        onClick={handleClick}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={cx("right")}>
                            <div className={cx("img")}>
                                <img
                                    src={images.restore}
                                    alt=""
                                    className={cx("img-store")}
                                />
                            </div>
                            <p className={cx("title")}>Khôi Phục</p>
                        </div>
                    </div>
                    <div className={cx("balance-bottom")}>
                        {headerNav.map((item, index) => (
                            <Link
                                to={item.link}
                                className={cx("block-item")}
                                key={index}
                            >
                                <div className={cx("item-img")}>
                                    <img
                                        src={item.img}
                                        alt=""
                                        className={cx("img")}
                                    />
                                </div>
                                <p className={cx("name")}>{item.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            ) : null}
            <Swiper
                pagination={pagination}
                modules={[Pagination, Autoplay]}
                className={cx("swiper")}
                autoplay={{
                    delay: 3000,
                }}
            >
                {promosList.map((item, index) => (
                    <SwiperSlide key={index} className={cx("swiper-slide")}>
                        <div>
                            <img
                                src={item.image}
                                alt=""
                                className={cx("image")}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {userInfo ? (
                <div className={cx("btn")}>
                    <Link to="/mregister" className={cx("btn-register")}>
                        ĐĂNG KÝ
                    </Link>
                    <Link to={"/login"} className={cx("btn-login")}>
                        ĐĂNG NHẬP
                    </Link>
                </div>
            ) : null}
            <div className={cx("notification")}>
                <div className={cx("img-cons")}>
                    <img src={images.icon} alt="" className={cx("img-icon")} />
                </div>
                <div className={cx("div")}>
                    <marquee>
                        {" "}
                        Chào tháng 6 trên BK8 với khuyến mãi hấp dẫn! phấn khích
                        với Sự kiện thể thao và nhà cung cấp mới! Mỗi kỳ nghỉ
                        đều được thưởng Ưu đãi ngày vàng lên đến 1800đ! Cược
                        miễn phí hàng ngày VND888! Hơn nữa, BK8 tặng một đồng
                        vàng 9999 có giá trị như vậy! Tham gia ngay!
                    </marquee>
                </div>
            </div>
        </div>
    );
}

export default SliderMobile;
