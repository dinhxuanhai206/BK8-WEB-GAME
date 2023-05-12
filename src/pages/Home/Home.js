import React from "react";
import Highlight from "~/components/Highlight/Highlight";
import Soccer from "~/components/Soccer/Soccer";
import AppDowload from "~/components/AppDowload/AppDowload";
import Promotions from "../HomePageMobile/Promotions/Promotions";
import { useMediaQuery } from "react-responsive";
import SliderMobile from "../HomePageMobile/SliderMobile/SliderMobile";
import NavHome from "../HomePageMobile/NavHome/NavHome";
import BannerSlideShow from "~/components/BannerSlideShow/BannerSlideShow";
import SoccerMobile from "../HomePageMobile/SoccerMobile/SoccerMobile";
import images from "~/constants/images";
import GameList from "../HomePageMobile/GameList/GameList";

const bannerHome = [
  {
    image: images.bh1,
    link: "promos",
  },
  {
    image: images.bh2,
    link: "promos",
  },
  {
    image: images.bh3,
    link: "promos",
  },
  {
    image: images.bh4,
    link: "promos",
  },
  {
    image: images.bh5,
    link: "promos",
  },
];

function Home() {
  const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

  return (
    <div>
      {isMobile ? <SliderMobile /> :  <BannerSlideShow dataBanner={bannerHome} notification=" Chào tháng 6 trên BK8 với khuyến mãi hấp dẫn! Hãy hào hứng với các sự kiện Thể thao và nhà cung cấp mới! Mỗi dịp lễ đều được tặng ưu đãi Ngày vàng lên đến 1800đ! Cược miễn phí hàng ngày VND888! Hơn nữa, BK8 tặng một đồng vàng 9999 có giá trị như vậy! Tham gia ngay!"/>}
      {isMobile ? <SoccerMobile /> : <Soccer />}
      <NavHome />
      <Promotions />
      <GameList/>
      <Highlight />
      {/* <div className="container">
        <ListItem dataItems={dataItem} dataSlide={dataSlide}/>
      </div> */}
      <AppDowload />
    </div>
  );
}

export default Home;
