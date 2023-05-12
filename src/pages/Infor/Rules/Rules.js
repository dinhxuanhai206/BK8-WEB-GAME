import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Rules.module.scss";
import Collab from "~/components/Collab/Collab";

const cx = classNames.bind(styles);
const menuRules = [
  {
    display: "Sports",
  },
  {
    display: "Live Casino",
  },
  {
    display: "Games",
  },
  {
    display: "Lottery",
  },
  {
    display: "Poker",
  },
  {
    display: "Super Bull",
  },
];
const ruleCollap = [
  {
    id: 1,
    title: "General Rules and Regulations",
    desc: "All bets stand and null. We do not process request to change, void or cancel once your bet submission is confirmed in the system. Should any dispute arises, BK8.com and Management reserves the right of final decision. ",
  },
  {
    id: 2,
    title: "Member Obligation",
    desc: "All bets stand and null. We do not process request to change, void or cancel once your bet submission is confirmed in the system. Should any dispute arises, BK8.com and Management reserves the right of final decision. ",
  },
  {
    id: 3,
    title: "C-Sports",
    desc: "All bets stand and null. We do not process request to change, void or cancel once your bet submission is confirmed in the system. Should any dispute arises, BK8.com and Management reserves the right of final decision. ",
  },
];
function Rules() {
  const [active, setActive] = useState(0);
  const [focusCollab, setFocusCollab] = useState(0);
  const handleChangeTab = (index) => {
    setActive(index);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("tabs")}>
        {menuRules.map((item, index) => (
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
        {ruleCollap.map((item) => (
          <Collab
            key={item.id}
            title={item.title}
            bg={"gray"}
            index={item.id}
            onClick={() => setFocusCollab(item.id)}
            {...{ focusCollab, setFocusCollab }}
          >
            <p>{item.desc}</p>
          </Collab>
        ))}
      </div>
    </div>
  );
}

export default Rules;
