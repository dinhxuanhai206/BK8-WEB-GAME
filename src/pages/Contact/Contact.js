import React from "react";
import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import images from "~/constants/imagePromosMobile";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Contact() {
  return (
    <div className={cx("wrapper")}>
        <Link to={"/"} className={cx("chat")}>
            <div className={cx("img")}><img src={images.chat} alt="" className={cx("img-chat")}/></div>
            <div className={cx("block")}>
              <p className={cx("title")}>Live Chat</p>
              <p className={cx("desc")}>Get an instant Live Chat support from our team</p>
            </div>
        </Link>
        <Link to={"/"} className={cx("we-chat")}>
            <div className={cx("img-we")}><img src={images.wechat} alt="" className={cx("img-wechat")}/></div>
            <div className={cx("block")}>
              <p className={cx("title")}>WeChat</p>
              <p className={cx("desc")}>bk8myr</p>
            </div>
        </Link>
        <Link to={"/"} className={cx("chat")}>
            <div className={cx("img")}><img src={images.telegram} alt="" className={cx("img-chat")}/></div>
            <div className={cx("block")}>
              <p className={cx("title")}>Telegram</p>
              <p className={cx("desc")}>official_bk8en</p>
            </div>
        </Link>
    </div>
  );
}

export default Contact;
