import { useRef, useCallback, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './LanguageModal.module.scss'
import images from '~/constants/images'
import i18n from 'i18next'
import { useContext } from 'react'
import { Store } from '~/Store'

const cx = classNames.bind(styles)

function LanguageModal({ showModal, setShowModal }) {
    const modalRef = useRef()
    const { state, dispatch: ctxDispatch } = useContext(Store)

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    const ChangeLanguageHandler = (langCode) => {
        i18n.changeLanguage(langCode)
        ctxDispatch({ type: 'CHANGE_I18NEXT_LANG', payload: langCode })
        setShowModal(false)
    }

    return (showModal &&
        <div className={cx('wrapper')} ref={modalRef} onClick={closeModal}>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <div className={cx('title-1')}>
                        Region and Language
                    </div>
                    <div className={cx('title-2')}>
                        <img src={i18n.language === 'en' ? images.malaysia : images.malaysia} alt="btn-language" />
                        {i18n.language === 'en' ? ' English' : ' Malaysia'}
                    </div>
                </div>
                <div className={cx('content')}>
                    <span className={cx('content-label')}>Malaysia</span>
                    <div className={cx('content-inner')}>
                        <img src={images.malaysia} alt="btn-language-2" />
                        <div className={cx('malaysia-en', i18n.language === 'en' && 'active')} onClick={() => ChangeLanguageHandler('en')}>
                            English
                        </div>
                        <div className={cx('malaysia-ms', i18n.language === 'chs' && 'active')} onClick={() => ChangeLanguageHandler('chs')}>
                            简体中文
                        </div>
                    </div>
                </div>
                <div className={cx('button-close')}>
                </div>
            </div>
        </div>
    )
}

export default LanguageModal