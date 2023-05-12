import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./SlotsMobile.module.scss";
import BannerSlideShow from "~/components/BannerSlideShow/BannerSlideShow";
import { BANNER_SLOTS } from "../../constants/imagesSlots";
import TabPageLogo from "~/components/TabPageLogo/TabPageLogo";
import { dataTabPageLogo } from "~/constants/mock-slots/dataTabpageLogo";
import { useMediaQuery } from "react-responsive";
import SwipperRecommenedMobile from "./SwipperRecommenedMobile/SwipperRecommenedMobile";
import SearchMobile from "~/components/SearchMobile/SearchMobile";
import { Store } from "~/Store";
import { dataInnerSlide } from "~/constants/mock-slots/dataInnerSlide";
import NavFilter from "~/components/NavFilter/NavFilter";
import ListItem from "~/components/ListItem/ListItem";
import * as gameService from "~/services/gameService";
import LoadingBox from "~/components/LoadingBox/LoadingBox";

const cx = classNames.bind(styles);

const dataFilter = [
  "All",
  "Hot",
  "New",
  "Arcade",
  "Card",
  "Keno",
  "Slot",
  "Table",
];

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, subData: action.payload, loading: false };
    default:
      return state;
  }
};

function SlotsMobile() {
  const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
  const params = useParams()
  const [{ subData, loading }, dispatch] = useReducer(reducer, {
    subData: [],
    loading: true,
  });


  useEffect(() => {
    const fetchSubGameData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      const result = await gameService.getSubGameList(params.provider_code, "SL");
      if (result?.status === 0) {
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      }
    };
    fetchSubGameData();
  }, [params?.provider_code]);

  const handleValueSearch = () => {};

  return (
    <div className={cx("slots-wrapper")}>
      <div className={cx("frame-mobile")}>
        {isMobile && <SearchMobile search valueSearch={handleValueSearch} />}
        {isMobile && <SwipperRecommenedMobile />}
        <div className={cx("container-mobile")}>
          <div className={cx("slots-content")}>
            {loading ? (
              <LoadingBox />
            ) : (
              <>
                <NavFilter data={dataFilter} />
                <ListItem
                  dataItems={subData}
                  type="SL"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlotsMobile;
