import React from "react";
import classNames from "classnames/bind";
import styles from "./ChatOnline.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import images from "~/constants/images";

const cx = classNames.bind(styles);

function ChatOnline() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("chat-message")}>
        <svg
          x="0px"
          y="0px"
          width="32px"
          height="32px"
          viewBox="0 0 32 32"
          enableBackground="new 0 0 32 32"
          focusable="false"
          className={cx("outIcon")}
          aria-hidden="true"
        >
          <g>
            <defs>
              <linearGradient id="linear">
                <stop offset="0%" stopColor="#0760DE"></stop>
                <stop offset="100%" stopColor="rgb(0,81,197)"></stop>
              </linearGradient>
            </defs>
            <path
              fill="#fff"
              className={cx("chatButton__svg-chat-path")}
              d="M16.007 0c-8.299 0-14.023 6.836-14.023 14.024 0 5.88 2.982 8.636 4.107 9.916 0 0 4.093 4.585 12.068 8.060v-4.121c4.783-0.563 11.858-5.289 11.858-13.855-0.001-8.271-6.794-14.024-14.010-14.024z"
            ></path>
            <path
              fill="url(#linear)"
              className={cx("innerIcon")}
              d="M18.035 22.372v3.657c-0.014 0-2.729-1.364-4.276-2.574-2.926-2.236-6.498-4.416-6.498-9.438 0-4.993 4.149-8.622 8.622-8.622 0.005 0 0.011-0 0.017-0 4.744 0 8.591 3.838 8.605 8.579v0.043c0 5.162-4.164 7.779-6.47 8.355z"
            ></path>
          </g>
        </svg>
        <span className={cx('svg-doc')}><i></i></span>
      </div>
    </div>
  );
}

export default ChatOnline;
