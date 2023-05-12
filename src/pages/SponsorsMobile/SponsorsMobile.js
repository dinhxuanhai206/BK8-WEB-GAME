import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SponsorsMobile.module.scss";
import SponsorshipMobile from "./SponsorshipMobile/SponsorshipMobile";
import EventsMobile from "./EventsMobile/EventsMobile";
import VideoMobile from "./VideoMobile/VideoMobile";

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

const SponsorsMobile = () => {
    const [active, setActive] = useState(0);
    const [renderTab, setRenderTab] = useState("sponsorship");

    const handleChangeTab = (index, key) => {
        setActive(index);
        setRenderTab(key);
    };

    return (
        <div className={cx("sponsors-wrapper")}>
            <div className={cx("inner")}>
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
                        <SponsorshipMobile />
                    ) : renderTab === "event" ? (
                        <EventsMobile />
                    ) : renderTab === "video" ? (
                        <VideoMobile />
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default SponsorsMobile;
