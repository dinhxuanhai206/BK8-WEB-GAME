import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Terms.module.scss";
import Collab from "~/components/Collab/Collab";

const cx = classNames.bind(styles);
const termCollap = [
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
function Terms() {
  const [focusCollab, setFocusCollab] = useState(0);
  return (
    <div className={cx("wrapper")}>
      <p className={cx("p")}>
        This page contains information explaining your rights in accessing and
        using The Company website.
      </p>
      <p className={cx("p")}>
        {" "}
        The Terms and Conditions relating to the games and promotions available
        on the Site are posted from time to time, which are incorporated herein
        by reference.
      </p>
      <div className={cx("name")}>
        {termCollap.map((item) => (
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

export default Terms;
