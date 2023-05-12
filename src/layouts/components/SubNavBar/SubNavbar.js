import classNames from 'classnames/bind'
import styles from './SubNavbar.module.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)

function SubNavbar({ showSubMenu,setShowSubMenu, backGroundImage, subMenuItems }) {
    const [isHover, setIsHover] = useState(false)
    const [itemHover, setItemHover] = useState(null)
    const navigate = useNavigate()
    if (!subMenuItems?.length) {
        return null
    }

    const RenderSubItem = (data) => {
        if (!!backGroundImage) return null
        return (
            <>
                <div className={cx('item__image')} style={{ backgroundImage: `url(${data.img})` }}
                    onMouseEnter={(e) => onHoverItemImage(e, data)}
                    onMouseLeave={(e) => onLeaveItemImage(e, data)}
                ></div>
                {!!data.label && (
                    <div className={cx('item__label-wrapper')}>
                        <span className={cx('item__label')}>{data.label}</span>
                        {/* {data.hot && <span className={cx('item-hot')} />}
                        {data.new && <span className={cx('item-new')} />} */}
                    </div>
                )}
            </>
        )
    }

    const onHoverItemImage = (e, data) => {
        if (!!data?.imgHover) {
            e.target.style.backgroundImage = `url(${data?.imgHover})`
        }
    }
    const onLeaveItemImage = (e, data) => {
        e.target.style.backgroundImage = `url(${data.img})`
    }
    const onClickHandler = (data) => {
        setShowSubMenu(false)
        navigate(data.url, {state: {code: data.code}})
    }

    return (
        <div className={cx('sub-navbar-wrapper')} style={{ display: showSubMenu ? 'flex' : 'none' }}>
            <div className={cx('sub-navbar')} style={{
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: !!backGroundImage ? `url(${backGroundImage})` : 'none',
            }}>
                {subMenuItems?.map((data) => {
                    if (data.type !== undefined) {
                        return (
                            <div className={cx('sub-navbar__item')}
                                onClick={() => onClickHandler(data)}
                                key={data.id}
                                onMouseEnter={() => { setIsHover(true); setItemHover(data.id) }}
                                onMouseLeave={() => { setIsHover(false); setItemHover(null) }}
                            >
                                <div className={cx('item')} style={!isHover ? { opacity: 1 } : isHover && data.id === itemHover ? { opacity: 1 } : { opacity: 0.5 }}>
                                    {RenderSubItem(data)}
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <Link to={data.url} className={cx('sub-navbar__item')}
                                key={data.id}
                                onMouseEnter={() => { setIsHover(true); setItemHover(data.id) }}
                                onMouseLeave={() => { setIsHover(false); setItemHover(null) }}
                            >
                                <div className={cx('item')} style={!isHover ? { opacity: 1 } : isHover && data.id === itemHover ? { opacity: 1 } : { opacity: 0.5 }}>
                                    {RenderSubItem(data)}
                                </div>
                            </Link>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default SubNavbar