import React from 'react'
import classNames from 'classnames/bind'
import styles from './GamePass.module.scss'


const cx = classNames.bind(styles);


function GamePass() {
  

  return (
    <div className={cx('wrapper')}>
      <div>
        <form className={cx("form")}>
          <div className={cx("Cryptocurrency-blog")}>
            <p className={cx("Cryptocurrency-title")}>Provider*</p>
            <select className={cx("select")}>
              <option>--- Please Select ---</option>
              <option>918Kiss</option>
              <option>Allbet</option>
              <option>Dream Gaming</option>
              <option>Game Play</option>
            </select>
          </div>
          <div className={cx("network-blog")}>
            <p className={cx("network-title")}>Name*</p>
            <input type="text" className={cx("input")}/>
          </div>
          <div className={cx("address")}>
            <p className={cx("address-title")}>New Password*</p>
            <input type="text" placeholder="New Password" className={cx("input")}/>
          </div>
          <div className={cx("address")}>
            <p className={cx("address-title")}>Confirm Password*</p>
            <input type="text" placeholder="Confirm Password" className={cx("input")}/>
          </div>
          <div className={cx("save")}>
            <p className={cx("save-title")}></p>
           <button className={cx("btn-save")}>SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default GamePass