import React from 'react'
import classNames from 'classnames/bind'
import styles from './Search.module.scss'
import { Link } from 'react-router-dom'
import SubNavbar from '../../components/SubNavBar/SubNavbar'
import { useState, useContext } from 'react'
import { data } from '~/constants/mockNavbar/dataNavbar'
import images from '~/constants/images'
import { Store } from '~/Store'
const cx = classNames.bind(styles)



function Search() {
  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { sidebarIsOpen } = state
  const RenderItem = (data) => {
    if (!!data.label) {
      return (
        <>
          {data.new && <img src={images.navNew} alt="new" className={cx('item-new')} />}
          <span className={cx('item__label')}>{data.label}</span>
          {data.win && <img src={images.navWin} alt="win" className={cx('item-win')} />}
        </>
      )
    } else {
      const styles = {
        backgroundImage: `url(${data.img})`
      }
      return <i className={cx('item__image')} style={styles}
      />
    }
  }
  return (
    <nav className={cx('wrapper')} style={{ left: sidebarIsOpen ? '0' : '0' }}>
      <div className={cx('left')}>
          <div className={cx('header')}>
            <div className={cx('logo')} >
              <img src="https://www.bk8myr.com/public/html/cms/l20210611033555602.png" alt="https://www.bk8myr.com/public/html/cms/l20210611033555602.png" className={cx('logo-image')} />
            </div>
            <div className={cx('btn-back')}>
              <i className="fas fa-arrow-left"></i>
            </div>
          </div>
          {/* <ul className={cx('nav-menu')}>
            {data.map((data) => (
              <li className={cx('nav-menu__item')} key={data.id}>
                <Link to={data.url} className={cx('item')} key={data.id}>
                  {RenderItem(data)}
                </Link>
              </li>
            ))}
          </ul> */}
        </div>
      <div className={cx('right')}>

      </div>
    </nav>
  )
}

export default Search