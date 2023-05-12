import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Infor.module.scss";
import { dataInfor } from "~/constants/mockNavHomeMobile/dataInfor";
import Faq from "./Faq/Faq";
import Rules from "./Rules/Rules";
import Terms from "./Terms/Terms";

const cx = classNames.bind(styles);
const Infor = () => {
  const [active, setActive] = useState(2);
  const handleChangeTab = (index) => {
    setActive(index);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>Information Centre</div>
      <div className={cx("tabLogo")}>
        {dataInfor?.map((item, index) => (
          <div
            key={index}
            className={cx("items", active === index ? "active" : "")}
            onClick={() => handleChangeTab(index)}
          >
            <button className={cx("logo-img")}>
              <i style={active === index ? item.imgActive : item.img} />
              <p>{item.name}</p>
            </button>
          </div>
        ))}
      </div>
      <div className={cx("inner")}>
        {active === 0 ? (
          <Faq />
        ) : active === 1 ? (
          <Rules />
        ) : active === 2 ? (
          <Terms />
        ) : null}
      </div>
    </div>
  );
};

export default Infor;
