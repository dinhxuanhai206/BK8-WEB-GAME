import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./LeaderBoardMobile.module.scss";
import images from "~/constants/imagePromosMobile";
import About from "./About/About";
import CheckRankMobile from "./CheckRankMobile/CheckRankMobile";
import FrizesMobile from "./FrizesMobile/FrizesMobile";

const cx = classNames.bind(styles);

const tabPageSponsor = [
  {
    key: "about",
    display: "CHÚNG TÔI",
  },
  {
    key: "checkrank",
    display: "THỨ HẠNG",
  },
  {
    key: "frizes",
    display: "GIẢI THƯỞNG",
  },
];

const LeaderBoardMobile = () => {
  const [active, setActive] = useState(0);
  const [renderTab, setRenderTab] = useState("about");

  const handleChangeTab = (index, key) => {
    setActive(index);
    setRenderTab(key);
  };

  return (
    <div className={cx("sponsors-wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("img-item")}>
            < img src={images.bannerLeader} alt="" className={cx("img")}/>
        </div>
        <div className={cx("tab-pageSponsors")}>
          {tabPageSponsor.map((item, index) => (
            <div
              className={cx(
                "tab-pageSponsors__items",
                index === active ? "active" : ""
              )}
              key={index}
            >
              <button
                onClick={() => handleChangeTab(index, item.key)}
                className={cx("tab-pageSponsors__name")}
              >
                {item.display}
              </button>
            </div>
          ))}
        </div>
        <div className={cx("sponsrors-body")}>
          {renderTab === "about" ? (
            <About />
          ) : renderTab === "checkrank" ? (
            <CheckRankMobile />
          ) : renderTab === "frizes" ? (
            <FrizesMobile />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardMobile;
