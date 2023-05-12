import React from 'react'
import classNames from 'classnames/bind'
import styles from './Address.module.scss'


const cx = classNames.bind(styles);


function Address() {
  

  return (
    <div className={cx('wrapper')}>
       <div className={cx("fiel")}>
        <div className={cx("coin")}>Coin</div>
        <div className={cx("network")}>Network</div>
        <div className={cx("address")}>Address</div>
      </div>  
      <div>
        <form className={cx("form")}>
          <div className={cx("Cryptocurrency-blog")}>
            <p className={cx("Cryptocurrency-title")}>Cryptocurrency*</p>
            <select className={cx("select")}>
              <option>--- Select Cryptocurrency ---</option>
              <option>TRX</option>
              <option>USDT</option>
              <option>ETH</option>
              <option>BTC</option>
            
            </select>
          </div>
          <div className={cx("network-blog")}>
            <p className={cx("network-title")}>Network*</p>
            <select className={cx("select")}>
              <option>--- Select Network ---</option>
              <option>ERC20</option>
              <option>TRC20</option>
            </select>
          </div>
          <div className={cx("address")}>
            <p className={cx("address-title")}>Address*</p>
            <input type="text" className={cx("input")}/>
          </div>
          <div className={cx("save")}>
            <p className={cx("save-title")}></p>
           <button className={cx("btn-save")}>SAVE</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Address