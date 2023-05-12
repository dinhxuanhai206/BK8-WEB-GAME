import React, { useState }  from 'react'
import classNames from 'classnames/bind'
import styles from './Fpay.module.scss'
import images from '~/constants/imagesMember';


const cx = classNames.bind(styles);
const number = [250, 500, 1600, 2700, 5500];

function Fpay() {
  const [value, setValue] = useState(0);
  const [active, setActive] = useState("");
  
  const handleChange = (event) => {
     setValue(event.target.value);
    
  };
  const handleChangeButton = (event) => {
    setActive(event.target.id);
    setValue(event.target.value)

  };
  

  return (
    <div className={cx('wrapper')}>
     <div className={cx("image")}>
      <img src={images.FPQR} alt="" className={cx("img")}/>
      </div> 
      <div className={cx("fpay-block")}>
        <p className={cx("fpay-title")}>Deposit Amount*</p>
        <div>
          <input
            type="number"
            min="30"
            max="500"
            value={value}
            placeholder="Min/Max Limit 30.00/500.00" 
            onChange={handleChange}
            className={cx("input")}
          />
          <p className={cx("min")}>Min/Max Limit: 30 / 500</p>
          <div className={cx("btn-block")}>
            {number.map((item, i) => (
              <div
                className={cx("btn-number")}
                key={i}
                onClick={() => {
                  setValue(item);
                }}
              >
                {item}
              </div>
            ))}
          </div>
           <button className={cx("btn-save")}>SUBMIT</button>
        </div>
      </div>
    </div>
  )
}

export default Fpay