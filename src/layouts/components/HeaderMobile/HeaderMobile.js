import { useState, useContext, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './HeaderMobile.module.scss'
import { Link, matchRoutes, useLocation, useNavigate } from 'react-router-dom'
import 'tippy.js/dist/tippy.css'

const cx = classNames.bind(styles)

function HeaderMobile({ title, isShow, setIsShow }) {
  const navigate = useNavigate()
  const [textHeader, setTextHeader] = useState(title !== null ? title : '')
  const { state ,pathname } = useLocation()

  useEffect(() => {
    if (state?.label){
      setTextHeader(state.label)
    }
  }, [state?.label])
  

  const OnClickHandler = () => {
    setIsShow(true)
  }
  const OnBackHandler = () => {
    navigate(-1)
  }

  return (title || pathname !== '/' ?
    <header className={cx('wrapper')}>
      <div className={cx('inner', 'container')}>
        <div className={cx('button-back-mobile')} onClick={OnBackHandler}>
          <i className="fas fa-arrow-left"></i>
        </div>
        {textHeader ?
          <div className={cx('title-wrapper')} >
            <div className={cx('title')}>{textHeader}</div>
          </div>
          :
          <div className={cx('logo')} >
            <Link to="/">
              <img src="https://www.bk8c.com/public/html/cms/l20210611033555602.png" alt="https://www.bk8myr.com/public/html/cms/l20210611033555602.png" className={cx('logo-image')} />
            </Link>
          </div>
        }
      </div>
    </header>
    :
    <header className={cx('wrapper')}>
      <div className={cx('inner', 'container')}>
        <div className={cx('button-menu-mobile')} onClick={OnClickHandler}>
          <i className="fas fa-bars"></i>
        </div>
        <div className={cx('logo')} >
          <Link to="/">
            <img src="https://www.bk8c.com/public/html/cms/l20210611033555602.png" alt="https://www.bk8myr.com/public/html/cms/l20210611033555602.png" className={cx('logo-image')} />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default HeaderMobile