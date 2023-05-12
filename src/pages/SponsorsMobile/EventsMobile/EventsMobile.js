import React, { useState } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import images from "../../../constants/images";
import styles from "./EventsMobile.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const cx = classNames.bind(styles);

const eventList = [
    {
        image: images.imgitems36,
        title: 'ROBIN VAN PERSIE X BK8 MEET AND',
        title1: 'GREET EVENT',
        description: "Robin Van Persie đã có buổi giao lưu, giao lưu với người hâm mộ châu Á. Các phiên đã được sống động và tương tác.",
        description1: "",
        readbtn: 'Đọc Thêm',
        time: {
            day: "30",
            month: "MAY",
            year: "2021"
        },
        imageSmall: [
            images.imgitems37,
            images.imgitems38,
            images.imgitems39,
            images.imgitems40,
        ]
    },
    {
        image: images.imgitems41,
        title: 'BK8 CUP INTERNATIONAL FUTSAL',
        title1: 'TOURNAMENT',
        description: "Cup là giải đấu futsal quốc tế được tổ chức tại nhiều địa điểm trên khắp Châu Á, do BK8 tổ chức và tài trợ.",
        description1: "",
        readbtn: 'Đọc Thêm',
        time: {
            day: "019",
            month: "ARP",
            year: "2019",
        },
        imageSmall: [
            images.imgitems42,
            images.imgitems43,
            images.imgitems44,
            images.imgitems45,
        ]
    },
    {
        image: images.imgitems46,
        title: 'Official Asian Betting Partner of',
        title1: 'Là Đối tác cá cược châu Á chính thức của 5 đội Tây Ban Nha cho năm 2021Là Đối tác cá cược châu Á chính thức của 5 đội Tây Ban Nha cho mùa giải 2021/22, BK8 hy vọng sẽ mang hành động đến gần hơn với các thành viên của mình thông qua một loạt nội dung độc quyền và các sự kiện rất được mong đợi. Sự hợp tác này cũng sẽ đưa cả hai bên tiếp cận với lượng khán giả lớn hơn, nơi BK8 và các đội có thể tiếp tục nổi tiếng trên toàn cầu.',
        description1: "",
        readbtn: 'Đọc Thêm',
        time: {
            day: "15",
            month: "FEB",
            year: "2019"
        },
        imageSmall: [
            images.imgitems47,
            images.imgitems48,
            images.imgitems49,  
        ]
    },
    {
        image: images.imgitems50,
        title: '2019 METP E-Sport Tournament',
        title1: 'Sponsored Mainly by BK8',
        description: "Với tổng giải thưởng lớn, những người tham gia giải đấu thể thao điện tử METP tại Malaysia mang đến những đội mạnh nhất của họ và cạnh tranh để giành chức vô địch.",
        description1: "",
        readbtn: 'Đọc Thêm',
        time: {
            day: "15",
            month: "FEB",
            year: "2019"
        },
        imageSmall: [
            images.imgitems51,
            images.imgitems52,
            images.imgitems52,
            images.imgitems53,
            images.imgitems54,
        ]
    },
]



function EventsMobile() {
  const [open, setOpen] = useState(false);
  const [popupImg, setPopupImg] = useState("");

  const pagination = {
    renderBullet: function (index, className) {
      return `<span class="${className} ${cx("custom-pagination")}"></span>`;
    },
  };

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickPopup = (img) => {
    setOpen(true);
    setPopupImg(img);
  };

  return (
    <div className={cx("sponsors-list")}>
      {eventList?.map((item, index) => (
        <div key={index} className={cx("sponsors-item")}>
          <div className={cx("top")}>
            <div className={cx("img-item")}>
              <img src={item.image} alt="" className={cx("img")} />
              <div className={cx("time")}>
                <p className={cx("day")}>{item.time?.day}</p>
                <p className={cx("month")}>{item.time?.month}</p>
                <p className={cx("year")}>{item.time?.year}</p>
              </div>
            </div>
            <Swiper
              className={cx("bottom")}
              slidesPerView={4}
              spaceBetween={1}
              modules={[Pagination]}
            >
              <div className={cx("imgitem")}>
                {item.imageSmall?.map((img, i) => (
                  <SwiperSlide 
                    key={i}
                    onClick={() => handleClickPopup(img)}
                    className={cx("img")}
                  >
                    <img src={img} />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
            <div className={cx("content-item")}>
              <div className={cx("title-content")}>
                <p className={cx("title")}>{item.title}</p>
                <p className={cx("title1")}>{item.title1}</p>
              </div>
              <div className={cx("description-content")}>
                <p className={cx("description")}>{item.description}</p>
                <p className={cx("description1")}>{item.description1}</p>
              </div>
              <button className={cx("learn-more")}>{item.readbtn}</button>
            </div>
          </div>
        </div>
      ))}
      <div
        style={open ? { display: "block" } : { display: "none" }}
        className={cx("popup-img")}
      >
        <div className={cx("wrapper")}>
          {open && (
            <div className={cx("img-info")}>
                <button
                  onClick={() => setOpen(false)}
                  className={cx("btn-close")}
                >
                  X
                </button>
                <div className={cx("img")}>
                  <img src={popupImg} className={cx("img-item")} />
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventsMobile;
