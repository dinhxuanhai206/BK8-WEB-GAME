import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Collab.module.scss";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const cx = classNames.bind(styles);
function Collab({ title, bg, focusCollab, setFocusCollab, index, children }) {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className={cx("text-content")}>
      <div className={cx("text-content")}>
        <div
          onClick={() => {
            setIsShow(!isShow);
            setFocusCollab(index);
          }}
          className={cx("item-menu")}
          style={{
            backgroundColor: bg && isShow && index === focusCollab && bg,
          }}
        >
          <p className={cx("title-menu")}>{title}</p>
          {index === focusCollab ? (
            !isShow ? (
              <div className={cx("img-show")}>
                <MdKeyboardArrowDown
                  style={{
                    fontSize: "20px",
                  }}
                />
              </div>
            ) : (
              isShow &&
              index === focusCollab && (
                <div className={cx("img-show")}>
                  <MdKeyboardArrowUp
                    style={{
                      fontSize: "20px",
                    }}
                  />
                </div>
              )
            )
          ) : (
            <div className={cx("img-show")}>
              <MdKeyboardArrowDown
                style={{
                  fontSize: "20px",
                }}
              />
            </div>
          )}
        </div>
        {isShow && index === focusCollab && (
          <div className={cx("text")}>{children}</div>
        )}
      </div>
    </div>
  );
}
export default Collab;
