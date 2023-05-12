import { useEffect, useReducer, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import TabPageLogo from '~/components/TabPageLogo/TabPageLogo'
import classNames from 'classnames/bind'
import styles from './FishingMobile.module.scss'
import BannerSlideShow from '~/components/BannerSlideShow/BannerSlideShow'
import { BANNER_FISHING } from '../../constants/imageFishing'
import { dataTabPageFishing } from '~/constants/mock-fishing/dataTabPageLogo'
import * as gameService from '~/services/gameService'
import ListItem from '~/components/ListItem/ListItem'
import LoadingBox from '~/components/LoadingBox/LoadingBox'


const cx = classNames.bind(styles)

const bannerFishing = [
  {
    image: BANNER_FISHING.ExcellentHunting,
    link: '/promos'
  },
  {
    image: BANNER_FISHING.GoldenFortuneBags,
    link: '/promos'
  },
  {
    image: BANNER_FISHING.LegendFishing,
    link: '/promos'
  },
]

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

const FishingMobile = () => {
  const { state } = useLocation()
  const params = useParams()
  const [{ subData, loading }, dispatch] = useReducer(reducer, {
    subData: [],
    loading: true,
  });

  useEffect(() => {
    const fetchSubGameData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      const result = await gameService.getSubGameList(params.provider_code, 'FH')
      if (result?.status === 0) {
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      }
    }
    fetchSubGameData()
  }, [params?.provider_code]);

  const handleValueSearch = () => {};

  return (
    <div className={cx('fishing-wrapper')}>
      <div className={cx('fishing-body')}>
        <div className={cx('container')}>
          <div className={cx('fishing-content')}>
            {loading ? <LoadingBox/>
            : 
            <ListItem dataItems={subData} type="FH" />
            }    
          </div>
        </div>
      </div>
    </div>
  )
}

export default FishingMobile