import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./MyReferral.module.scss";

const cx = classNames.bind(styles);

const MyReferral = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cx("wrapper")}>
      {open ? (
        <div className={cx("term-block")}>
          <p className={cx("term-title")}>Terms & Conditions</p>
          <div className={cx("desc")}>
            <div className={cx("num")}>1.</div>
            <p className={cx("text-num")}>
              Please transfer only USDT-TRC20 to this deposit address. Transfer
            </p>
          </div>
          <div className={cx("desc")}>
            <div className={cx("num")}>2.</div>
            <p className={cx("text-num")}>
              Please transfer only USDT-TRC20 to this deposit address. Transfer
            </p>
          </div>
          <div className={cx("desc")}>
            <div className={cx("num")}>3.</div>
            <p className={cx("text-num")}>
              Please transfer only USDT-TRC20 to this deposit address. Transfer
            </p>
          </div>
          <div className={cx("close")} onClick={() => setOpen(false)}>
            <button className={cx("btn-close")}>CLOSE</button>
          </div>
        </div>
      ) : null}

      <div className={cx("referral-top")}>
        <p className={cx("title")}>
          Share your favorite offers to your friends!
        </p>
        <div className={cx("block-option")}>
          <input type="radio" className={cx("input")} />
          <div className={cx("option")}>
            <p className={cx("option-title")}>Option 1 - FREEBET 200VND</p>
            <div className={cx("block")}>
              <div className={cx("ticket")}>
                <p className={cx("p")}>Turnover</p>
                <span className={cx("span")}>1x</span>
              </div>
              <div className={cx("ticket")}>
                <p className={cx("p")}>Deposit when withdrawal</p>
                <span className={cx("span")}>0</span>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("button")}>
          <button className={cx("btn-invite")}>INVITE FRIEND</button>
        </div>
      </div>
      <div className={cx("referral-bottom")}>
        <p className={cx("title")}>Your Referral Status</p>
        <div className={cx("block-status")}>
          <div className={cx("invite")}>
            <div className={cx("invite-title")}>Invitation Accepted</div>
            <div className={cx("invite-digit")}>0</div>
          </div>
          <div className={cx("invite")}>
            <div className={cx("invite-title")}>Converted</div>
            <div className={cx("invite-digit")} style={{ color: "#1aa00b" }}>
              0
            </div>
          </div>
        </div>
        <p
          className={cx("term")}
          onClick={() => {
            setOpen(true);
          }}
        >
          Terms & Conditions
        </p>
      </div>
    </div>
  );
};
export default MyReferral;
