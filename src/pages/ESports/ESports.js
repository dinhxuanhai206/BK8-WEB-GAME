import styles from "./ESports.module.scss";
import classNames from "classnames/bind";
import BannerSlideShow from "~/components/BannerSlideShow/BannerSlideShow";
import ListItem from "~/components/ListItem/ListItem";
import { dataInnerSlide } from "~/constants/mock-casino/dataInnerSlide";
import { dataEsports } from "~/constants/mockESport/dataEsports";
import { useMediaQuery } from "react-responsive";
import ESportsMobile from "./ESportsMobile/ESportsMobile";
import { useEffect, useReducer, useContext } from 'react'
import LoadingBox from '~/components/LoadingBox/LoadingBox'
import { Store } from "~/Store.js";
import { useState } from 'react'
import images from '~/constants/images'

const cx = classNames.bind(styles);

const bannerESports = [
  {
    image: images.Attrative,
    link: "promos",
  },
  {
    image: images.EnjoyUnlimated,
    link: "promos",
  },
];


function ESports() {
  const isMobile = useMediaQuery({ query: `(max-width: 480px)` })
  
  return (
    <div className={cx("casino")}>
      {!isMobile ? (
        <>
          <div className={cx("banner-casino")}>
            <BannerSlideShow dataBanner={bannerESports} />
          </div>
          <div className={cx("esports-body")}>
            <div className="container">
                <ListItem
                  dataItems={dataEsports}
                  dataSlide={dataInnerSlide}
                  type="ES"
                />
            </div>
          </div>
        </>
      ) : (
        <ESportsMobile />
      )}
    </div>
  );
}

export default ESports;
