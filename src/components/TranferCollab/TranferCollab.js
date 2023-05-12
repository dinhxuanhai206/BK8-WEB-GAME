import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./TranferCollab.module.scss";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

const cx = classNames.bind(styles);
function TranferCollab({
  title,
  bg,
  focusTranferCollab,
  setFocusTranferCollab,
  index,
  children,
}) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={cx("text-content")}>
      <div className={cx("text-content")}>
        <div
          onClick={() => {
            setIsShow(!isShow);
            setFocusTranferCollab(index);
          }}
          className={cx("item-menu")}
          style={{
            backgroundColor: bg && isShow && index === focusTranferCollab && bg,
          }}
        >
          <div className={cx("left")}>
            {index === focusTranferCollab ? (
              !isShow ? (
                <div className={cx("img-show")}>
                  <AiOutlinePlus
                    style={{
                      fontSize: "22px",
                      marginBottom: "-3px",
                      color: "#53a4fb",
                    }}
                  />
                </div>
              ) : (
                <div className={cx("img-show")}>
                  <AiOutlineClose
                    style={{
                      fontSize: "20px",
                      color: "red",
                      marginBottom: "-3px",
                    }}
                  />
                </div>
              )
            ) : (
              <div className={cx("img-show")}>
                <AiOutlinePlus
                  style={{
                    fontSize: "22px",
                    marginBottom: "-3px",
                    color: "#53a4fb",
                  }}
                />
              </div>
            )}
            <p className={cx("title-menu")}>{title}</p>
          </div>
          <div className={cx("right")}>
            <p>0.00</p>
            <button className={cx("btn")}>ALL IN</button>
          </div>
        </div>
        {isShow && index === focusTranferCollab && (
          <div className={cx("text")}>{children}</div>
        )}
      </div>
    </div>
  );
}
export default TranferCollab;
