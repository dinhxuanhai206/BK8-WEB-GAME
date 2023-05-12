import React from 'react'
import ListItem from '~/components/ListItem/ListItem'
import classNames from 'classnames/bind'
import styles from './KingMaker.module.scss'
import { dataKingMaker } from '~/constants/mock-3dgame/data3DGame'

const cx = classNames.bind(styles)


const KingMaker = () => {
  return (
    <div className={cx('kingmaker')}>
      <ListItem dataItems={dataKingMaker} />
    </div>
  )
}

export default KingMaker