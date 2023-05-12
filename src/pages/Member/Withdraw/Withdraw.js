import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Withdraw.module.scss";
import BankTranfer from "../Withdraw/BankTranfer/BankTranfer";

import { dataWithdraw, dataWithdrawTablet } from "~/constants/mock-member/dataWithdraw";
import { AiOutlineWarning } from "react-icons/ai";
import { useMediaQuery } from 'react-responsive';
import BankList from "./BankList/BankList";
const cx = classNames.bind(styles);

function Withdraw() {
  const [active, setActive] = useState(0);
  const [renderTab, setRenderTab] = useState("banktranfer");
  const isTablet = useMediaQuery({ query: `(max-width: 1023px)` });

  const handleChangeTab = (index, key) => {
    setActive(index);
    setRenderTab(key);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("withdraw-title")}>
        <p> Withdraw</p>
      </div>
      <div className={cx("right")}>
        <div className={cx("inner")}>
          <div className={cx("withdraw-block")}>
            <p className={cx("withdraw-option")}>Withdraw Options*</p>
            <div className={cx("title-block")}>
              {isTablet ? dataWithdrawTablet.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleChangeTab(index, item.key)}
                  className={cx("with-title", index === active ? "active" : "")}
                >
                  <button
                    className={cx(
                      "logo-img",
                      active === index ? "actives" : ""
                    )}
                    onClick={() => setActive(index)}
                  >
                    <i style={active === index ? item.imgActive : item.img} />
                  </button>
                  <p className={cx("name")}>{item.name}</p>
                </div>
              )): dataWithdraw.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleChangeTab(index, item.key)}
                  className={cx("with-title", index === active ? "active" : "")}
                >
                  <button
                    className={cx(
                      "logo-img",
                      active === index ? "actives" : ""
                    )}
                    onClick={() => setActive(index)}
                  >
                    <i style={active === index ? item.imgActive : item.img} />
                  </button>
                  <p className={cx("name")}>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={cx("message-body")}>
            {renderTab === "banktranfer" ? (
              <BankTranfer />
            ) : renderTab === "crypto" ? (
              <BankList />
            ) : null}
          </div>
          <div className={cx("block-trans")}>
            <p>Transaction Date</p>
            <p>Amount</p>
            <p>Method</p>
            <p>Status</p>
          </div>
          <div>
            <p className={cx("block__cont1")}>No transaction yet</p>
          </div>
          <div className={cx("show-more")}>View More</div>
        </div>

        <div className={cx("deposit-right")}>
          <div className={cx("right-title")}>
            <AiOutlineWarning style={{ fontSize: "34px", color: "blue" }} />
            <div className={cx("span")}>IMPORTANT NOTICE</div>
          </div>
          <div className={cx("desc")}>
            <div className={cx("num")}>1.</div>
            <p className={cx("text-num")}>
              Kindly check with our 24/7 LIVECHAT if your transaction is pending
              for more than 10 minutes.
            </p>
          </div>
          <div className={cx("desc")}>
            <div className={cx("num")}>2.</div>
            <p className={cx("text-num")}>
              Withdrawal bank account name must match with registered full name,
              member is not allow withdrawal to 3rd party bank account.
            </p>
          </div>
          <div className={cx("desc")}>
            <div className={cx("num")}>3.</div>
            <p className={cx("text-num")}>
              Some game provider requires 15 till 30 minutes of report sync
              time, kindly bear with us during the required sync time.
            </p>
          </div>
          <div className={cx("desc")}>
            <div className={cx("num")}>4.</div>
            <p className={cx("text-num")}>
              Please make sure your turnover requirement has been achieved
              before making a withdrawal transaction to avoid inconvenience.
            </p>
          </div>
          <div className={cx("desc")}>
            <div className={cx("num")}>5.</div>
            <p className={cx("text-num")}>
              If there is any discrepancy or you may have any other further
              withdrawal inquiries, kindly contact our 24/7 LIVECHAT. Thank you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
