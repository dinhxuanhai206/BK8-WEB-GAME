import React from 'react'
import ListItem from '~/components/ListItem/ListItem'
import classNames from 'classnames/bind'
import styles from './MtTech.module.scss'
import { dataMtTech } from '~/constants/mock-fishing/dataFishing'

const cx = classNames.bind(styles)


const MtTech = () => {
  return (
    <div className={cx('spade-gaming')}>
      <ListItem dataItems={dataMtTech} />
    </div>
  )
}

export default MtTech