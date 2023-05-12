import styles from "./Casino.module.scss";
import classNames from "classnames/bind";
import BannerSlideShow from "~/components/BannerSlideShow/BannerSlideShow";
import ListItem from "~/components/ListItem/ListItem";
import { dataInnerSlide } from "~/constants/mock-casino/dataInnerSlide";
import { dataCasino } from "~/constants/mock-casino/dataCasino";
import { useMediaQuery } from "react-responsive";
import CasinoMobile from "./CasinoMobile/CasinoMobile";
import { useEffect, useReducer, useContext } from 'react'
import LoadingBox from '~/components/LoadingBox/LoadingBox'
import { Store } from "~/Store.js";
import { useState } from 'react'
import images from '~/constants/images'

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


function Casino() {
  const isMobile = useMediaQuery({ query: `(max-width: 480px)` })
  
  return (
    <div className={cx("casino")}>
      {!isMobile ? (
        <>
          <div className={cx("banner-casino")}>
            <BannerSlideShow dataBanner={bannerCasino} />
          </div>
          <div className={cx("casino-body")}>
            <div className="container">
                <ListItem
                  dataItems={dataCasino}
                  dataSlide={dataInnerSlide}
                  type="LC"
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

export default Casino;
