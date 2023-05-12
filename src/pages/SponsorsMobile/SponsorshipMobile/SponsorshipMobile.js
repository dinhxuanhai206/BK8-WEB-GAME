import React, { useState } from "react";
import classNames from "classnames/bind";
import images from "../../../constants/images";
import styles from "./SponsorshipMobile.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const cx = classNames.bind(styles);

const sponsorsList = [
    {
        image: images.imgitems,
        title: "Huddersfield Town A.F.C.",
        title1: "Là đối tác cá cược toàn cầu chính thức của BK8",
        description:
            "Huddersfield Town Association Football Club là một câu lạc bộ bóng đá chuyên nghiệp của Anh có trụ sở tại Huddersfield, West Yorkshire.",
        description1:
            "Vào ngày 22 tháng 12 năm 2021, BK8 trở thành Đối tác cá cược toàn cầu chính thức của Huddersfield Town cho phần còn lại của mùa giải 2021/22. Trong quá trình hợp tác, BK8 và Huddersfield Town A.F.C. làm việc cùng nhau trong một số kích hoạt cơ sở. Bằng việc hợp tác với câu lạc bộ bóng đá chuyên nghiệp Anh, BK8 đặt mục tiêu tham gia sâu hơn vào thị trường bóng đá ở Anh.",
        learnbtn: "Learn More",
        time: {
            day: "22",
            month: "DEC",
            year: "2021",
        },
        imageSmall: [
            images.imgitems1,
            images.imgitems2,
            images.imgitems3,
            images.imgitems4,
            images.imgitems5,
        ],
    },
    {
        image: images.imgitems6,
        title: "Kelly Smith As",
        title1: "BK8 Ambassador 2021/22",
        description:
            "Cựu tiền đạo đội tuyển bóng đá nữ quốc gia Anh và Arsenal",
        description1:
            "Kelly Smith đã chính thức trở thành nữ đại sứ thương hiệu đầu tiên của BK8 vào năm 2021, đưa BK8 trở thành thương hiệu cá cược quốc tế đầu tiên bổ nhiệm một nữ đại sứ. Sau khi nghỉ hưu, Smith tập trung vào việc trao quyền cho phụ nữ trong thể thao và cũng là người ủng hộ nhận thức về sức khỏe tâm thần. Cô ấy là Người bảo trợ cho tổ chức từ thiện We Mind & Kelly Matters, trong đó BK8 đã quyên góp, như một cử chỉ để kỷ niệm mối quan hệ hợp tác.",
        learnbtn: "Learn More",
        time: {
            day: "08",
            month: "SEP",
            year: "2021",
        },
        imageSmall: [
            images.imgitems7,
            images.imgitems8,
            images.imgitems9,
            images.imgitems10,
            images.imgitems11,
        ],
    },
    {
        image: images.imgitems12,
        title: "Official Asian Betting Partner of",
        title1: "Elche CF, Valencia CF, Athletic Club, Villarreal, RCD Mallorca 2021/22",
        description:
            "Với tư cách là Đối tác cá cược châu Á chính thức của 5 đội Tây Ban Nha cho mùa giải 2021/22, BK8 hy vọng sẽ mang hành động đến gần hơn với các thành viên của mình thông qua một loạt nội dung độc quyền và các sự kiện rất được mong đợi. Sự hợp tác này cũng sẽ đưa cả hai bên tiếp cận với lượng khán giả lớn hơn, nơi BK8 và các đội có thể tiếp tục nổi tiếng trên toàn cầu.",
        description1: "",
        learnbtn: "Learn More",
        time: {
            day: "15",
            month: "JUN",
            year: "2021",
        },
        imageSmall: [
            images.imgitems13,
            images.imgitems14,
            images.imgitems15,
            images.imgitems16,
            images.imgitems17,
        ],
    },
    {
        image: images.imgitems18,
        title: "ROBIN VAN PERSIE (RVP) AS CURRENT",
        title1: "BK8 Brand Ambassador",
        description:
            "Cựu tiền đạo của Arsenal, Manchester United và đội tuyển quốc gia Hà Lan.",
        description1:
            "Sau khi giải nghệ với tư cách là một cầu thủ bóng đá chuyên nghiệp vào tháng 5 năm 2019, Van Persie đã đồng ý gia nhập BK8 với tư cách là đại sứ thương hiệu. Sự hợp tác này sẽ khơi dậy sự phấn khích cho cả BK8 và Van Persie. Trong chuỗi hoạt động đó, chuyến thăm châu Á sắp tới của Van Persie sẽ là điểm nhấn. Các thành viên BK8 và người hâm mộ chắc chắn sẽ được thưởng thức!",
        learnbtn: "Learn More",
        time: {
            day: "19",
            month: "SEP",
            year: "2019",
        },
        imageSmall: [
            images.imgitems19,
            images.imgitems20,
            images.imgitems21,
            images.imgitems22,
            images.imgitems23,
        ],
    },
    {
        image: images.imgitems30,
        title: "John Terry AS BK8's",
        title1: "First Brand Ambassador",
        description1: "",
        description:
            "BK8 đặt mục tiêu đạt được nhiều thành tựu hơn nữa với sự tham gia của cựu cầu thủ bóng đá Chelsea và đội tuyển Anh. Với việc có một biểu tượng bóng đá quốc tế làm đại sứ thương hiệu, BK8 dự định không chỉ nâng cao hình ảnh thương hiệu của mình mà còn mang đến cho các thành viên cơ hội tiếp cận gần gũi và cá nhân với một huyền thoại như John Terry.",
        learnbtn: "Learn More",
        time: {
            day: "15",
            month: "JAN",
            year: "2019",
        },
        imageSmall: [
            images.imgitems31,
            images.imgitems32,
            images.imgitems33,
            images.imgitems34,
            images.imgitems35,
        ],
    },
    {
        image: images.imgitems24,
        title: "Official DBR Partner",
        title1: "of Spanish League 2018/19",
        description:
            "Thương hiệu BK8 sẽ được hiển thị trên bảng quảng cáo kỹ thuật số trong các trận đấu La Liga trên sân khách giữa Real Madrid và Barcelona FC. Là đối tác cá cược châu Á của giải đấu, BK8 hy vọng sẽ được công nhận trên toàn thế giới và thu hút sự chú ý của người dùng từ khắp nơi trên thế giới.",
        description1: "",
        learnbtn: "Learn More",
        time: {
            day: "06",
            month: "JUN",
            year: "2018",
        },
        imageSmall: [
            images.imgitems25,
            images.imgitems26,
            images.imgitems27,
            images.imgitems28,
            images.imgitems29,
        ],
    },
];


function SponsorshipMobile() {
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
      {sponsorsList?.map((item, index) => (
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
              <button className={cx("learn-more")}>{item.learnbtn}</button>
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

export default SponsorshipMobile;
