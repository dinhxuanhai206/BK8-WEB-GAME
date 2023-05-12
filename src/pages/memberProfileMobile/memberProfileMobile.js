import React from "react";
import classNames from "classnames/bind";
import styles from "./memberProfileMobile.module.scss";

const cx = classNames.bind(styles);

function memberProfileMobile() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("profile-block")}>
        <div className={cx("item")}>
          <p className={cx("titles")}>Email</p>
          <p className={cx("text")}>***kkk@gmail.com</p>
        </div>
        <div className={cx("item")}>
          <p className={cx("titles")}>Contact Number</p>
          <p className={cx("text")}>+*******5555</p>
        </div>
        <div className={cx("item")}>
          <p className={cx("titles")}>Username</p>
          <p className={cx("text")}>sup001</p>
        </div>
        <div className={cx("item")}>
          <p className={cx("titles")}>Full Name</p>
          <p className={cx("text")}>kkk kkk kkk</p>
        </div>
        <div className={cx("item")}>
          <p className={cx("titles")}>Date of Birth</p>
          <p className={cx("text")}>1980-12-20</p>
        </div>
        <div className={cx("item")}>
          <p className={cx("titles")}>Currency</p>
          <p className={cx("text")}>MYR</p>
        </div>
        <div className={cx("item")}>
          <p className={cx("titles")}>Country of Bank</p>
          <p className={cx("text")}>Malaysia</p>
        </div>
      </div>
    </div>
  );
}

export default memberProfileMobile;
