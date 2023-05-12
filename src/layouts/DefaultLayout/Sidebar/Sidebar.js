import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss"
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import images from '~/constants/images'
import Tippy from '@tippyjs/react'

import 'tippy.js/dist/tippy.css'

const cx = classNames.bind(styles)

function Sidebar() {

  const sidebarLeftRef = useRef()
  const sidebarRightRef = useRef()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 129) {
        sidebarLeftRef.current?.classList.add(cx('sticky'))
        sidebarRightRef.current?.classList.add(cx('sticky'))
      } else {
        sidebarLeftRef.current?.classList.remove(cx('sticky'))
        sidebarRightRef.current?.classList.remove(cx('sticky'))
      }
    })
  }, [])


  return (
    <div className={cx('wrapper')}>
      <div className={cx('sidebar-left')} ref={sidebarLeftRef}>
        <div className={cx('left')} >
          <img src={images.sidebarLeft} alt="sl" />
        </div>
        <div className={cx('left-hover')} >
            <span>
              <Link to="/">
                <i className={cx('left-icon-1')} />
              </Link>
            </span>
          <Tippy content="Android Download" placement='right' delay={[0, 50]}>
          <span>
            <Link to="/">
              <i className={cx('left-icon-2')} />
            </Link>
          </span>
          </Tippy>
          <Tippy content="iOS Download" placement='right' delay={[0, 50]}>
          <span>
            <Link to="/">
              <i className={cx('left-icon-3')} />
            </Link>
          </span>
          </Tippy>
          <Tippy content="BK8 App Download" placement='right' delay={[0, 50]}>
          <span>
            <Link to="/">
              <i className={cx('left-icon-4')} />
            </Link>
          </span>
          </Tippy>
        </div>
      </div>
      <div className={cx('sidebar-right')} ref={sidebarRightRef}>
        <div className={cx('right')}>
          <img src={images.sidebarRight} alt="sr" />
        </div>
        <div className={cx('right-hover')} >
        <span>
            <Link to="/">
              <i className={cx('right-icon-1')} />
            </Link>
          </span>
          <Tippy content="Zalo" placement='left' delay={[0, 50]}>
          <span>
            <Link to="/">
              <i className={cx('right-icon-2')} />
            </Link>
          </span>
          </Tippy>
          <Tippy content="Click here" placement='left' delay={[0, 50]}>
          <span>
            <Link to="/">
              <i className={cx('right-icon-3')} />
            </Link>
          </span>
          </Tippy>
          <span>
            <Link to="/">
              <i className={cx('right-icon-4')} />
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar