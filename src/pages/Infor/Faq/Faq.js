import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Faq.module.scss";
import Collab from "~/components/Collab/Collab";
const cx = classNames.bind(styles);
const menuFaq = [
  {
    key: "general",
    display: "General",
  },
  {
    key: "myaccount",
    display: "My Account",
  },
  {
    key: "payment",
    display: "Payment",
  },
  {
    key: "cryptocurrency",
    display: "Cryptocurrency",
  },
  {
    key: "promotion",
    display: "Promotions",
  },
  {
    key: "rebates",
    display: "Cast Rebates",
  },
  {
    key: "product",
    display: "Products",
  },
  {
    key: "mobile",
    display: "Mobile",
  },
  {
    key: "technical",
    display: "Technical",
  },
];

const fagCollap = [
  {
    id: 1,
    title: "Why can't I log into BK8's website?",
    desc: "All bets stand and null. We do not process request to change, void or cancel once your bet submission is confirmed in the system. Should any dispute arises, BK8.com and Management reserves the right of final decision. ",
  },
  {
    id: 2,
    title: "Technical Safety",
    desc: "All bets stand and null. We do not process request to change, void or cancel once your bet submission is confirmed in the system. Should any dispute arises, BK8.com and Management reserves the right of final decision. ",
  },
  {
    id: 3,
    title: "Compatibility",
    desc: "All bets stand and null. We do not process request to change, void or cancel once your bet submission is confirmed in the system. Should any dispute arises, BK8.com and Management reserves the right of final decision. ",
  },
  {
    id: 4,
    title: 'For "Others" enquiries',
    desc: "All bets stand and null. We do not process request to change, void or cancel once your bet submission is confirmed in the system. Should any dispute arises, BK8.com and Management reserves the right of final decision. ",
  },
];

function Faq() {
  const [active, setActive] = useState(0);
  const [focusCollab, setFocusCollab] = useState(0);

  const handleChangeTab = (index) => {
    setActive(index);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("tabs")}>
        {menuFaq.map((item, index) => (
          <div
            key={index}
            className={cx("tab-item", active === index ? "active" : "")}
            onClick={() => handleChangeTab(index)}
          >
            {item.display}
          </div>
        ))}
      </div>
      <div className={cx("name")}>
        {fagCollap.map((item) => (
          <Collab
            key={item.id}
            title={item.title}
            bg={"gray"}
            index={item.id}
            onClick={() => setFocusCollab(item.id)}
            {...{ focusCollab, setFocusCollab }}
          >
            <p>
              {item.desc}
            </p>
          </Collab>
        ))}
      </div>
    </div>
  );
}

export default Faq;
