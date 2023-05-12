import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./History.module.scss";
import Transfer from "./Transfer/Transfer";
import Withdrawal from "./Withdrawal/Withdrawal";
import Sumary from "./Sumary/Sumary";
import Promotion from "./Promotion/Promotion";
import Rebate from "./Rebate/Rebate";
import Rewards from "./Rewards/Rewards";

const cx = classNames.bind(styles);

const tabHistory = [
  {
    key: "bettingsumary",
    display: "Betting Sumary",
  },
  {
    key: "transfer",
    display: "Transfer",
  },
  {
    key: "withdrawal/deposit",
    display: "Withdrawal/Deposit",
  },
  {
    key: "promotionapply",
    display: "Promotion Apply",
  },
  {
    key: "rewards",
    display: "Rewards",
  },
];
const tabDate = [
  {
    key1: "date",
    display: "Today",
  },
  {
    key1: "date",
    display: "In 3 days",
  },
  {
    key1: "date",
    display: "In a week",
  },
  {
    key1: "date",
    display: "In a month",
  },
];
function History() {
  const [active, setActive] = useState(0);
  const [activeDate, setActiveDate] = useState(0);
  const [renderTab, setRenderTab] = useState("bettingsumary");

  const handleChangeTab = (index, key) => {
    setActive(index);
    setRenderTab(key);
  };

  const handleChangeTabDate = (index) => {
    setActiveDate(index);
  };

  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>HISTORY</p>
      <div className={cx("main")}>
        <div className={cx("right")}>
          <div className={cx("history-item")}>
            <div className={cx("title-history")}>Transaction Type *</div>
            <div className={cx("block-item")}>
              {tabHistory.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleChangeTab(index, item.key)}
                  className={cx("item", index === active ? "active" : "")}
                >
                  {item.display}
                </div>
              ))}
            </div>
          </div>
          <div className={cx("history-item1")}>
            <div className={cx("title-history")}>Transaction Date *</div>
            <div className={cx("block-item1")}>
              {tabDate?.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleChangeTabDate(index, item.key1)}
                  className={cx("item", index === activeDate ? "active" : "")}
                >
                  {item.display}
                </div>
              ))}
            </div>
          </div>
          <div className={cx("history-item2")}>
            <div className={cx("date-title")}>
              Start Date
            </div>
            <div className={cx("date")}>
              <div className={cx("choseDate")}>
                <input type="date" className={cx("choseDate1")} />
              </div>
              <p className={cx("to")}>To</p>
              <div className={cx("choseDate")}>
                <input type="date" className={cx("choseDate1")} />
              </div>
              <div className={cx("btn")}>
                <button className={cx("submit-btn")}> SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("message-body")}>
          {renderTab === "bettingsumary" ? (
            <Sumary />
          ) : renderTab === "transfer" ? (
            <Transfer />
          ) : renderTab === "withdrawal/deposit" ? (
            <Withdrawal />
          ) : renderTab === "promotionapply" ? (
            <Promotion />
          ) : renderTab === "rebate/crashback" ? (
            <Rebate />
          ) : renderTab === "rewards" ? (
            <Rewards />
          ) : null}
        </div>
      </div>
      <div className={cx("block-trans2")}>
        <p className={cx("block__cont1")}>No transaction yet</p>
        <p className={cx("block__cont2")}>Showing 1 -0 of 0 items.</p>
        <div className={cx("block")}>
          <button className={cx("btn-page")}>«</button>
          <button className={cx("btn-page")}>‹</button>
          <button className={cx("btn-page")}>1</button>
          <button className={cx("btn-page")}>›</button>
          <button className={cx("btn-page")}>»</button>
        </div>
      </div>
    </div>
  );
}

export default History;
