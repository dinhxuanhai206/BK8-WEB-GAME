import React, { useState } from "react";
import classNames from "classnames/bind";
// import { Link } from "react-router-dom";
// import images from "~/constants/images";
import styles from "./Leaderboard.module.scss";
import CheckRank from "./CheckRank/CheckRank";
import Prizes from "./Prizes/Prizes";
import BannerSlideShow from "~/components/BannerSlideShow/BannerSlideShow";
import images from "../../constants/Leaderboard/leaderBoardImages";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import LeaderBoardMobile from "../LeaderBoardMobile/LeaderBoardMobile";
import About from "../LeaderBoardMobile/About/About";
const cx = classNames.bind(styles);

const bannerLeaderboard = [
    {
        image: images.bannerLeaderboard,
        link: "promos",
    },
];

const leaderBoardNav = [
    {
        id: 1,
        title: "Về chúng tôi",
    },
    {
        id: 2,
        title: "Hạng của bạn",
    },
    {
        id: 3,
        title: "giải thưởng",
    },
];

const LeaderBoard = () => {
    const [active, setActive] = useState();
    const [showMore, setShowMore] = useState(false);

    const handleClick = (show) => {
        setShowMore(show);
    };
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    return (
        <div>
            {!isMobile ? (
                <div>
                    <div className={cx("banner-casino")}>
                        <BannerSlideShow dataBanner={bannerLeaderboard} />
                    </div>
                    <div className="container">
                        <div className={cx("wrapper")}>
                            <div className={cx("menu")}>
                                {leaderBoardNav.map((item) => (
                                    <Link
                                        to={item.title}
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        key={item.id}
                                    >
                                        <button
                                            className={cx(
                                                "btn-nav",
                                                active === item.id
                                                    ? "active"
                                                    : ""
                                            )}
                                            id={item.id}
                                            onClick={(e) =>
                                                setActive(e.target.id)
                                            }
                                        >
                                            {item.title}
                                        </button>
                                    </Link>
                                ))}
                            </div>
                            {/* ///////////////// */}
                            <div id="Về chúng tôi" className={cx("wrapper_about")}>
                                <div className={cx("block")}>
                                    <div className={cx("title")}>
                                        Bảng Xếp Hạng Chính BK8
                                    </div>
                                    <div className={cx("desc")}>
                                        10 thành viên hàng đầu trên bảng xếp
                                        hạng hàng tháng sẽ nhận được nhiều điểm
                                        và giải thưởng hơn theo cấp độ thành
                                        viên của họ
                                    </div>
                                    <div className={cx("content")}>
                                        <div className={cx("item")}>
                                            <div className={cx("item-block1")}>
                                                <div
                                                    className={cx("item-title")}
                                                >
                                                    Bảng Xếp Hạng Thời Gian Thực
                                                </div>
                                                <div
                                                    className={cx("item-desc")}
                                                >
                                                    Bảng xếp hạng BK8 cho phép
                                                    người chơi đánh giá hiệu
                                                    suất của họ và cạnh tranh
                                                    với những người chơi khác
                                                    trên cơ sở thời gian thực.
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx("item")}>
                                            <div className={cx("item-block2")}>
                                                <div
                                                    className={cx("item-title")}
                                                >
                                                    Giải Thưởng Hấp Dẫn
                                                </div>
                                                <div
                                                    className={cx("item-desc")}
                                                >
                                                    Nhận nhiều quà tặng và giải
                                                    thưởng hơn theo thứ hạng của
                                                    bạn!
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx("item")}>
                                            <div className={cx("item-block3")}>
                                                <div
                                                    className={cx("item-title")}
                                                >
                                                    Thử Thách Chơi Công Bằng
                                                </div>
                                                <div
                                                    className={cx("item-desc")}
                                                >
                                                    Thử thách bản thân và những
                                                    người khác trong cùng hạng
                                                    thành viên để trở thành một
                                                    trong 10 thành viên xếp hạng
                                                    hàng đầu trên bảng xếp hạng
                                                    hàng tháng.
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx("item")}>
                                            <div className={cx("item-block4")}>
                                                <div
                                                    className={cx("item-title")}
                                                >
                                                    Lựa Chọn Tuyệt Vời Các Thể
                                                    Loại Trò Chơi
                                                </div>
                                                <div
                                                    className={cx("item-desc")}
                                                >
                                                    Kích thích các thử thách
                                                    trên 4 loại trò chơi: Thể
                                                    thao, Sòng bạc trực tiếp,
                                                    Máy đánh bạc và Câu cá và Xổ
                                                    số.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("more")}>
                                {!showMore ? (
                                    <p
                                        className={cx("details")}
                                        onClick={() => handleClick(true)}
                                    >
                                        Xem Chi Tiết
                                    </p>
                                ) : (
                                    <div className={cx("wrapper-hide")}>
                                        <div
                                            className={cx("hide")}
                                            onClick={() => handleClick(false)}
                                        >
                                            Ẩn Chi Tiết
                                        </div>
                                        <div className={cx("hide-content")}>
                                            <div className={cx("title")}>
                                                Terms and conditions:
                                            </div>
                                            <p className={cx("text")}>
                                                By participating in this leader
                                                board challenge, Eligible
                                                Participants hereby expressly
                                                agreed to be bound by the terms
                                                and conditions of this campaign
                                                (“Terms & Conditions”) and the
                                                decisions made by BK8.
                                            </p>
                                            <div className={cx("title")}>
                                                Eligibility
                                            </div>
                                            <div className={cx("desc")}>
                                                <div className={cx("num")}>
                                                    1.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    This campaign is open to all
                                                    BK8 players except BK8
                                                    employees, its partners, its
                                                    representatives and/or its
                                                    affiliate/agents (including
                                                    without limitation, any
                                                    third-party service
                                                    providers engaged by BK8 for
                                                    purposes of this campaign)
                                                    (“Eligible Participants”).
                                                </p>
                                            </div>
                                            <div className={cx("title")}>
                                                Campaign Mechanics and
                                                Conditions
                                            </div>
                                            <div className={cx("desc")}>
                                                <div className={cx("num")}>
                                                    1.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    This campaign starts from
                                                    1st December 2021 and ends
                                                    on 31st December 2022
                                                    (“Campaign Period”).
                                                </p>
                                            </div>
                                            <div className={cx("desc")}>
                                                <div className={cx("num")}>
                                                    2.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    To be eligible for this
                                                    campaign, Eligible
                                                    Participants must:
                                                </p>
                                            </div>
                                            <div className={cx("desc-chil")}>
                                                <div className={cx("num")}>
                                                    1.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    This campaign starts from
                                                    1st December 2021 and ends
                                                    on 31st December 2022
                                                    (“Campaign Period”).
                                                </p>
                                            </div>
                                            <div className={cx("desc-chil")}>
                                                <div className={cx("num")}>
                                                    2.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    Have at least a VND 5,000
                                                    valid bet within the
                                                    calendar month.
                                                </p>
                                            </div>
                                            <div className={cx("desc")}>
                                                <div className={cx("num")}>
                                                    3.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    Eligible Participants can
                                                    have different rankings on
                                                    different game category on
                                                    the leaderboard.
                                                </p>
                                            </div>
                                            <div className={cx("title")}>
                                                Prize
                                            </div>
                                            <div className={cx("desc")}>
                                                <div className={cx("num")}>
                                                    1.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    There shall be 240 winner
                                                    per month throughout the BK8
                                                    Master Leaderboard campaign.
                                                </p>
                                            </div>
                                            <div className={cx("desc")}>
                                                <div className={cx("num")}>
                                                    2.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    Prizes are not transferable
                                                    nor exchangeable and will
                                                    only be issued to the
                                                    winners as verified by BK8
                                                    (“Winners”).
                                                </p>
                                            </div>
                                            <div className={cx("desc")}>
                                                <div className={cx("num")}>
                                                    3.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    BK8 reserves the absolute
                                                    right to substitute the
                                                    Prize with any other item(s)
                                                    of similar value at its
                                                    discretion by giving a
                                                    twenty-one (21) day prior
                                                    notice to the Winners
                                                    through any method of
                                                    communication that BK8 shall
                                                    at its absolute discretion
                                                    decide.
                                                </p>
                                            </div>
                                            <div className={cx("desc")}>
                                                <div className={cx("num")}>
                                                    4.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    Rewards are subject to
                                                    availability and photos are
                                                    for illustration purposes
                                                    only.
                                                </p>
                                            </div>
                                            <div className={cx("desc")}>
                                                <div className={cx("num")}>
                                                    5.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    Qualified members are
                                                    verified at the end of each
                                                    participating month and
                                                    prizes will be shipped to
                                                    eligible members within 14
                                                    working days after the
                                                    verification period (about 3
                                                    days).
                                                </p>
                                            </div>
                                            <div className={cx("desc")}>
                                                <div className={cx("num")}>
                                                    6.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    BK8 endeavours to deliver
                                                    prizes within the stipulated
                                                    timeline but cannot
                                                    guarantee this delivery time
                                                </p>
                                            </div>
                                            <div className={cx("desc")}>
                                                <div className={cx("num")}>
                                                    7.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    BK8 shall not be liable
                                                    and/or responsible for any
                                                    loss of or damage to the
                                                    Prize once collected by the
                                                    Winners.
                                                </p>
                                            </div>
                                            <div className={cx("desc")}>
                                                <div className={cx("num")}>
                                                    8.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    BK8 is the sole arbiter of
                                                    the promotion, and its
                                                    decision is final.
                                                </p>
                                            </div>
                                            <div className={cx("desc")}>
                                                <div className={cx("num")}>
                                                    9.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    BK8 at its absolute
                                                    discretion reserves the
                                                    right to select other
                                                    Eligible Participants to
                                                    substitute any Winner(s) who
                                                    may be ineligible or
                                                    disqualified for any reason
                                                    whatsoever assigning any
                                                    reasons thereto throughout
                                                    the campaign Period.
                                                </p>
                                            </div>
                                            <div className={cx("desc")}>
                                                <div className={cx("num")}>
                                                    10.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    BK8 reserves the right to
                                                    alter, cancel, terminate or
                                                    suspend the Redemption or
                                                    any part thereof or any part
                                                    of the applicable terms and
                                                    conditions from time to
                                                    time, with or without any
                                                    prior notice.
                                                </p>
                                            </div>
                                            <div className={cx("desc")}>
                                                <div className={cx("num")}>
                                                    11.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    Members who participate in
                                                    the activity must accept and
                                                    comply with the above rules
                                                    and terms as well as all
                                                    relevant rules and terms of
                                                    the website implement by
                                                    BK8.
                                                </p>
                                            </div>
                                            <div className={cx("desc")}>
                                                <div className={cx("num")}>
                                                    12.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    General BK8 Terms &
                                                    Conditions apply.
                                                </p>
                                            </div>
                                            <div className={cx("title")}>
                                                General terms & conditions
                                            </div>
                                            <div className={cx("desc")}>
                                                <div className={cx("num")}>
                                                    1.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    BK8 shall not be responsible
                                                    or held liable in any manner
                                                    whatsoever and shall be
                                                    absolved from all forms of
                                                    liability in respect of
                                                    technical failures of any
                                                    kind whatsoever,
                                                    intervention, interruptions
                                                    and/or electronic or human
                                                    error in the administration
                                                    and/or processing of the
                                                    transaction performed via
                                                    the BK8 website and/or the
                                                    determination of the
                                                    participants’ eligibility
                                                    for the Reward.
                                                </p>
                                            </div>
                                            <div className={cx("desc")}>
                                                <div className={cx("num")}>
                                                    2.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    The selection of Winners
                                                    will be made by the BK8
                                                    system calculation. All
                                                    matters relating to this
                                                    campaign, including the
                                                    determination of Winners, is
                                                    final, binding and
                                                    conclusive. No
                                                    correspondence, protests or
                                                    appeals will be entertained.
                                                </p>
                                            </div>
                                            <div className={cx("desc")}>
                                                <div className={cx("num")}>
                                                    3.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    BK8 reserves the right upon
                                                    giving reasonable notice to
                                                    alter, shorten, cancel,
                                                    suspend or terminate this
                                                    campaign or any part thereof
                                                    within twenty-one (21) days
                                                    via BK8 inbox message and/or
                                                    through any other channels
                                                    of communication in the
                                                    absolute discretion of BK8.
                                                </p>
                                            </div>
                                            <div className={cx("desc")}>
                                                <div className={cx("num")}>
                                                    4.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    For the avoidance of doubt,
                                                    the alteration, shortening,
                                                    cancellation, suspension or
                                                    termination by BK8 shall not
                                                    entitle the Eligible
                                                    Participants or any other
                                                    persons whatsoever to any
                                                    claims or compensations
                                                    against BK8 for any losses
                                                    or damages suffered or
                                                    incurred as a direct or
                                                    indirect result of the act
                                                    of alteration, shortening,
                                                    cancellation, suspension or
                                                    termination.
                                                </p>
                                            </div>
                                            <div className={cx("desc")}>
                                                <div className={cx("num")}>
                                                    5.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    BK8 shall not be liable for
                                                    any losses, damages or costs
                                                    incurred or suffered by any
                                                    player as a result of any
                                                    player participating in this
                                                    campaign. Furthermore, BK8
                                                    shall not be liable for any
                                                    default of this obligation
                                                    under the campaign due to
                                                    any force majeure event
                                                    which includes but not
                                                    limited to act of God, war,
                                                    riot, lockout, industrial
                                                    action, fire, flood,
                                                    drought, storm or any event
                                                    beyond the reasonable
                                                    control of BK8.
                                                </p>
                                            </div>
                                            <div className={cx("desc")}>
                                                <div className={cx("num")}>
                                                    6.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    BK8 may at its discretion
                                                    disqualify/reject any
                                                    Eligible Participant who
                                                    does not comply with the
                                                    terms and conditions stated
                                                    herein and/or found or
                                                    suspected of tampering with
                                                    the campaign and/or its
                                                    process or the operation of
                                                    this campaign. Tampering
                                                    shall include fraudulent
                                                    activities involving any act
                                                    of deceit and/or deception
                                                    and/or cheating with regards
                                                    to the campaign and/or the
                                                    Eligible Channel.
                                                </p>
                                            </div>
                                            <div className={cx("desc")}>
                                                <div className={cx("num")}>
                                                    7.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    Any such variation of any of
                                                    the terms and conditions
                                                    herein shall be binding on
                                                    the Participants and be
                                                    deemed to be brought to
                                                    their attention through any
                                                    notice displayed at BK8
                                                    website.
                                                </p>
                                            </div>
                                            <div className={cx("desc")}>
                                                <div className={cx("num")}>
                                                    8.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    By participating in this
                                                    Campaign, Eligible
                                                    Participants agree and
                                                    consent to allow his/ her
                                                    personal data being
                                                    collected, processed and
                                                    used by BK8 in accordance
                                                    with BK8 Privacy Notice,
                                                    which may be viewed on
                                                    www.BK8.com (“BK8’s Privacy
                                                    Notice”). In addition, and
                                                    without prejudice to the
                                                    terms in the BK8’s Privacy
                                                    Notice, Eligible
                                                    Participants agree and
                                                    consent to his/her personal
                                                    data or information being
                                                    collected, processed and
                                                    used by BK8 for:
                                                </p>
                                            </div>
                                            <div className={cx("desc")}>
                                                <div className={cx("num")}>
                                                    9.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    Personal data or information
                                                    being processed and used by
                                                    BK8 for:
                                                </p>
                                            </div>
                                            <div className={cx("desc-chil")}>
                                                <div className={cx("num")}>
                                                    1.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    the purposes of the
                                                    campaign;
                                                </p>
                                            </div>
                                            <div className={cx("desc-chil")}>
                                                <div className={cx("num")}>
                                                    2.
                                                </div>
                                                <p className={cx("text-num")}>
                                                    marketing and promotional
                                                    activities conducted in such
                                                    manner as BK8 deems fit in
                                                    any media including but not
                                                    limited to any form of
                                                    advertising or publicity
                                                    media and materials such as
                                                    audio and/or visual
                                                    recordings published through
                                                    newspapers, television
                                                    networks, radio stations or
                                                    online and digital media and
                                                    on the Internet, without
                                                    further express consent from
                                                    the Eligible Participant.
                                                    Marketing and promotion
                                                    activities include without
                                                    limitation the use and/or
                                                    publication of any details
                                                    provided in and/or in
                                                    connection to the entries,
                                                    interviews material as well
                                                    responses and related
                                                    photographs. In this regard,
                                                    each Eligible Participant
                                                    agrees to co-operate and
                                                    participate without further
                                                    express consent and/or
                                                    payment or consideration, in
                                                    all reasonable advertising
                                                    and publicity activities of
                                                    BK8 in relation to the
                                                    campaign.
                                                </p>
                                            </div>
                                            <p className={cx("p")}>
                                                For information, enquiries,
                                                feedbacks and/or complaints
                                                related to the campaign, the
                                                Participants may speak to a
                                                representative via BK8 Live Chat
                                                at www.rebrand.ly/bk/vn.
                                                Alternatively, for feedbacks
                                                and/or complaints, the Eligible
                                                Participants may choose to
                                                e-mail BK8 via
                                                marketing.vn@bk8.com
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div
                            id="Hạng của bạn"
                            className={cx("wrapper_checkRank")}
                        >
                            <CheckRank />
                        </div>
                        <div id="giải thưởng" className={cx("wrapper_prizes")}>
                            <Prizes />
                        </div>
                    </div>
                </div>
            ) : (
                <LeaderBoardMobile />
            )}
        </div>
    );
};

export default LeaderBoard;
