import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./MessageMobileType.module.scss";
import { Outlet } from "react-router-dom";
import images from "~/constants/imagePromosMobile";
import {
    AiOutlineDoubleRight,
    AiOutlineRight,
    AiOutlineLeft,
    AiOutlineDoubleLeft,
  } from "react-icons/ai";
const cx = classNames.bind(styles);

const MessageMobileType = () => {
  const [checked, setChecked] = useState(false);
  const [active, setActive] = useState("1");
  const handleChange = (event) => {
    setActive(event.target.id);
  };
//   const [list, setList] = React.useState(Infodata);
//   const handleDelete = (id) => {
//     const newList = list.filter((item) => item.id !== id);

//     setList(newList);
//   };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("message-header")}>
        <div className={cx("name-block")}>
          <div className={cx("check")}>
            <input
              type="checkbox"
              defaultChecked={checked}
              onChange={() => setChecked(!checked)}
              className={cx("input")}
            />
          </div>
          <div className={cx("name")}>Select/Unselect All</div>
        </div>
        <div className={cx("img-block")}>
          <div className={cx("img")}>
            <img src={images.ib4} alt="" className={cx("img-read")} />
          </div>
          <div className={cx("img")}>
            <img src={images.ib5} alt="" className={cx("img-delete")} />
          </div>
        </div>
      </div>
      <div className={cx("block-button")}>
        <button className={cx("btn", "doubleLeft")}>
          <AiOutlineDoubleLeft />
        </button>
        <button className={cx("btn", "eft")}>
          <AiOutlineLeft />
        </button>
        <button
          key={1}
          className={cx("btn1", active === "1" ? "active" : "")}
          id={"1"}
          onClick={handleChange}
        >
          1
        </button>
        <button className={cx("btn", "doubleRight")}>
          <AiOutlineRight />
        </button>
        <button className={cx("btn", "Right")}>
          <AiOutlineDoubleRight />
        </button>
      </div>
    </div>
  );
};
export default MessageMobileType;
