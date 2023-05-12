import React from 'react'
import ListItem from '~/components/ListItem/ListItem'
import classNames from 'classnames/bind'
import styles from './SpadeGaming.module.scss'
import { dataSpadeGaming } from '~/constants/mock-fishing/dataFishing'

const cx = classNames.bind(styles)


const SpadeGaming = () => {
  return (
    <div className={cx('spade-gaming')}>
      <ListItem dataItems={dataSpadeGaming} />
    </div>
  )
}

export default SpadeGaming