import React,{useState} from 'react'
import classNames from 'classnames/bind'
import styles from './SwipperRecommenedMobile.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import ListItem from '~/components/ListItem/ListItem';
import PopupCard from '~/components/Card/PopupCard/PopupCard';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const cx = classNames.bind(styles)

const data = [
    {
        image: require("../../../assets/images/img-slot/list-slots/nextspin/list-slots-roma.jpg"),
        title: "Roma",
        feature: "",
        linkPlay: "#",
        linkDemo: "",
        category: "Nextspin"
    },
    {
        image: require("../../../assets/images/img-slot/list-slots/nextspin/list-slots-candy-bonanza-xmas.jpg"),
        title: "Candy Bonanza Xmas",
        feature: "",
        linkPlay: "#",
        linkDemo: "",
        category: "Nextspin"
    },
    {
        image: require("../../../assets/images/img-slot/list-slots/nextspin/list-slots-golden-fa.jpg"),
        title: "Golden Fa",
        feature: "",
        linkPlay: "#",
        linkDemo: "",
        category: "Nextspin"
    },
    {
        image: require("../../../assets/images/img-slot/list-slots/nextspin/list-slots-golden-west.jpg"),
        title: "Golden West",
        feature: "",
        linkPlay: "#",
        linkDemo: "",
        category: "Nextspin"
    },
    {
        image: require("../../../assets/images/img-slot/list-slots/spadegaming/candy-pop.jpg"),
        title: "Candy Pop",
        feature: "",
        linkPlay: "#",
        linkDemo: "",
        category: "Nextspin"
    },
    {
        image: require("../../../assets/images/img-slot/list-slots/spadegaming/zeus.jpg"),
        title: "Zeus",
        feature: "",
        linkPlay: "#",
        linkDemo: "",
        category: "Nextspin"
    },
]

const SwipperRecommenedMobile = props => {
    const [visiable, setVisiable] = useState(false);
    const [valuePopup, setValuePopup] = useState({});
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className} ${cx('custom-pagination')}"></span>`
        },
      };

    const handleShowPopup = (props) => {
        setVisiable(true)
        setValuePopup(props)
    }

  return (
    <div className={cx('recommended-games', props.className)}>
      <div className="container">
            <h5 className={cx('title')}>Recommended Games</h5>
            <div className={cx('body')}>
                <Swiper
                    className={cx('recommended-swipper')}
                    pagination={pagination}
                    slidesPerView={3}
                    slidesPerGroup={3}
                    modules={[Pagination]}
                    loop={true}
                    loopFillGroupWithBlank={true}
                >
                {
                    data?.map((item, i) => (
                        <SwiperSlide key={i} className={cx('item-swipper')} onClick={() => handleShowPopup(item)}>
                            <div className={cx('card-swipper')}>
                                <img src={item.image} />
                                <p className={cx('name')}>{item.title}</p>
                            </div>
                            <p className={cx('category')}>{item.category}</p>
                        </SwiperSlide>
                    ))
                }
                </Swiper>
            </div>
            
      </div>
      {
        visiable && (
            <PopupCard
              title={valuePopup?.title}
              image={valuePopup?.image}
              onClick={setVisiable}
              linkPlay={valuePopup?.linkPlay}
              linkDemo={valuePopup?.linkDemo}
            />
        )
      }
    </div>
  )
}

export default SwipperRecommenedMobile