import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Message.module.scss";
import Info from "./Info/Info";
import Payment from "./Payment/Payment";
import System from "./System/System";
import images from "~/constants/imagesMember";

const cx = classNames.bind(styles);

const tabPageMessages = [
  {
    key: "info",
    display: "Info/Promo",
  },
  {
    key: "payment",
    display: "Payment",
  },
  {
    key: "system",
    display: "System",
  },
];
function Message() {
  const [active, setActive] = useState(0);
  const [renderTab, setRenderTab] = useState("info");
  const [checked, setChecked] = React.useState(false);

  const handleChangeTab = (index, key) => {
    setActive(index);
    setRenderTab(key);
  };
  return (
    <div className={cx("wrapper")}>
      <p className={cx("mes-title")}>MESSAGESING</p>
      <div className={cx("inner")}>
        <div className={cx("tab-pageMessage")}>
          {tabPageMessages.map((item, index) => (
            <button
              onClick={() => handleChangeTab(index, item.key)}
              className={cx("btn-mes", index === active ? "active" : "")}
              key={index}
            >
              {item.display}
            </button>
          ))}
        </div>

        <div className={cx("select-block")}>
          <div className={cx("select-all")}>
            {" "}
            <input
              type="checkbox"
              defaultChecked={checked}
              onChange={() => setChecked(!checked)}
            />
            <span className={cx("title")}>Select/Unselect All</span>

          </div>
          <div className={cx("select-mask")}>
            <div className={cx("mask-block")}>
              <div>
                <img src={images.Mask} className={cx("mask-img")} />
              </div>
              <div>Mask As Read</div>
            </div>
            <div className={cx("delete-block")}>
              <div>
                <img src={images.delete} className={cx("delete-img")} />
              </div>
              <div>Delete</div>
            </div>
          </div>
        </div>
        <div className={cx("fiel")}>
          <div className={cx("check")}></div>
          <div className={cx("date")}>Date</div>
          <div className={cx("subject")}>Subject</div>
          <div className={cx("remark")}>remark</div>
        </div>


        <div className={cx("message-body")}>
          {renderTab === "info" ? (
            <Info />
          ) : renderTab === "payment" ? (
            <Payment />
          ) : renderTab === "system" ? (
            <System />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Message;
