import { useRef, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './CustomModal.module.scss'

const cx = classNames.bind(styles)

function CustomModal({showModal, setShowModal ,title, button}) {
    const modalRef = useRef()

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    return (showModal &&
        <div className={cx('wrapper')} ref={modalRef} onClick={closeModal}>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    {title}
                </div>
                <div className={cx('button-close')} onClick={()=>setShowModal(false)}>
                    {button}
                </div>
            </div>
        </div>
    )
}

export default CustomModal