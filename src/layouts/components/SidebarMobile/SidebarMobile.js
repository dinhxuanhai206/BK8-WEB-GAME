import React from 'react'
import classNames from 'classnames/bind'
import styles from './SidebarMobile.module.scss'
import { useState, useContext } from 'react'
import images from '~/constants/images'
import { Store } from '~/Store'
import { data } from '~/constants/mockSidebar/dataSidebarMobile'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const cx = classNames.bind(styles)



function SidebarMobile({ isShow, setIsShow }) {
  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { userInfo } = state
  const navigate = useNavigate()

  const RenderItem = (data) => {
    return (
      <>
        <i className={cx('item__image')} style={{ backgroundImage: `url(${data.img})` }} />
        {data.new && <img src={images.navNew} alt="new" className={cx('item-new')} />}
        <span className={cx('item__label')}>{data.label}</span>
        {data.win && <img src={images.navWin} alt="win" className={cx('item-win')} />}
      </>
    )
  }

  const logoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' })
    localStorage.removeItem('userInfo')
    //window.location.href = '/'
    navigate('/')
    setIsShow(false)
  }

  const ButtonBackHandler = () => {
    setIsShow(false)
  }
  return (
    <div className={cx('wrapper')}>
      <nav className={cx('left', isShow && 'active')} >
        {userInfo?.token ?
          <div className={cx('info')}>
            <div className={cx('btn-back')} onClick={ButtonBackHandler}>
              <i className="fas fa-arrow-left"></i>
            </div>
            <div className={cx('profile')} >
              <div className={cx('profile__picture')} >
                <img src="https://www.bk8myr.com/public/new_bk8/content/images/icon/unknown-user.png" alt="profile" className={cx('avt-img')} />
                <img src={images.userNormal} alt="rank" className={cx('desc-img')} />
              </div>
              <div className={cx('profile__name')} >
                {userInfo.username}
              </div>
              <div className={cx('profile__desc')} >
                NORMAL
              </div>
            </div>
          </div>
          : <div className={cx('header')}>
            <div className={cx('logo')} >
              <img src="https://www.bk8myr.com/public/html/cms/l20210611033555602.png" alt="https://www.bk8myr.com/public/html/cms/l20210611033555602.png" className={cx('logo-image')} />
            </div>
            <div className={cx('btn-back')} onClick={ButtonBackHandler}>
              <i className="fas fa-arrow-left"></i>
            </div>
          </div>}
        <ul className={cx('nav-menu')}>
          {data.map((item) => (
            <li className={cx('nav-menu__item')} key={item.id}>
              <Link to={item.url} className={cx('item')} onClick={() => setIsShow(false)}>
                {RenderItem(item)}
              </Link>
            </li>
          ))}
          {userInfo?.token && <li className={cx('nav-menu__item')} key={data?.length + 1} onClick={logoutHandler}>
              <i className={cx('item__image')} style={{ backgroundImage: `url(${images.smbLogout})` }} />
              <span className={cx('item__label')}>LOGOUT</span>
          </li>}
        </ul>
      </nav>
      <div className={cx('overlay', isShow && 'active')} onClick={() => setIsShow(false)}></div>
    </div>
  )
}

export default SidebarMobile