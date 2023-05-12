import { useState, useContext, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import images from "~/constants/images";
import Moment from "react-moment";
import axios from "axios";
import md5 from "md5";
import { Store } from "~/Store";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuWallet from "~/components/Popper/MenuWallet/MenuWallet";
import { AiOutlineMobile, AiOutlineMail } from "react-icons/ai";
import MenuRanking from "~/components/Popper/MenuRanking/MenuRanking";
import {
    MENU_WALLET_ITEMS,
    MENU_RANKING_ITEMS,
} from "~/constants/mockHeader/dataHeader";
import { toast } from "react-toastify";
import { getError } from "~/utils";
import { useTranslation, Trans } from "react-i18next";
import LanguageModal from "~/components/LanguageModal/LanguageModal.js";
import i18n from "i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import * as userService from "~/services/userService";

const cx = classNames.bind(styles);

function Header() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get("redirect");
    const redirect = redirectInUrl ? redirectInUrl : "/member-settings/deposit";

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const [showModal, setShowModal] = useState(false);

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm(formOptions);

    const LoginHandler = async (formData) => {
        let username = formData?.username;
        let password = formData?.password;
        let balance, promotionList;
        const result = await userService.login(username, password);
        if (result?.status === 0) {
            const resultBalance = await userService.getBalance(username);
            if (resultBalance?.status === 0) {
                balance = resultBalance.balance;
            }
            const resultPromo = await userService.getPromotionList(username);
            if (resultPromo?.status === 0) {
                promotionList = resultPromo.data;
            }
            const data = {
                username: result.username,
                token: result.token,
                balance,
                promotionList,
            };
            ctxDispatch({ type: "USER_SIGNIN", payload: data });
            localStorage.setItem("userInfo", JSON.stringify(data));
            navigate(redirect || "/member-settings/deposit");
        }
    };

    const invalidSubmit = (e) => {
        for (const [key, value] of Object.entries(e)) {
            toast.error(value.message);
            return;
        }
    };

    const LogoutHandler = () => {
        ctxDispatch({ type: "USER_SIGNOUT" });
        localStorage.removeItem("userInfo");
        //window.location.href = '/'
        navigate("/");
    };

    const TabInboxHandler = (type) => {
        localStorage.setItem("renderTabInbox", type);
    };

    const DepositHandler = () => {
        navigate("/member-settings/deposit");
    };

    return (
        <header className={cx("wrapper")}>
            <div className="container">
                <div className={cx("inner")}>
                    <div className={cx("logo")}>
                        <Link to="/">
                            <img
                                src={images.logo}
                                alt="https://www.bk8myr.com/public/html/cms/l20210611033555602.png"
                                className={cx("logo-image")}
                            />
                        </Link>
                    </div>

                    {userInfo?.token ? (
                        <div className={cx("inner__right-after")}>
                            <div className={cx("right-top")}>
                                <div className={cx("member-group")}>
                                    <img
                                        className={cx("member-group__img")}
                                        src={images.userNormal}
                                        alt="member"
                                    />
                                    <span className={cx("member-group__desc")}>
                                        NORMAL
                                    </span>
                                </div>
                                <span className={cx("divider")}>⋮</span>
                                <MenuRanking items={MENU_RANKING_ITEMS}>
                                    <div className={cx("ranking-group")}>
                                        <img
                                            className={cx("ranking-group__img")}
                                            src={images.ranking1}
                                            alt="ranking"
                                        />
                                        <span
                                            className={cx(
                                                "ranking-group__desc"
                                            )}
                                        >
                                            {">"}100
                                        </span>
                                    </div>
                                </MenuRanking>
                                <span className={cx("divider")}>⋮</span>
                                <div className={cx("welcome")}>
                                    Welcome &nbsp;
                                    <Tippy
                                        interactive
                                        hideOnClick
                                        placement="bottom"
                                        delay={[0, 50]}
                                        render={(attrs) => (
                                            <>
                                                <div
                                                    className={cx(
                                                        "welcome-popper"
                                                    )}
                                                    tabIndex="-1"
                                                    {...attrs}
                                                >
                                                    <div
                                                        id={cx("tooltip")}
                                                        className={cx(
                                                            "welcome-tooltip"
                                                        )}
                                                        role="tooltip"
                                                    >
                                                        <div
                                                            id={cx("arrow")}
                                                            className={cx(
                                                                "welcome-arrow"
                                                            )}
                                                            data-popper-arrow
                                                        ></div>
                                                    </div>
                                                    <PopperWrapper>
                                                        <Link
                                                            to="/member-settings/profile"
                                                            className={cx(
                                                                "welcome-popper-item"
                                                            )}
                                                            key="welcome-1"
                                                        >
                                                            My Profile
                                                        </Link>
                                                        <Link
                                                            to="/member-settings/change-password"
                                                            className={cx(
                                                                "welcome-popper-item"
                                                            )}
                                                            key="welcome-2"
                                                        >
                                                            Change Password
                                                        </Link>
                                                    </PopperWrapper>
                                                </div>
                                            </>
                                        )}
                                    >
                                        <span
                                            className={cx("welcome-username")}
                                        >
                                            {userInfo.username}
                                        </span>
                                    </Tippy>
                                </div>
                                <span className={cx("divider")}>⋮</span>
                                <div className={cx("wallet")}>
                                    <span className={cx("wallet-region")}>
                                        MYR {userInfo?.balance}
                                    </span>
                                    <MenuWallet items={MENU_WALLET_ITEMS}>
                                        <img
                                            className={cx("wallet-button")}
                                            src={images.plus}
                                            alt="plus"
                                        />
                                    </MenuWallet>
                                </div>
                                <span className={cx("divider")}>⋮</span>
                                <div className={cx("time")}>
                                    <Moment format="DD/MM/YYYY" />
                                    &nbsp;
                                    <Moment format="HH:mm:ss" interval={1000} />
                                    &nbsp; (GMT+7)
                                </div>
                            </div>
                            <div className={cx("right-bottom")}>
                                <div className={cx("mobile-btn")}>
                                    {/* <img src="https://www.bk8c.com/public/new_bk8/content/images/icon/nav_mobile.png" alt="mobile" /> */}
                                    <AiOutlineMobile className={cx("mobile")} />
                                </div>
                                <span className={cx("divider")}>⋮</span>
                                <span className={cx("divider")}>⋮</span>
                                <Tippy
                                    interactive
                                    placement="bottom"
                                    delay={[0, 50]}
                                    render={(attrs) => (
                                        <div
                                            className={cx("mail-popper")}
                                            tabIndex="-1"
                                            {...attrs}
                                        >
                                            <PopperWrapper>
                                                <Link
                                                    to="/member-settings/inbox"
                                                    className={cx(
                                                        "mail-popper-item"
                                                    )}
                                                    key="mail-1"
                                                    onClick={() =>
                                                        TabInboxHandler("info")
                                                    }
                                                >
                                                    Info/Promo (23)
                                                </Link>
                                                <Link
                                                    to="/member-settings/inbox"
                                                    className={cx(
                                                        "mail-popper-item"
                                                    )}
                                                    key="mail-2"
                                                    onClick={() =>
                                                        TabInboxHandler(
                                                            "payment"
                                                        )
                                                    }
                                                >
                                                    Payment (16)
                                                </Link>
                                                <Link
                                                    to="/member-settings/inbox"
                                                    className={cx(
                                                        "mail-popper-item"
                                                    )}
                                                    key="mail-3"
                                                    onClick={() =>
                                                        TabInboxHandler(
                                                            "system"
                                                        )
                                                    }
                                                >
                                                    System (1)
                                                </Link>
                                            </PopperWrapper>
                                        </div>
                                    )}
                                >
                                    <div className={cx("mail-btn")}>
                                        {/* <img src="https://www.bk8c.com/public/new_bk8/content/images/icon/nav_mail_icon.png" alt="mail" /> */}
                                        <AiOutlineMail className={cx("mail")} />
                                    </div>
                                </Tippy>
                                <span className={cx("divider")}>⋮</span>
                                <div className={cx("transfer")}>
                                    <Link to="/member-settings/transfer">
                                        Transfer
                                    </Link>
                                </div>
                                <span className={cx("divider")}>⋮</span>
                                <div className={cx("withdraw")}>
                                    <Link to="/member-settings/withdraw">
                                        Withdraw
                                    </Link>
                                </div>
                                <span className={cx("divider")}>⋮</span>
                                <div className={cx("history")}>
                                    <Link to="/member-settings/history">
                                        History
                                    </Link>
                                </div>
                                <span className={cx("divider")}>⋮</span>
                                <div
                                    className={cx("deposit-btn")}
                                    onClick={DepositHandler}
                                >
                                    DEPOSIT
                                </div>
                                <span className={cx("divider")}>⋮</span>
                                <div
                                    className={cx("logout-btn")}
                                    onClick={LogoutHandler}
                                >
                                    LOGOUT
                                </div>
                                <div className={cx("btn-language")}>
                                    <img
                                        src={
                                            i18n.language === "en"
                                                ? images.malaysia
                                                : images.malaysia
                                        }
                                        alt="btn-language"
                                        onClick={() => setShowModal(true)}
                                    />
                                </div>
                                <div
                                    className={cx("btn-more")}
                                    onClick={() => setShowModal(true)}
                                >
                                    <i className="fas fa-ellipsis-v"></i>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={cx("inner__right-before")}>
                            <div className={cx("right-top")}>
                                {/*<div className={cx("mobile-btn")}>
                                    <AiOutlineMobile className={cx("mobile")} />
                                </div>*/}
                                <form
                                    className={cx("login-form")}
                                    onSubmit={handleSubmit(
                                        LoginHandler,
                                        invalidSubmit
                                    )}
                                >
                                    <input
                                        id="username"
                                        {...register("username", {
                                            required: true,
                                        })}
                                        className={cx("login-username")}
                                        placeholder={t("username")}
                                    />
                                    <input
                                        id="password"
                                        {...register("password")}
                                        type="password"
                                        className={cx("login-password")}
                                        placeholder={t("password")}
                                    />
                                    <button
                                        type="submit"
                                        className={cx("btn-login")}
                                    >
                                        {t("ĐĂNG NHẬP")}
                                    </button>
                                    <button
                                        type="button"
                                        className={cx("btn-register")}
                                    >
                                        <Link
                                            to="/register"
                                            className={cx("btn-register")}
                                        >
                                            {t("ĐĂNG KÝ")}
                                        </Link>
                                    </button>
                                </form>
                                <div className={cx("btn-language")}>
                                    <img
                                        src={
                                            i18n.language === "en"
                                                ? images.vietnam
                                                : images.malaysia
                                        }
                                        alt="btn-language"
                                        onClick={() => setShowModal(true)}
                                    />
                                </div>
                                <div
                                    className={cx("btn-more")}
                                    onClick={() => setShowModal(true)}
                                >
                                    <i className="fas fa-ellipsis-v"></i>
                                </div>
                            </div>
                            <div className={cx("right-bottom")}>
                                <div className={cx("forgot-password")}>
                                    Quên{" "}
                                    <Link to="/forgotPassword">Tên</Link>{" "}
                                    Hoặc{" "}
                                    <Link to="/forgotPassword">Mật Khẩu</Link>?
                                </div>
                                <div className={cx("time")}>
                                    <Moment format="DD/MM/YYYY" />
                                    &nbsp;
                                    <Moment format="HH:mm:ss" interval={1000} />
                                    &nbsp; (GMT+7)
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <LanguageModal {...{ showModal, setShowModal }} />
            </div>
        </header>
    );
}

export default Header;
