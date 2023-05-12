import { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './LoadingBox.module.scss'
import { ImSpinner2 } from 'react-icons/im'

const cx = classNames.bind(styles)

function LoadingBox() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('loading')}>
                <ImSpinner2 />
            </div>
        </div>
    )
}

export default LoadingBox;