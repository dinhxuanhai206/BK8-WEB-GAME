import React, { useState, useRef } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import images from "../../constants/imagePromosMobile";
import styles from "./PromosMobile.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const cx = classNames.bind(styles);

const tabPagePromos = [
	{
	  key: "all",
	  display: "TẤT CẢ",
	},
	{
	  key: "newMember",
	  display: "NGƯỜI CHƠI",
	},
	{
	  key: "casino",
	  display: "CASINO",
	},
	{
	  key: "vip",
	  display: "VIP",
	},
	{
	  key: "winner",
	  display: "CHIẾN THẮNG",
	},
	{
	  key: "special",
	  display: "ĐẶC BIỆT",
	},
	{
	  key: "sportsBook",
	  display: "SÁCH THỂ THAO",
	},
	{
	  key: "slot",
	  display: "SLOT",
	},
	{
	  key: "crypto",
	  display: "CRYPTO",
	},
  ];
  

const promosList = [
	{
	  category: ["slot", "sportsBook", "casino", "newMember"],
	  image: images.pro1,
	  title: "TIỀN THƯỞNG CHÀO MỪNG",
	  description:
		"Chào mừng đến với BK8! Thực hiện khoản tiền gửi đầu tiên của bạn và nhận khoản tín dụng thưởng lên tới 300 MYR! (Chỉ thành viên gửi tiền lần đầu)",
	  morebtn: "more info",
	  applybtn: "apply now",
	  time: "26day(s) 23hour(s)",
	},
	{
	  category: ["sportsBook", "newMember"],
	  image: images.pro2,
	  title: "CƯỢC ĐẦU TIÊN CỦA BẠN KHÔNG CÓ RỦI RO",
	  description:
		"Đây là 200.000đ cho lần đặt cược đầu tiên của bạn. Đi trước, đặt cược tốt nhất của bạn!",
	  morebtn: "more info",
	  applybtn: "",
	  time: "26day(s) 23hour(s)",
	},
	{
	  category: ["slot", "special"],
	  image: images.pro3,
	  title: "TIẾP THEO QUAY VÀO SPADEGAMING THÊM MAY MẮN JACKPOT THƯỞNG",
	  description:
		"Kiếm thêm 28.888 MYR trên số tiền thắng giải độc đắc của bạn khi ID vé đặt cược của bạn khớp với các con số may mắn!",
	  morebtn: "more info",
	  applybtn: "",
	  time: "26day(s) 23hour(s)",
	},
	{
	  category: ["all"],
	  image: images.pro4,
	  title: "GIẢI ĐẤU BASH MÙA HÈ SPADEGAMING CHIẾN THẮNG HÀNG TUẦN",
	  description:
		"Tổng giải thưởng 640.000 đ đang chờ bạn lấy! Để có một phần, tất cả những gì bạn cần làm là đặt cược! Tham gia ngay!",
	  morebtn: "more info",
	  applybtn: "",
	  time: "26day(s) 23hour(s)",
	} 
	
  ];

function PromosMobile() {
  const [renderTab, setRenderTab] = useState("all");
  const pagination = {
    renderBullet: function (index, className) {
      return `<span class="${className} ${cx("custom-pagination")}"></span>`;
    },
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("tab-block")}>
        <Swiper
          slidesPerView={6}
          spaceBetween={0}
          modules={[Pagination]}
          className={cx("mySwiper")}
        >
          {tabPagePromos.map((item, index) => (
            <SwiperSlide
              className={cx(
                "tab-page__items",
                renderTab === item.key && "active"
              )}
              key={index}
              onClick={() => setRenderTab(item.key)}
            >
              <span className={cx("tab-page__name")}>{item.display}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container">
        <div className={cx("promos-list")}>
          {promosList?.map((item, index) => {
            if (renderTab === "all") {
              return (
                <div key={index} className={cx("promos-item")}>
                  <div className={cx("img-item")}>
                    <img src={item.image} className={cx("img")} />
                  </div>
                  <div className={cx("content-item")}>
                    <div className={cx("left")}>
                      <p className={cx("title")}>{item.title}</p>
                      <p className={cx("description")}>{item.description}</p>
                      <div className={cx("action")}>
                        {item.morebtn && (
                          <button className={cx("btn-more")}>
                            {item.morebtn}
                          </button>
                        )}
                        {item.applybtn && (
                          <button className={cx("btn-apply")}>
                            {item.applybtn}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              if (item.category?.includes(renderTab)) {
                return (
                  <div key={index} className={cx("promos-item")}>
                    <div className={cx("img-item")}>
                      <img src={item.image} className={cx("img")} />
                    </div>
                    <div className={cx("content-item")}>
                      <div className={cx("left")}>
                        <p className={cx("title")}>{item.title}</p>
                        <p className={cx("description")}>{item.description}</p>
                        <div className={cx("action")}>
                          {item.morebtn && (
                            <button className={cx("btn-more")}>
                              {item.morebtn}
                            </button>
                          )}
                          {item.applybtn && (
                            <button className={cx("btn-apply")}>
                              {item.applybtn}
                            </button>
                          )}
                        </div>
                      </div>
                      <div className={cx("right")}>
                        <p className={cx("time")}>{item.time}</p>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default PromosMobile;
