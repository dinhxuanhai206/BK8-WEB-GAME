import React,{useState} from "react";
import classNames from "classnames/bind";
import styles from "./MobileCard.module.scss";
import Select from "react-select";

const cx = classNames.bind(styles);

const optionsMobile = [{ value: "mtcvn", label: "MTCVN" }];

function MobileCard() {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className={cx("wrapper")}>
      <form>
        <p className={cx("title")}>
          Method <span>*</span>
        </p>
        <div className={cx("select")}>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={optionsMobile}
          />
        </div>
        <ul className={cx("ul")}>
          <li className={cx("li")}>Important Reminder:</li>
          <li className={cx("li", "li1")}>
            Mobile card deposit option, the actual amount deposit will be equal
            to the card value minus the % depend on card type below.
          </li>
          <li className={cx("li")}>
            Viettel - 18%, card value from 500,000 VND or more, Viettel network
            discount: 20%
          </li>
          <li className={cx("li")}>Mobifone - 25%</li>
          <li className={cx("li")}>Vinaphone - 23%</li>
          <li className={cx("li")}>Zing - 20%</li>
          <li className={cx("li", "li1")}>Vietnamobile - 24%</li>
        </ul>

        <div className={cx("button-deposit")}>
          <button className={cx("btn-dep")}>DEPOSIT</button>
        </div>
      </form>
    </div>
  );
}

export default MobileCard;
