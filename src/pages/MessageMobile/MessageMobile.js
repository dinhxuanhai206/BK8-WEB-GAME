import React from "react";
import classNames from "classnames/bind";
import styles from "./MessageMobile.module.scss";
import images from "~/constants/imagePromosMobile";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
const cx = classNames.bind(styles);
const navMessage = [
  {
    image: images.ib1,
    name: "info/Promo",
    link: "inbox-type",
  },
  {
    image: images.ib2,
    name: "Payment",
    link: "inbox-type",
  },
  {
    image: images.ib3,
    name: "System",
    link: "inbox-type",
  },
];
function MessageMobile() {
  return (
    <div className={cx("wrapper")}>
      {navMessage.map((item, index) => (
        <Link to={item.link} key={index} className={cx("message-item")}>
          <div className={cx("mess-block")}>
            <div className={cx("img")}>
              <img src={item.image} alt="" className={cx("img-item")} />
            </div>
            <p className={cx("name")}>{item.name}</p>
          </div>
          <div className={cx("icon")}>
            <AiOutlineRight style={{color: "gray", fontWeight: "bold"}}/>
          </div>
        </Link>
      ))}
     <div className={cx('inbox')}>
       <Outlet/>
     </div>
    </div>
  );
}
export default MessageMobile;
