import React from 'react'
import classNames from 'classnames/bind'
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import SubNavbar from '../SubNavBar/SubNavbar'
import { useState } from 'react'
import { data } from '~/constants/mockNavbar/dataNavbar'
import images from '~/constants/images'
import i18n from 'i18next'
import { useTranslation, Trans } from 'react-i18next'

const cx = classNames.bind(styles)

function Navbar() {
  const [subMenuItems, setSubMenuItems] = useState(undefined)
  const [showSubMenu, setShowSubMenu] = useState(false)
  const { t } = useTranslation()

  const [backGroundImage, setBackGroundImage] = useState('')

  const RenderItem = (data) => {
    if (!!data.label) {
      return (
        <>
          {data.new && <img src={images.navNew} alt="new" className={cx('item-new')} />}
          <span className={cx('item__label')}>{t(data.label)}</span>
          {data.win && <img src={images.navWin} alt="win" className={cx('item-win')} />}
        </>
      )
    } else {
      const styles = {
        backgroundImage: `url(${data.img})`
      }
      return <i className={cx('item__image')} style={styles}
        onMouseEnter={(e) => OnHoverItemImage(e, data)}
        onMouseLeave={(e) => OnLeaveItemImage(e, data)}
      />
    }
  }

  const OnHoverItemImage = (e, data) => {
    e.target.style.backgroundImage = `url(${data.imgHover})`
  }
  const OnLeaveItemImage = (e, data) => {
    e.target.style.backgroundImage = `url(${data.img})`
  }

  const OnHoverHandler = (id) => {
    const subMenuItems = data.find((data) => { return data.id === id })
    const isFocusSubMenu = data.some((item) => item.id === subMenuItems.id)
    setShowSubMenu(isFocusSubMenu)
    setSubMenuItems(subMenuItems)
    subMenuItems?.subData?.filter((item) => {
      if (item.label === '') {
        setBackGroundImage(item.img)
      } else {
        setBackGroundImage('')
      }
      return ''
    })
  }

  const OnMouseLeaveHandler = () => {
    setShowSubMenu(false)
  }

  return (
    <nav className={cx('wrapper')} onMouseLeave={() => { OnMouseLeaveHandler() }}>
      <div className='container'>
        <ul className={cx('nav-menu')}>
          {data.map((data) => (
            <li className={cx('nav-menu__item')}
              key={data.id}
              onMouseEnter={() => { OnHoverHandler(data.id) }}
            >
              <Link to={data.url} className={cx('item')} key={data.id}>
                {RenderItem(data)}
              </Link>
            </li>
          ))}
          <li className={cx('nav-menu__item')}
            onMouseEnter={() => { setShowSubMenu(false) }}
          >
            <Link to='/leaderboard' className={cx('item')}>
              <span className={cx('item__label')}>Bảng Xếp Hạng</span>
              <img src={images.navWin} alt="win" className={cx('item-win')} />
            </Link>
          </li>
        </ul>
      </div>
      <SubNavbar showSubMenu={showSubMenu} setShowSubMenu={setShowSubMenu} backGroundImage={backGroundImage} subMenuItems={subMenuItems?.subData}/>
    </nav>
  )
}

export default Navbar