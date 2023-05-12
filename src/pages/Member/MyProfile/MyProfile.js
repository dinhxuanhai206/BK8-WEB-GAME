import React from "react";
import classNames from "classnames/bind";
import styles from "./MyProfile.module.scss";

const cx = classNames.bind(styles);

function MyProfile() {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>MY PROFILE</p>
      <div className={cx("profile-block")}>
        <div className={cx("block1")}>
          <div className={cx("email")}>
            <p className={cx("titles")}>Email</p>
            <p className={cx("text")}>***kkk@gmail.com</p>
          </div>
          <div className={cx("user")}>
            <p className={cx("titles")}>User</p>
            <p className={cx("text")}>sup001</p>
          </div>
          <div className={cx("email")}>
            <p className={cx("titles")}>Date of Birth</p>
            <p className={cx("text")}>1980-12-20</p>
          </div>
        </div>
        <div className={cx("block2")}>
          <div className={cx("contact")}>
            <p className={cx("titles")}>Contact Number</p>
            <p className={cx("text")}>+*******5555</p>
          </div>
          <div className={cx("fullName")}>
            <p className={cx("titles")}>Full Name</p>
            <p className={cx("text")}>kkk kkk kkk</p>
          </div>
          <div className={cx("currency")}>
            <p className={cx("titles")}>Currency</p>
            <p className={cx("text")}>MYR</p>
          </div>
          <div className={cx("bank")}>
            <p className={cx("titles")}>Country of Bank</p>
            <p className={cx("text")}>Malaysia</p>
          </div>
        </div>
        <div className={cx("block3")}>
          <p className={cx("titles")}> Banking Details</p>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
