import React from "react";
import classNames from "classnames/bind";
import styles from "./BkApp.module.scss";
import images from "~/constants/imagePromosMobile";
import { Link } from "react-router-dom";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import { GoLock } from "react-icons/go";
import { BsSpeedometer } from "react-icons/bs";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaPencilRuler } from "react-icons/fa";
const cx = classNames.bind(styles);

function BkApp() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("block")}>
        <div className={cx("banner")}>
          <img
            src={images.bannerDownLoad}
            alt=""
            className={cx("banner-img")}
          />
        </div>
        <div className={cx("title")}>
          BK8 built what truly matters to us, It more than an APP
        </div>
        <p className={cx("text")}>Experience the difference today</p>
        <div className={cx("btn")}>
          <button className={cx("title-app")}>
            <AiFillApple
              style={{
                fontSize: "46px",
                marginBottom: "-12px",
                marginRight: "5px",
                color: "gray",
              }}
            />
            Download
          </button>
          <Link to={"/m"} className={cx("link")}>
            Installation Guide
          </Link>
        </div>
        <div className={cx("btns")}>
          <button className={cx("title-app")}>
            <AiFillAndroid
              style={{
                fontSize: "46px",
                marginBottom: "-15px",
                marginRight: "5px",
                color: "white",
              }}
            />
            Download
          </button>
          <Link to={"i"} className={cx("link")}>
            Installation Guide
          </Link>
        </div>
      </div>
      <div className={cx("content")}>
        <p className={cx("title")}>App Features</p>
        <p className={cx("text")}>
          Mobile App to suit different needs of players, all games are
          accessible on different mobile device.
        </p>
        <div className={cx("lock")}>
          <GoLock style={{ fontSize: "30px" }} />
          <p className={cx("titles")}>HIGHER SECURITY KNOTS</p>
          <p className={cx("texts")}>
            Use facial recognition or fingerprint to access account
          </p>
        </div>
        <div className={cx("spee")}>
          <BsSpeedometer style={{ fontSize: "30px" }} />
          <p className={cx("titles")}>EXPRESS LOGIN</p>
          <p className={cx("texts")}>Keep me logged in</p>
        </div>
        <div className={cx("phone")}>
          <MdOutlinePhoneAndroid style={{ fontSize: "30px" }} />
          <p className={cx("titles")}>SCAN TO PLAY</p>
          <p className={cx("texts")}>Compatible with iOS & Android Devices</p>
        </div>
        <div className={cx("img-phone")}>
          <img src={images.bannerPhone} alt="" className={cx("banner-phone")} />
        </div>
        <div className={cx("phone")}>
          <FaPencilRuler style={{ fontSize: "30px" }} />
          <p className={cx("titles")}>PERSONALIZE YOUR EXPERIENCE</p>
          <p className={cx("texts")}>Grouping favorite games in one</p>
        </div>
        <div className={cx("TT")}>
          <p className={cx("titles")}>REFERRAL MADE EASY</p>
          <p className={cx("texts")}>
            Track friend referrals and pay out rewards automatically
          </p>
        </div>
      </div>
    </div>
  );
}

export default BkApp;
