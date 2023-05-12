import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./TabPageLogo.module.scss";
import classNames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import images from '~/constants/images'

const cx = classNames.bind(styles);

TabPageLogo.propTypes = {
  data: PropTypes.array,
  positionActive: PropTypes.number
};

function TabPageLogo({active, setActive, data}) {
  const [over, setOver] = useState(false);
  const [checkOver, setCheckOver] = useState(active);

  return (
    <div className={cx("tab-page-logo")}>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={9}
        breakpoints={{
          374: {
            slidesPerView: 2,
          },
          474:{
            slidesPerView: 2,
          },
          639: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 5,
          },
          1023: {
            slidesPerView: 7,
          },
          1179: {
            slidesPerView: 8,
          },
          1440: {
            slidesPerView: 9,
          },
        }}
        className={cx("swiper-tab")}
      >
        {data?.map((item) => (
              <SwiperSlide key={item.provider_code}>
                <li
                  key={item.provider_code}
                  className={cx("tab-items", active === item.provider_code ? "active" : "")}
                  onClick={() => setActive(item.provider_code)}
                  onMouseEnter={() => {
                    setOver(true);
                    setCheckOver(item.provider_code);
                  }}
                  onMouseLeave={() => {
                    setOver(false);
                    setCheckOver('');
                  }}
                >
                  <div className={cx('tab-inner')}>
                      <div className={cx('logo-img')}>
                        <i
                            
                            style={
                              over && checkOver === item.provider_code
                                ? item.imgActive
                                : active === item.provider_code
                                ? item.imgActive
                                : item.img
                            }
                          />
                      </div>
                      <span className={cx('tab-name')}>{item.provider_name}</span>
                  </div>
                </li>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}

export default TabPageLogo;
