import React from "react";
import classNames from "classnames/bind";
import styles from "./Highlight.module.scss";
import images from "~/constants/images";
import { FiYoutube } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { GiPokerHand } from "react-icons/gi";
import { ImFire } from "react-icons/im";
import { MdSpeakerPhone } from "react-icons/md";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
// import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import { fetchGames, fetchSports } from "./Fetch";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";
const cx = classNames.bind(styles);

const casinoData = [
    { image: images.baccarat },
    { image: images.baccarat1 },
    { image: images.baccarat2 },
    { image: images.baccarat3 },
];
const Highlight = () => {
    const pagination = {
        clickable: true,
        autoplay: 1000,
    };
    return (
        <div className="container">
            <div className={cx("wrapper-video")}>
                <div className={cx("video")}>
                    <p className={cx("video-title")}>
                        <FiYoutube
                            style={{
                                marginBottom: "-7px",
                                marginRight: "5px",
                                fontSize: "24px",
                                color: "#c6c7c7",
                            }}
                        />
                        Video Nổi Bật Mới Nhất
                    </p>
                    <div className={cx("video-block")}>
                        <div className={cx("player-wrapper")}>
                            <ReactPlayer
                                className={cx("player")}
                                url="https://streamable.com/qygp6r"
                                width="100%"
                                height="425px"
                                controls={true}
                            />
                        </div>
                        <div className={cx("player-wrapper-tablet")}>
                            <ReactPlayer
                                className={cx("player")}
                                url="https://streamable.com/qygp6r"
                                width="100%"
                                height="180px"
                                controls={true}
                            />
                        </div>
                        <div className={cx("video-img")}>
                            <img
                                src={images.video}
                                alt=""
                                className={cx("img")}
                            />
                        </div>
                    </div>
                </div>
                <div className={cx("block-right")}>
                    <div className={cx("matches")}>
                        <div className={cx("block-title")}>
                            <p className={cx("title")}>
                                <AiOutlineStar
                                    style={{
                                        marginBottom: "-7px",
                                        fontSize: "26px",
                                        color: "#c6c7c7",
                                    }}
                                />{" "}
                                Các Trận Đấu Sắp Tới
                            </p>
                            <Link to="/h" className={cx("link")}>
                                More Matches{" "}
                                <BsArrowRight
                                    style={{
                                        marginBottom: "-1px",
                                        marginLeft: "3px",
                                        fontSize: "10px",
                                        color: "yellow",
                                    }}
                                />
                            </Link>
                        </div>
                        <div className={cx("banner")}>
                            <img
                                src={images.matches}
                                alt=""
                                className={cx("matches-img")}
                            />
                        </div>
                    </div>

                    <div className={cx("casio")}>
                        <p className={cx("title")}>
                            <GiPokerHand
                                style={{
                                    marginBottom: "-7px",
                                    marginRight: "3px",
                                    fontSize: "26px",
                                    color: "#c6c7c7",
                                }}
                            />
                            Live Casio
                        </p>
                        <div className={cx("wrapper-swiper")}>
                            <Swiper
                                pagination={pagination}
                                modules={[Pagination, Autoplay]}
                                className={cx("swiper")}
                                autoplay={{
                                    delay: 1000,
                                }}
                            >
                                {casinoData.map((item, i) => (
                                    <SwiperSlide
                                        className={cx("swiper-slice")}
                                        key={i}
                                    >
                                        <img
                                            src={item.image}
                                            alt=""
                                            className={cx("baccarat")}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hot game */}
            <div className={cx("wrapper-game")}>
                <div className={cx("block-title")}>
                    <p className={cx("title")}>
                        <ImFire
                            style={{
                                color: "rgb(234, 96, 22)",
                                fontSize: "24px",
                                marginBottom: "-5px",
                            }}
                        />{" "}
                        Game Hấp Dẫn
                    </p>
                    <Link to="/slots/spadeGaming" className={cx("link")}>
                        Game Khác
                    </Link>
                </div>
                <div className={cx("block-game")}>
                    <div className={cx("game-banner")}>
                        <img
                            src={images.bannerStrimuky}
                            alt=""
                            className={cx("banner-img")}
                        />
                    </div>
                    <div className={cx("list-game")}>
                        {fetchGames.map((fetchGame) => (
                            <Link
                                to={fetchGame.link}
                                key={fetchGame.id}
                                className={cx("item")}
                            >
                                <div className={cx("game-img")}>
                                    <img
                                        src={fetchGame.img}
                                        alt=""
                                        className={cx("img")}
                                    />
                                </div>
                                <p className={cx("title")}>{fetchGame.title}</p>
                                <div className={cx("block")}>
                                    <p className={cx("desc")}>
                                        {fetchGame.desc}
                                    </p>
                                    <div>
                                        <img
                                            src={fetchGame.logo}
                                            alt=""
                                            className={cx("game-logo")}
                                        />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            {/* Sport new */}
            <div className={cx("wrapper-sport")}>
                <p className={cx("titles")}>
                    {" "}
                    <MdSpeakerPhone
                        style={{
                            fontSize: "30px",
                            marginBottom: "-6px",
                            color: "#c6c7c7",
                        }}
                    />
                    Tin Tức Thể Thao
                </p>
                <Swiper
                    direction={"vertical"}
                    slidesPerView={"auto"}
                    freeMode={true}
                    scrollbar={true}
                    mousewheel={true}
                    modules={[FreeMode, Scrollbar, Mousewheel]}
                    className={cx("swiper")}
                >
                    <SwiperSlide className={cx("swiper-slide")}>
                        <div className={cx("wrapper")}>
                            {fetchSports.map((fetchSport) => (
                                <div
                                    className={cx("wrapper-item")}
                                    key={fetchSport.id}
                                >
                                    <div className={cx("sport-img")}>
                                        <img
                                            src={fetchSport.img}
                                            className={cx("img")}
                                        />
                                    </div>
                                    <div className={cx("block")}>
                                        <p className={cx("title")}>
                                            {fetchSport.title}
                                        </p>
                                        <p className={cx("desc")}>
                                            {fetchSport.desc}
                                        </p>
                                        <Link
                                            to={fetchSport.link}
                                            className={cx("link")}
                                        >
                                            {fetchSport.more}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            {/* /////////banner mobile */}
            <div className={cx("banner-mobile")}>
                <p className={cx("title")}>BK8 APP Download</p>
                <div className={cx("app-block")}>
                    <div className={cx("btn-block")}>
                        {" "}
                        <button className={cx("title-app")}>
                            <AiFillApple
                                style={{
                                    fontSize: "26px",
                                    marginBottom: "-7px",
                                    marginRight: "5px",
                                    color: "gray",
                                }}
                            />
                            Apple IOS
                        </button>
                        <Link to={"/m"} className={cx("link")}>
                            Installation Guide
                        </Link>
                    </div>
                    <div className={cx("btn-block")}>
                        <button className={cx("title-app")}>
                            <AiFillAndroid
                                style={{
                                    fontSize: "26px",
                                    marginBottom: "-7px",
                                    marginRight: "5px",
                                    color: "green",
                                }}
                            />
                            Android
                        </button>
                        <Link to={"i"} className={cx("link")}>
                            Installation Guide
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Highlight;
