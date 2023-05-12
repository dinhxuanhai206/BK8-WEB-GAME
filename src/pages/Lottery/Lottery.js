import { useEffect, useState } from "react";
import { useNavigate, Outlet, Link, useLocation } from "react-router-dom";
import TabPageLogo from "~/components/TabPageLogo/TabPageLogo";
import classNames from "classnames/bind";
import styles from "./Lottery.moule.scss";
import BannerSlideShow from "~/components/BannerSlideShow/BannerSlideShow";
import { dataInnerSlide } from "~/constants/mock-casino/dataInnerSlide";
import { BANNER_LOTTERY } from "../../constants/imageLottery";
import { dataTabPageLottery } from "~/constants/mock-lottery/dataTabPageLogo";
import * as gameService from "~/services/gameService";
import ListItem from "~/components/ListItem/ListItem";
import { dataLottery } from "~/constants/mock-lottery/dataLottery";
import CasinoMobile from "./CasinoMobile/CasinoMobile";
import { useMediaQuery } from "react-responsive";

const cx = classNames.bind(styles);

const bannerLottery = [
  {
    image: BANNER_LOTTERY.LuckyNumber,
    link: "/promos",
  },
  {
    image: BANNER_LOTTERY.PickANumber,
    link: "/promos",
  },
  {
    image: BANNER_LOTTERY.PlayLottery,
    link: "/promos",
  },
];

const Lottery = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

  return (
    <div className={cx("lottery-wrapper")}>
      {!isMobile ? (
        <>
          <div className={cx("banner-lottery")}>
            <BannerSlideShow dataBanner={bannerLottery} />
          </div>
          <div className={cx("lottery-body")}>
            <div className="container">
              <ListItem
                dataItems={dataLottery}
                dataSlide={dataInnerSlide}
                type="LT"
              />
            </div>
          </div>
        </>
      ) : (
        <CasinoMobile />
      )}
    </div>
  );
};

export default Lottery;
