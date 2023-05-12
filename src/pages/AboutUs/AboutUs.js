import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./AboutUs.module.scss";
import Mission from "./Mission/Mission";
import Entertain from "./Entertain/Entertain";
import Story from "./Story/Story";

const cx = classNames.bind(styles);

const tabPageSponsor = [
  {
    key: "mission",
    display: "OUR MISSION",
  },
  {
    key: "entertain",
    display: "BUILD TO ENTERTAIN",
  },
  {
    key: "story",
    display: "THE BK8 STORY",
  },
];

const AboutUs = () => {
  const [active, setActive] = useState(0);

  const handleChangeTab = (index) => {
    setActive(index);
  };
  const handleChangeLink = () => {
    if (active<2){
      setActive(active + 1)
    }else {
      setActive(0)
    }

    
  };

  return (
    <div className={cx("Aboutus-wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("tab-aboutus")}>
          {tabPageSponsor.map((item, index) => (
            <div
              className={cx(
                "tab-aboutus__items",
                index === active ? "active" : ""
              )}
              key={index}
            >
              <button
                onClick={() => handleChangeTab(index)}
                className={cx("tab-aboutus__name")}
              >
                {item.display}
              </button>
            </div>
          ))}
        </div>
        <div className={cx("sponsrors-body")}>
          {active === 0 ? (
            <Mission />
          ) : active === 1 ? (
            <Entertain />
          ) : active === 2 ? (
            <Story />
          ) : null}
        </div>
        <div>
          <div
            onClick={handleChangeLink}
            className={cx("link")}
          >{`Read Next >`}{active === 0 ? "BUILT TO ENTERTAIN": active === 1 ? "THE BK8 STORY": "OUR MISSION"}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
