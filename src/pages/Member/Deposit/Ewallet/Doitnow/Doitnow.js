import React, { useState }  from 'react'
import classNames from 'classnames/bind'
import styles from './Doitnow.module.scss'
import images from '~/constants/imagesMember';

const cx = classNames.bind(styles);
const number = [250, 500, 1600, 2700, 5500];

function Doitnow() {
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
      <img src={images.DNQR} alt="" className={cx("img")}/>
      </div> 
      <div className={cx("doitnow-block")}>
        <p className={cx("doitnow-title")}>Deposit Amount*</p>
        <form className={cx("form")}>
          <input
            type="number"
            min="50"
            max="1000"
            value={value}
            placeholder="Min/Max Limit 50.00/10,000.00" 
            onChange={handleChange}
            className={cx("input")}
          />
          {value < 50 || value > 10000 ? <p className={cx("min")}>Min/Max Limit: 50 / 10000</p> : null}
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
        </form>
      </div>
    </div>
  )
}

export default Doitnow