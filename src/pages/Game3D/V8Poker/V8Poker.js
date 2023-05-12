import React from 'react'
import ListItem from '~/components/ListItem/ListItem'
import classNames from 'classnames/bind'
import styles from './V8Poker.module.scss'
import { dataV8Poker } from '~/constants/mock-3dgame/data3DGame'

const cx = classNames.bind(styles)


const V8Poker = () => {
  return (
    <div className={cx('v8-poker')}>
      <ListItem dataItems={dataV8Poker} />
    </div>
  )
}

export default V8Poker