import React from 'react'
import classNames from 'classnames/bind'
import styles from './MyBonus.module.scss'

const cx = classNames.bind(styles)

const MyBonus = () => {
    return (
        <div className={cx('wrapper')}>
            No transaction yet
        </div>
    )
}
export default MyBonus;