import React from "react";
import classNames from "classnames/bind";
import styles from "./AppDowload.module.scss";
import images from "~/constants/images";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper";
const cx = classNames.bind(styles);

const AppDowload = () => {
  const pagination = {
    clickable: true,
    autoplay: 2000,
    renderBullet: function (index, className) {
      return `<span class="${className} ${cx("custom-pagination")}"></span>`;
    },
  };
  return (
    <div className="container">
      <div className={cx("wrapper")}>
        <div className={cx("wrapper-left")}>
          <p className={cx("title")}>
            <MdOutlineAppSettingsAlt
              style={{
                fontSize: "30px",
                marginBottom: "-10px",
                color: "rgba(0, 0, 0, 0.2)",
              }}
            />{" "}
            APP Dowload
          </p>
          <Swiper
            pagination={pagination}
            modules={[Pagination, Autoplay]}
            className={cx("swiper")}
            autoplay={{
              delay: 2000,
            }}
          >
            <SwiperSlide>
              <p className={cx("desc")}>HIGHER SECURITY KNOTS</p>
              <div className={cx("img-dow")}>
                <img src={images.dowload1} alt="" className={cx("dowload")} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <p className={cx("desc")}>EXPRESS LOGIN</p>
              <div className={cx("img-dow")}>
                <img src={images.dowload2} alt="" className={cx("dowload")} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <p className={cx("desc")}>SCAN TO PLAY</p>
              <div className={cx("img-dow")}>
                <img src={images.dowload3} alt="" className={cx("dowload")} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <p className={cx("desc")}>PERSONALIZE YOUR EXPERIENCE</p>
              <div className={cx("img-dow")}>
                <img src={images.dowload4} alt="" className={cx("dowload")} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={cx("wrapper-right")}>
          <div className={cx("Wrapper-app")}>
            <p className={cx("title")}>
              <AiFillApple
                style={{
                  fontSize: "30px",
                  marginBottom: "-7px",
                  marginRight: "5px",
                }}
              />
              Apple IOS
            </p>
            <div className={cx("app")}>
              <div className={cx("qr-img")}>
                <img src={images.qrApp} alt="" className={cx("img")} />
              </div>
              <div className={cx("block")}>
                <div className={cx("version")}>App version: 1.11.0</div>
                <div className={cx("update")}>Updated Date: 30/8/2021 </div>
                <div className={cx("size")}>8.7 MB </div>
                <button className={cx("btn-instructions")}>Instructions</button>
              </div>
            </div>
          </div>

          <div className={cx("Wrapper-app")}>
            <p className={cx("title")}>
              <AiFillAndroid
                style={{
                  fontSize: "30px",
                  marginBottom: "-7px",
                  marginRight: "5px",
                }}
              />
              Android
            </p>
            <div className={cx("app")}>
              <div className={cx("qr-img")}>
                <img src={images.qrApp} alt="" className={cx("img")} />
              </div>
              <div className={cx("block")}>
                <div className={cx("version")}>App version: 1.13.0</div>
                <div className={cx("update")}>Updated Date: 30/9/2021 </div>
                <div className={cx("size")}>9.8 MB </div>
                <button className={cx("btn-instructions")}>Instructions</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDowload;
