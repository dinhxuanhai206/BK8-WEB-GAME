import React from 'react'
import ListItem from '~/components/ListItem/ListItem'
import classNames from 'classnames/bind'
import styles from './MiniTed.module.scss'
import { dataMiniTed } from '~/constants/mock-3dgame/data3DGame'

const cx = classNames.bind(styles)


const MiniTed = () => {
  return (
    <div className={cx('mini-ted')}>
      <ListItem dataItems={dataMiniTed} />
    </div>
  )
}

export default MiniTed