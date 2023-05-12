import React, {useState} from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import styles from './NavFilter.module.scss'
import {SearchIcon} from '../../constants/icons'
import { useMediaQuery } from 'react-responsive'

const cx = classNames.bind(styles);

NavFilter.propTypes ={
  data: PropTypes.array,
  onClick: PropTypes.func,
}

function NavFilter(props) {
  const {data, onClick} = props
  const [active, setActive] = useState(0)

  const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

  const handleOnclick = (index, name) => {
    setActive(index);
    onClick(name);
  }

  return (
    <div className={cx('nav-filter', props?.className)}>
      <ul className={cx('tab-page')}>
          {
            data && data.length > 0
            ?
              data?.map((item, index) => (
                <li 
                  key={index} 
                  className={cx('nav-item', index === active ? 'active' : '')} 
                  onClick={() => handleOnclick(index, item)}
                >
                    {
                      item
                    }
                </li>
              ))
            : null
          }
      </ul>
      {
        !isMobile 
        ?
          <div className={cx('search-box')}>
              <SearchIcon />
              <input className={cx('input-search')} type="text" placeholder='Search'/>
          </div>
        : null
      }
      
    </div>
  )
}

export default NavFilter