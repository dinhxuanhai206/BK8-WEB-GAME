import { useState } from "react"
import classNames from "classnames/bind"
import styles from "./MenuWallet.module.scss"
import Tippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import images from "~/constants/images"
import 'tippy.js/dist/tippy.css'

const cx = classNames.bind(styles)

const defaultFn = () => { }

function MenuWallet({ children, items = [], onChange = defaultFn, hideOnClick = false }) {
    const [focusItem, setFocusItem] = useState(-1)
    const [childrenItems, setChildrenItems] = useState([])

    const OnClickHandler = (item, key) => {
        if (focusItem === -1 || focusItem !== key) {
            setFocusItem(key)
            setChildrenItems(item.children)
        } else {
            setFocusItem(-1)
            setChildrenItems([])
        }
    }

    return (
        <Tippy
            interactive={true}
            hideOnClick={hideOnClick}
            delay={[0, 700]}
            placement='bottom'
            render={(attrs) => (
                <div className={cx('menu-wallet-wrapper')} tabIndex='-1' {...attrs}>
                    <div id={cx("tooltip")} className={cx('wallet-tooltip')} role="tooltip">
                        <div id={cx("arrow")} className={cx('wallet-arrow')} data-popper-arrow></div>
                    </div>
                    <PopperWrapper className={cx('menu-wallet-items')}>
                        {items?.map((item, index) => (
                            <div className={cx('menu-wallet-item-wrapper')} key={index}>
                                <div className={cx('menu-wallet-item')} key={index}>
                                    <span className={cx('wallet-title')}>{item.title}</span>
                                    <span className={cx('wallet-value')}>{item.value.toFixed(2)}</span>
                                    <span className={cx('wallet-button')} onClick={() => OnClickHandler(item, index)} style={{ background: focusItem === index && `url(${images.iconCollapse}) no-repeat`, backgroundSize: focusItem === index && '100% 100%' }}></span>
                                </div>
                                {focusItem !== -1 && focusItem === index &&
                                    childrenItems?.map((childItem, index2) => (
                                        <div className={cx('menu-wallet-child-item')} key={index2}>
                                            <span className={cx('wallet-child-title')}>{childItem.title}</span>
                                            <span className={cx('wallet-child-value')}>{childItem.value.toFixed(2)}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                        }
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

export default MenuWallet