import React from 'react'
import ListItem from '~/components/ListItem/ListItem'
import classNames from 'classnames/bind'
import styles from './GamePlay.module.scss'
import { dataGamePlay } from '~/constants/mock-3dgame/data3DGame'

const cx = classNames.bind(styles)


const GamePlay = () => {
  return (
    <div className={cx('game-play')}>
      <ListItem dataItems={dataGamePlay} />
    </div>
  )
}

export default GamePlay