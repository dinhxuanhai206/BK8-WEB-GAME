import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Sponsors.module.scss";
import Event from "./Events/Event";
import Sponsorship from "./Sponsorship/Sponsorship";
import Video from "./Video/Video";
import { useMediaQuery } from "react-responsive";
import SponsorsMobilePage from "../SponsorsMobile/SponsorsMobile";
const cx = classNames.bind(styles);

const tabPageSponsor = [
  {
    key: "sponsorship",
    display: "TÀI TRỢ",
  },
  {
    key: "event",
    display: "SỰ KIỆN",
  },
  {
    key: "video",
    display: "VIDEO",
  },
];

const Sponsors = () => {
  const [active, setActive] = useState(0);
  const [renderTab, setRenderTab] = useState("sponsorship");

  const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

  const handleChangeTab = (index, key) => {
    setActive(index);
    setRenderTab(key);
  };

  return (
    <div className={cx("sponsors-wrapper")}>
      {!isMobile ? (
        <div className={cx("inner", "container")}>
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
            {renderTab === "sponsorship" ? (
              <Sponsorship />
            ) : renderTab === "event" ? (
              <Event />
            ) : renderTab === "video" ? (
              <Video />
            ) : null}
          </div>
        </div>
      ) : (
        <SponsorsMobilePage />
      )}
    </div>
  );
};

export default Sponsors;
