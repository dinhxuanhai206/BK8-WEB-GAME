import React from 'react'
import ListItem from '~/components/ListItem/ListItem'
import classNames from 'classnames/bind'
import styles from './Jili.module.scss'
import { dataJiLi } from '~/constants/mock-fishing/dataFishing'

const cx = classNames.bind(styles)


const Jili = () => {
  return (
    <div className={cx('spade-gaming')}>
      <ListItem dataItems={dataJiLi} />
    </div>
  )
}

export default Jili