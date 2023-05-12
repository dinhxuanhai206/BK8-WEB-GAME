import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./AccountMobile.module.scss";
import images from "~/constants/imagesMember";
import { IoEllipsisVertical } from "react-icons/io5";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
const bankingNav = [
  {
    img: images.account1,
    name: "Tài Khoản Của Tôi",
    link: "/memberprofile",
  },
  {
    img: images.account2,
    name: "Thay đổi password",
    link: "/passwordmobile",
  },
  {
    img: images.account3,
    name: "Thay đổi game password",
    link: "/providerpassword",
  },
  {
    img: images.account4,
    name: "Nhắn Tin",
    link: "/inbox",
  },
  {
    img: images.account5,
    name: "Chi tiết rút tiền",
    link: "/withdraw",
  },
  {
    img: images.account6,
    name: "Giới thiệu",
    link: "/referral",
  },
];
function AccountMobile() {
  return (
    <div className={cx("account-wrapper")}>
      <div className={cx("banner-block")}>
        <div className={cx("normal")}>
          <div className={cx("normal-left")}>
            <img src={images.normal} className={cx("img")} />
            <div className={cx("wel-block")}>
              <p className={cx("name")}>sup0003</p>
              <p className={cx("title")}>Normal</p>
            </div>
          </div>
          <div className={cx("normal-right")}>
            <div className={cx("block-img")}>
              <img src={images.coin} className={cx("img-coin")} />
            </div>
            <div className={cx("name")}>
              <p className={cx("title")}>Ranking</p>
              <p className={cx("p")}>{`>100`}</p>
            </div>
          </div>
        </div>
        {/* //////////////// */}
        <div className={cx("auto-transfer")}>
          <div className={cx("imgSmart")}>
            <img src={images.iconSmartWhite} className={cx("img-iconSmart")} />
          </div>
          <p className={cx("auto")}>Main Wallet Auto Transfer</p>
          <label className={cx("switch")} htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />
            <div className={cx("slider", "round")}></div>
          </label>
        </div>
        <div className={cx("main-wallet")}>
          <div className={cx("user")}>
            <p className={cx("user-title")}>
              {" "}
              Verify your account for additional layers of security
            </p>
            <div className={cx("img-block")}>
              <div>
                <img src={images.user} className={cx("img-user")} />
              </div>
              <div>
                <img src={images.mail} className={cx("img-mail")} />
              </div>
              <div>
                <img src={images.phone} className={cx("img-phone")} />
              </div>
              <div>
                <img src={images.bank} className={cx("img-bank")} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("line-block")}>
        <div className={cx("line")}></div>
        <div className={cx("line")}></div>
        <div className={cx("line")}></div>
        <div className={cx("line")}></div>
      </div>
      <div className={cx("banking-bottom")}>
        {bankingNav.map((item, index) => (
          <Link to={item.link} className={cx("block-item")} key={index}>
            <div className={cx("item-img")}>
              <img src={item.img} alt="" className={cx("img")} />
            </div>
            <p className={cx("name")}>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AccountMobile;
