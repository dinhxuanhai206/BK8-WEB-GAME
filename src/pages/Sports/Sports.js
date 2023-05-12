import styles from "./Sports.module.scss";
import classNames from "classnames/bind";
import BannerSlideShow from "~/components/BannerSlideShow/BannerSlideShow";
import ListItem from "~/components/ListItem/ListItem";
import { dataInnerSlide } from "~/constants/mock-casino/dataInnerSlide";
import { useMediaQuery } from "react-responsive";
import CasinoMobile from "./CasinoMobile/CasinoMobile";
import { useEffect, useReducer, useContext } from 'react'
import LoadingBox from '~/components/LoadingBox/LoadingBox'
import { Store } from "~/Store.js";
import { useState } from 'react'
import images from '~/constants/images'
import { dataSports } from "~/constants/mockSports/dataSports";

const cx = classNames.bind(styles);

const bannerCasino = [
  {
    image: images.Attrative,
    link: "promos",
  },
  {
    image: images.EnjoyUnlimated,
    link: "promos",
  },
];


function Sports() {
  const isMobile = useMediaQuery({ query: `(max-width: 480px)` })
  
  return (
    <div className={cx("Sports")}>
      {!isMobile ? (
        <>
          <div className={cx("banner-Sports")}>
            <BannerSlideShow dataBanner={bannerCasino} />
          </div>
          <div className={cx("Sports-body")}>
            <div className="container">
                <ListItem
                  dataItems={dataSports}
                  dataSlide={dataInnerSlide}
                  type="SB"
                />
            </div>
          </div>
        </>
      ) : (
        <CasinoMobile />
      )}
    </div>
  );
}

export default Sports;
