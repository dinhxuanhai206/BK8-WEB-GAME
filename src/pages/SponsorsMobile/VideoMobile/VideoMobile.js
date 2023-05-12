import React, { useState } from "react";
import classNames from "classnames/bind";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import images from "../../../constants/images";
import styles from "./VideoMobile.module.scss";
const cx = classNames.bind(styles);

const tabVideo = [
  {
    key: "all",
    display: "ALL",
  },
  {
    key: "sponsorship",
    display: "SPONSORSHIP",
  },
  {
    key: "event",
    display: "EVENTS",
  },
];

const videoList = [
  { url: "https://youtu.be/08je3Pmct08" },
  { url: "https://youtu.be/gSopBxBqsF0" },
  { url: "https://youtu.be/tBfUd_t7Vys" },
  { url: "https://youtu.be/TQEUGKLspBM" },
  { url: "https://youtu.be/gz2VKbyZHwE" },
  { url: "https://youtu.be/uPTr6X3qEGY" },
  { url: "https://youtu.be/3mdHl861O_k" },
  { url: "https://youtu.be/elZEikIqiOs" },
  { url: "https://youtu.be/UpJIvtiP3HA" },
  { url: "https://youtu.be/g3nukGtNpIk" },
  { url: "https://youtu.be/yHEnpACzigg" },
  { url: "https://youtu.be/juO9ssqBa0k" },
  { url: "https://youtu.be/gEtRHKO-Ud0" },
  { url: "https://youtu.be/l0KWktMEvXI" },
  { url: "https://youtu.be/CxuH7N_udS4" },
  { url: "https://youtu.be/l8VG7YcBX4I" },
  {
    url: "https://www.bk8myr.com/public/html/new_bk8/sponsorship/BK8%20Cup%20Malaysia%202019-Johor.mp4",
    sort: "event",
  },
  {
    url: "https://www.bk8myr.com/public/html/new_bk8/sponsorship/Bk8%20Cup%20Malaysia%202019-Penang.mp4",
    sort: "event",
  },
  {
    url: "https://www.bk8myr.com/public/html/new_bk8/sponsorship/BK8%20IDR%20CISCLampung%20Jersey%202018-2019.mp4",
    sort: "sponsorship",
  },
  {
    url: "https://www.bk8myr.com/public/html/new_bk8/sponsorship/BK8%20IDR%20CISCLampung%20Jersey%202018-2019.mp4",
    sort: "sponsorship",
  },
];
function VideoMobile() {
  const [active, setActive] = useState(0);
  const [tabRender, setTabRender] = useState("all");

  const handleChangeTab = (index, key) => {
    setActive(index);
    setTabRender(key);
  };
  return (
    <div className={cx("video-wrapper")}>
     <div className={cx("menu")}>
     <div className={cx("tab-Video")}>
        {tabVideo.map((item, index) => (
          <div
            className={cx("tab-Video__items", index === active ? "active" : "")}
            key={index}
            onClick={() => {
              setTabRender(item.key);
            }}
          >
            <button
              onClick={() => handleChangeTab(index, item.key)}
              className={cx("tab-Video__name")}
            >
              {item.display}
            </button>
          </div>
        ))}
      </div>
     </div>
      <div className={cx("video-list")}>
        {tabRender === "all"
          ? videoList?.map((item, index) => (
              <div key={index} className={cx("video-item")}>
                <div className={cx("left")}>
                  <div className={cx("video-url")}>
                    <ReactPlayer
                      className={cx("player")}
                      url={item.url}
                      width="170px"
                      height="160px"
                      controls={true}
                    />
                  </div>
                </div>
              </div>
            ))
          : videoList?.map((item, index) => {
              if (tabRender === item.sort) {
                return (
                  <div key={index} className={cx("video-item")}>
                    <div className={cx("left")}>
                      <div className={cx("video-url")}>
                        <ReactPlayer
                          className={cx("player")}
                          url={item.url}
                          width="170px"
                          height="160px"
                          controls={true}
                        />
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
      </div>
    </div>
  );
}

export default VideoMobile;
