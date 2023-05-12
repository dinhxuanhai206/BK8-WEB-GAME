import { useEffect, useContext, useState, useReducer } from "react";
import { useNavigate, Outlet, Link, useLocation } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Slots.module.scss";
import BannerSlideShow from "~/components/BannerSlideShow/BannerSlideShow";
import { BANNER_SLOTS } from "../../constants/imagesSlots";
import TabPageLogo from "~/components/TabPageLogo/TabPageLogo";
import { dataTabPageLogo } from "~/constants/mock-slots/dataTabpageLogo";
import { useMediaQuery } from "react-responsive";
import SwipperRecommenedMobile from "./SwipperRecommenedMobile/SwipperRecommenedMobile";
import SearchMobile from "~/components/SearchMobile/SearchMobile";
import { Store } from "~/Store";
import { dataInnerSlide } from '~/constants/mock-slots/dataInnerSlide'
import NavFilter from '~/components/NavFilter/NavFilter'
import ListItem from '~/components/ListItem/ListItem'
import * as gameService from '~/services/gameService'
import LoadingBox from "~/components/LoadingBox/LoadingBox";

const cx = classNames.bind(styles);

const dataFilter = ['All', 'Hot', 'New', 'Arcade', 'Card', 'Keno', 'Slot', 'Table']

const bannerSlots = [
  {
    image: BANNER_SLOTS.PragmaticPlay,
    link: "/promos",
  },
  {
    image: BANNER_SLOTS.ExtraSpinning,
    link: "/promos",
  },
  {
    image: BANNER_SLOTS.GrandJackpot,
    link: "/promos",
  },
  {
    image: BANNER_SLOTS.CrazyMonkey,
    link: "/promos",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, subData: action.payload, loading: false }
    default:
      return state;
  }
}

function Slots() {
  const isMobile = useMediaQuery({ query: `(max-width: 480px)` })
  const { state } = useLocation()
  const [active, setActive] = useState(dataTabPageLogo[0].provider_code)
  const [{ subData, loading }, dispatch] = useReducer(reducer, {
    subData: [],
    loading: true
  })

  useEffect(() => {
    if (state?.code !== undefined){
      setActive(state.code)
    }
  }, [state])

  useEffect(() => {
    const fetchSubGameData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      const result = await gameService.getSubGameList(active, 'SL')
      if (result?.status === 0) {
        //setSubData(result.data)
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      }
    }
    if (!!active) {
      fetchSubGameData()
    }
  }, [active])

  const handleValueSearch = () => {

  }

  return (
    <div className={cx("slots-wrapper")}>
      {!isMobile && (
        <div className={cx("banner-slots")}>
          <BannerSlideShow dataBanner={bannerSlots} />
        </div>
      )}
      <div className={cx(!isMobile ? "body" : "frame-mobile")}>
        {
          isMobile && (
            <SearchMobile search valueSearch={handleValueSearch} />
          )
        }
        {
          isMobile && (
            <SwipperRecommenedMobile />
          )
        }
        <div className={cx(!isMobile ? "container" : "container-mobile")}>
          {!isMobile && (
            <div className={cx("slots-tab")}>
              <TabPageLogo {...{ active, setActive }} data={dataTabPageLogo} />
            </div>
          )}
          <div className={cx("slots-content")}>
            {loading ? <LoadingBox/>
            :
            <>
              <NavFilter data={dataFilter} />
              <ListItem dataItems={subData} dataSlide={dataInnerSlide} type="SL" />
            </>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slots;