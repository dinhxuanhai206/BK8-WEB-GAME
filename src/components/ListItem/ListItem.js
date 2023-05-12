import {useEffect, useState} from "react";
import className from "classnames/bind";
import i18n from 'i18next'
import styles from "./ListItem.module.scss";
import Card from "~/components/Card/Card";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useMediaQuery } from "react-responsive";
import CardCasino from "../CardCasino/CardCasino";
import { useContext } from "react";
import { Store } from "~/Store.js";

const cx = className.bind(styles);

ListItem.propTypes = {
  dataItems: PropTypes.array,
  dataSlide: PropTypes.array,
  col: PropTypes.number,
  type: PropTypes.string,
};

function ListItem(props) {
  const { dataItems, dataSlide, className, col, type } = props;
  const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { i18nLang } = state

  const imageHandler = (item) => {
    var imageUrl = ''
    var language = 'en'
    var imageFile = item['game_picture_en']
    //var language = item[`game_picture_${i18nLang}`] !== '' && i18nLang === 'chs' ? 'cn' : 'en'
    //var imageFile = item[`game_picture_${i18nLang}`] !== '' ? item[`game_picture_${i18nLang}`] : item['game_picture_en']
    if (type === 'SL'){
      imageUrl = `https://iwk88.com/gameapi/assets/img/slots/${item.game_provider_code.toLowerCase()}/${language}/${imageFile}`
    }else if (type === 'BG'){
      imageUrl = `https://iwk88.com/gameapi/assets/img/boardgame/${item.game_provider_code.toLowerCase()}/${language}/${imageFile}`
    }else if (type === 'FH'){
      imageUrl = `https://iwk88.com/gameapi/assets/img/fishing/${item.game_provider_code.toLowerCase()}/${language}/${imageFile}`
    }else if (type === 'LT'){
      imageUrl = `https://iwk88.com/gameapi/assets/img/lottery/${item.game_provider_code.toLowerCase()}/${language}/${imageFile}`
    }else if (type === 'OT'){
      imageUrl = `https://iwk88.com/gameapi/assets/img/others/${item.game_provider_code.toLowerCase()}/${language}/${imageFile}`
    }
    return imageUrl
  }

  const renderMobile = () => {
    return (
      <div className={cx("list-item", "list-item-mobile")}>
        {dataItems && dataItems.length > 0 && dataSlide && dataSlide.length > 0
          ? dataItems?.map((item, i) => (
            <div key={i} className={cx("col-3")}>
              <Card
                title={item[`game_name_${i18nLang}`]}
                type={item?.game_type_code}
                code={item?.game_provider_code}
                subCode={item?.game_code}
                image={imageHandler(item)}
                isNew={item?.isNew}
                isHot={item?.isHot}
                isProgressive={item?.isProgressive}
              />
            </div>
          ))
          : dataItems && dataItems.length > 0
            ? dataItems?.map((item, i) => (
              <div key={i} className={cx("col-3")}>
                <Card
                  title={item[`game_name_${i18nLang}`]}
                  type={item?.game_type_code}
                  code={item?.game_provider_code}
                  subCode={item?.game_code}
                  image={imageHandler(item)}
                  isNew={item?.isNew}
                  isHot={item?.isHot}
                  isProgressive={item?.isProgressive}
                />
              </div>
            ))
            : dataSlide && dataSlide.length > 0
              ? ""
              : null}
      </div>
    )
  }

  const renderCasino = () => {
    return (
      <div className={cx("list-item", className)}>
        {dataItems?.length > 0 && dataSlide?.length > 0 ? (
          <>
            <div className={cx("left")}>
              <Swiper
                className={cx("slide-banner-item")}
                spaceBetween={50}
                slidesPerView={1}
              >
                {dataSlide?.map((item, i) => (
                  <SwiperSlide key={i} className={cx("slide-item")}>
                    <Link to={item?.link}>
                      <img src={item?.image} alt='no-images' />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={cx("list-wrapper", "right")}>
              {dataItems?.map((item, i) => (
                <div key={i} className={cx("col-3")}>
                  <CardCasino
                    title={item?.provider_name}
                    code={item?.provider_code}
                    type={type}
                  />
                </div>
              ))}
            </div>
          </>
        ) : dataItems?.length > 0 ? (
          dataItems?.map((item, i) => (
            <div key={i} className={cx("col-5")}>
              <CardCasino
                title={item?.provider_name}
                code={item?.provider_code}
                type={type}
              />
            </div>
          ))
        ) : dataSlide?.length > 0 ? (
          <Swiper
            className={cx("slide-banner-item")}
            spaceBetween={50}
            slidesPerView={1}
          >
            {dataSlide?.map((item, i) => (
              <SwiperSlide key={i} className={cx("slide-item")}>
                <div>
                  <img src={item?.image} alt='no images'/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>
    )
  }

  const renderGame = () => {
    return !isMobile ? (
      <div className={cx("list-item", className)}>
        {dataItems?.length > 0 && dataSlide?.length > 0 ? (
          <>
            <div className={cx("list-banner-items")}>
              <div className={cx("left")}>
                <Swiper
                  className={cx("slide-banner-item")}
                  pagination={true}
                  modules={[Pagination]}
                  spaceBetween={50}
                  slidesPerView={1}
                >
                  {dataSlide?.map((item, i) => (
                    <SwiperSlide key={i} className={cx("slide-item")}>
                      <Link to={item?.link}>
                        <img src={item?.image} alt='no-images'/>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className={cx("list-wrapper", "right")}>
                {dataItems?.map((item, i) =>
                  i < 6 ? (
                    <div key={i} className={cx("col-3")}>
                      <Card
                        title={item[`game_name_${i18nLang}`]}
                        type={item?.game_type_code}
                        code={item?.game_provider_code}
                        subCode={item?.game_code}
                        //image={item.game_picture_en}
                        image={imageHandler(item)}
                        isNew={item?.isNew}
                        isHot={item?.isHot}
                        isProgressive={item?.isProgressive}
                      />
                    </div>
                  ) : null
                )}
              </div>
            </div>
            <div className={cx("list-wrapper")}>
              {dataItems?.map((item, i) =>
                i >= 6 ? (
                  <div key={i} className={cx("col-5")}>
                    <Card
                      title={item[`game_name_${i18nLang}`]}
                      type={item?.game_type_code}
                      code={item?.game_provider_code}
                      subCode={item?.game_code}
                      image={imageHandler(item)}
                      isNew={item?.isNew}
                      isHot={item?.isHot}
                      isProgressive={item?.isProgressive}
                    />
                  </div>
                ) : null
              )}
            </div>
          </>
        ) : dataItems && dataItems.length > 0 ? (
          dataItems?.map((item, i) => (
            <div key={i} className={cx(col ? `col-${col}` : "col-5")}>
              <Card
                title={item[`game_name_${i18nLang}`]}
                type={item?.game_type_code}
                code={item?.game_provider_code}
                subCode={item?.game_code}
                image={imageHandler(item)}
                isNew={item?.isNew}
                isHot={item?.isHot}
                isProgressive={item?.isProgressive}
              />
            </div>
          ))
        ) : dataSlide && dataSlide.length > 0 ? (
          <Swiper
            className={cx("slide-banner-item")}
            spaceBetween={50}
            slidesPerView={1}
          >
            {dataSlide?.map((item, i) => (
              <SwiperSlide key={i} className={cx("slide-item")}>
                <Link to={item?.link}>
                  <img src={item?.image} alt='no-images'/>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>
    ) : renderMobile();
  }


  return(type ==='LC' || type ==='SB' || type ==='ES' || type ==='LT' ? renderCasino()
    : renderGame()
  )
}


export default ListItem;