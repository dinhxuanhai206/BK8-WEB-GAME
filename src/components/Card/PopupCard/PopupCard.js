import React, {useContext} from 'react'
import classNames from 'classnames/bind'
import PropType from 'prop-types'
import styles from './PopupCard.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { Store } from '~/Store'
import * as gameService from '~/services/gameService'

const cx = classNames.bind(styles)

function PopupCard(props) {
  const params = useParams()
  const navigate = useNavigate()
  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { userInfo } = state

  const handleClick = () => {
    props.onClick(false);
  }

  const onClickLoginGameHandler = async (subCode) => {
    if (!userInfo) {
      navigate('/login?redirect=/mslots/'+ params.provider_code)
    } else {
      const result = await gameService.loginGame(userInfo.username, params.provider_code, props.type, subCode)
      if (result?.status === 0) {
        window.open(result.url, '_blank', 'noopener noreferrer')
      }
    }
  }

  return (
    <div style={props.style} className={cx(props.className, 'popup-card-mobile')}>
        <div className={cx('game-popup')}>
          <button className={cx('close-popup')} onClick={handleClick}>&Chi;</button>
          <div className={cx('game-img')}>
            <img src={props?.image} alt={props.linkPlay} />
          </div>
          <div className={cx('game-text')}>
            {props?.title}
          </div>
          {props.linkPlay || props.linkDemo ?
              <div className={cx('game-action',  props.linkPlay && props.linkDemo ? '' : 'one-btn')}>
                {props.linkDemo ? (
                    <a href={props.linkDemo} className={cx("btn-demo")}>
                      Demo
                    </a>
                ) : null}
                {props.linkPlay ? (
                    <button onClick={() => onClickLoginGameHandler(props.linkPlay)} className={cx("btn-play")}>
                      Play
                    </button>
                ) : null}
              </div>
            : null          }
        </div>
    </div>
  )
}

export default PopupCard