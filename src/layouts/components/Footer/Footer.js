import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import images from "~/constants/images";
import { HiSelector } from "react-icons/hi";
import FooterTech from "./feck";

const cx = classNames.bind(styles);

const mainNav = [
    {
        display: "Về Chúng Tôi",
        path: "/",
    },
    {
        display: "Trò Truyện",
        path: "/trotruyen",
    },
    {
        display: "Thông Tin",
        path: "/trungtam",
    },
    {
        display: "Liên Hệ",
        path: "/lienhe",
    },
    {
        display: "Diều Khoản & Điều Kiện",
        path: "/dk&dk",
    },
    {
        display: "Liên Kết",
        path: "/daili",
    },
];

function Footer() {
    const [data, setData] = useState(FooterTech);
    const [showMore, setShowMore] = useState(false);

    const handleClick = (show) => {
        setShowMore(show);
    };

    return (
        <footer className={cx("wrapper")}>
            <div className={cx("footer__top")}>
                <div className="container">
                    {/*  bao bọc giấy phép trò chơi, giấy phép bảo vệ (block for license game, license, guard)  start*/}
                    <div className={cx("license__wrapper")}>
                        <div className={cx("license__game")}>
                            <div className={cx("title")}>
                                <span>Giấy phép chơi game</span>
                                <img
                                    src={images.tick}
                                    alt=""
                                    className={cx("tick-icon")}
                                />
                            </div>
                            <div className={cx("gamming")}>
                                <img
                                    src={images.gamming}
                                    alt=""
                                    className={cx("gamming__logo")}
                                />

                                <p className={cx("text")}>
                                    BK8 là Nhãn hiệu Thương mại đã Đăng ký, nhãn
                                    hiệu và doanh nghiệp đã đăng ký 2, Đường
                                    Spinola, St. Julians STJ3014, Malta. Được
                                    quản lý & cấp phép bởi Chính phủ Curacao và
                                    hoạt động theo Giấy phép chính của Nhà cung
                                    cấp dịch vụ trò chơi, N.V. #365/JAZ
                                </p>
                            </div>
                        </div>
                        <div className={cx("div-title")}>
                            <div className={cx("license")}>
                                <div className={cx("title")}>
                                    <span>Chứng Nhận</span>
                                </div>
                                <div className={cx("license__logo-wrapper")}>
                                    <div className={cx("img")}>
                                        <img
                                            src={images.bmm}
                                            alt=""
                                            className={cx("license__logo-bmm")}
                                        />
                                    </div>
                                    <div className={cx("img")}>
                                        <img
                                            src={images.itech}
                                            alt=""
                                            className={cx(
                                                "license__logo-itech"
                                            )}
                                        />
                                    </div>

                                    <div className={cx("img")}>
                                        <img
                                            src={images.GLI}
                                            alt=""
                                            className={cx("license__logo-gli")}
                                        />
                                    </div>
                                    <div className={cx("img")}>
                                        <img
                                            src={images.TST}
                                            alt=""
                                            className={cx("license__logo-tst")}
                                        />
                                    </div>
                                    <div className={cx("img")}>
                                        <img
                                            src={images.godaddy}
                                            alt=""
                                            className={cx(
                                                "license__logo-godaddy"
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("guard")}>
                                <div className={cx("title")}>
                                    <span>Bảo Vệ</span>
                                </div>
                                <div className={cx("guard-icon")}>
                                    <img
                                        src={images.iovation}
                                        alt=""
                                        className={cx("guard__logo-iovation")}
                                    />

                                    <img
                                        src={images.threatmetrix}
                                        alt=""
                                        className={cx("guard__logo-threat")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ----- bao bọc giấy phép trò chơi, giấy phép bảo vệ (block for license game, license, guard)  end-------*/}

                    {/*----------Follow, method, play start */}
                    <div className={cx("follow__wrapper")}>
                        {/* /////////////////////// */}
                        <div className={cx("follow")}>
                            <div className={cx("title")}>
                                <span>Theo Dõi Chúng Tôi</span>
                            </div>
                            <div className={cx("follow-icon")}>
                                <img
                                    src={images.facebook}
                                    alt=""
                                    className={cx("follow__logo-facebook")}
                                />
                                <img
                                    src={images.youtube}
                                    alt=""
                                    className={cx("follow__logo-youtube")}
                                />
                            </div>
                        </div>
                        {/* //////////////////////// */}
                        <div className={cx("pay-container")}>
                            <div className={cx("payment")}>
                                <div className={cx("title")}>
                                    <span>Phương Thức Thanh Toán</span>
                                </div>
                                <div className={cx("payment-icon")}>
                                    <img
                                        src={images.ustd}
                                        alt=""
                                        className={cx("payment__logo-ustd")}
                                    />
                                    <img
                                        src={images.bitcoin}
                                        alt=""
                                        className={cx("payment__logo-bitcoin")}
                                    />
                                    <img
                                        src={images.ethereum}
                                        alt=""
                                        className={cx("payment__logo-ethereum")}
                                    />
                                    <img
                                        src={images.bank}
                                        alt=""
                                        className={cx("payment__logo-bank")}
                                    />
                                    <img
                                        src={images.eaziepay}
                                        alt=""
                                        className={cx("payment__logo-eaziepay")}
                                    />
                                    <img
                                        src={images.help2pay}
                                        alt=""
                                        className={cx("payment__logo-help2pay")}
                                    />
                                    <img
                                        src={images.momo}
                                        alt=""
                                        className={cx("payment__logo-momo")}
                                    />
                                    <img
                                        src={images.zalo}
                                        alt=""
                                        className={cx("payment__logo-zalo")}
                                    />
                                    <img
                                        src={images.viettlepay}
                                        alt=""
                                        className={cx(
                                            "payment__logo-viettlepay"
                                        )}
                                    />
                                    <img
                                        src={images.mobifone}
                                        alt=""
                                        className={cx(
                                            "payment__logo-mobiphone"
                                        )}
                                    />
                                    <img
                                        src={images.viettle}
                                        alt=""
                                        className={cx("payment__logo-viettle")}
                                    />
                                    <img
                                        src={images.vinaphone}
                                        alt=""
                                        className={cx(
                                            "payment__logo-vinaphone"
                                        )}
                                    />
                                </div>
                            </div>
                            {/* ///////////////////// */}

                            <div className={cx("Play__responsibly")}>
                                <div className={cx("title")}>
                                    <span>Chơi Game Có Trách Nhiệm</span>
                                </div>
                                <div className={cx("Play-icon")}>
                                    <img
                                        src={images.icon18}
                                        alt=""
                                        className={cx("Play__logo-icon18")}
                                    />
                                    <img
                                        src={images.gamecare}
                                        alt=""
                                        className={cx("Play__logo-gamecare")}
                                    />
                                    <img
                                        src={images.BGA}
                                        alt=""
                                        className={cx("Play__logo-BGA")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*----------Follow, method, play end */}

                    {/* --------footer-navbar start---------- */}
                    <div className={cx("footer__nav")}>
                        <div className={cx("nav__container")}>
                            {mainNav.map((item, index) => (
                                <div key={index}>
                                    <Link to={item.path}>
                                        <span className={cx("menu__nav")}>
                                            {item.display}
                                        </span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        {/* ///////////////////////// */}

                        <div className={cx("language")}>
                            <img
                                src={images.vietnam}
                                alt=""
                                className={cx("language-logo")}
                            />
                            <div className={cx("language-title")}>
                                {" "}
                                Tiếng Việt <HiSelector />
                            </div>
                        </div>
                        {/* ///////////////////////// */}

                        <div className={cx("intro")}>
                            <div className={cx("intro-title")}>
                                {" "}
                                COPYRIGHT © 2018-2022 BK8™ ALL RIGHTS RESERVED
                            </div>
                            <img
                                src={images.smallicon18}
                                alt=""
                                className={cx("intro-icon")}
                            />
                        </div>
                    </div>

                    {/* ---------footer-navbar end---------- */}
                </div>
            </div>

            {/* footer trang ở trên gồm logo */}
            <div className="container">
                <div className={cx("footer-bottom")}>
                    {!showMore ? (
                        <div className={cx("welcom")}>
                            <div className={cx("welcom__title")}>
							Chào Mừng Đến Với Casino trực tuyến của chúng tôi
                            </div>
                            <div className={cx("welcom__text")}>
                                Chúng tôi cung cấp một cách dễ dàng và ít phức
                                tạp hơn casino trực tuyến việt nam cho khách
                                hàng làm gửi tiền và rút tiền điện tử. Bạn chỉ
                                cần làm theo một số bước đơn giản được cung cấp
                                trong Trung tâm thông tin thì mỗi giao dịch có
                                thể được hoàn thành một cách dễ dàng. Những tính
                                năng này làm cho chơi game an toàn cũng như thú
                                vị để người chơi cảm thấy thoải mái khi cam kết
                                với trang web của chúng tôi.
                                <span
                                    className={cx("welcom__text-span")}
                                    onClick={() => handleClick(true)}
                                >
                                    Đọc Thêm
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div className={cx("noneTech__container")}>
                            <div
                                className={cx("noneTech-title")}
                                onClick={() => handleClick(false)}
                            >
                                Ẩn Thông Tin
                            </div>
                            <div className={cx("noneTech")}>
                                {data.map((item) => (
                                    <div
                                        className={cx("noneTech__item")}
                                        key={item.id}
                                    >
                                        <div
                                            className={cx(
                                                "noneTech__item-title"
                                            )}
                                        >
                                            {item.title}
                                        </div>
                                        <div
                                            className={cx(
                                                "noneTech__item-text"
                                            )}
                                        >
                                            {item.desc}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className={cx("footer__logo")}>
                        <span className={cx("footer__logo-tile")}>
                           Cung Cấp Bởi
                        </span>
                        <img
                            src={images.desktop}
                            alt=""
                            className={cx("desk-logo")}
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
