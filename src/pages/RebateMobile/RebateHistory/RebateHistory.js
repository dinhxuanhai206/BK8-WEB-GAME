import React from 'react'
import classNames from 'classnames/bind'
import styles from './RebateHistory.module.scss'

const cx = classNames.bind(styles)

const RebateHistory = () => {
    return (
        <div className={cx('wrapper')}>
            No transaction yet
        </div>
    )
}
export default RebateHistory;