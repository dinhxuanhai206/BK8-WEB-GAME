import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ProviderPasswordMobile.module.scss";
import Select from "react-select";
import images from "~/constants/imagePromosMobile";
const cx = classNames.bind(styles);
const optionsProvider = [
  { value: "select", label: "-- Select A Provider--" },
  { value: "allbet", label: "Allbet" },
  { value: "dream gaming", label: "Dream Gaming" },
  { value: "game play", label: "Game Play" },
  { value: "minited", label: "MiniTed" },
  { value: "wmcasino", label: "WM Casino" },
];

function ProviderPasswordMobile() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className={cx("wrapper")}>
      <div>
        <form className={cx("form")}>
          <div className={cx("Bank-blog")}>
            <p className={cx("bank-title")}>Provider*</p>
            <div className={cx("select")}>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={optionsProvider}
              />
            </div>
          </div>
          <div className={cx("name-blog")}>
            <p className={cx("name-title")}>Name*</p>
            <div className={cx("name-input")}>
              <input
                disabled
                type="text"
                className={cx("input")}
              />
            <div className={cx('img-copy')}>
              <img src={images.copy} alt="" className={cx("img")}/>
            </div>
            </div>
          </div>
          <div className={cx("account-blog")}>
            <p className={cx("account-title")}>New Password*</p>
            <input
              type="text"
              placeholder="New Password"
              className={cx("input")}
            />
          </div>
          <div className={cx("account-no")}>
            <p className={cx("accountno-title")}>Confirm Password*</p>
            <input
              type="text"
              placeholder="Confirm Password"
              className={cx("input")}
            />
          </div>
          <div className={cx("save")}>
            <button className={cx("btn-save")}>SAVE</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProviderPasswordMobile;
