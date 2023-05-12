import React from "react";
import classNames from "classnames/bind";
import styles from "./MyReferral.module.scss";
import { RiFileCopy2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AiOutlineWarning } from "react-icons/ai";

const cx = classNames.bind(styles);

function MyReferral() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("code-title")}>
        <div className={cx("code-block")}>
          <p className={cx("title")}>
            Referral Code: <span className={cx("span")}>fsmzjknu</span>
          </p>
          <button className={cx("btn-code")}>
            <RiFileCopy2Line style={{ fontSize: "26px" }} />
          </button>
        </div>
        <div className={cx("code-block")}>
          <p className={cx("title")}>
            Referral Link:{" "}
            <Link to={"/"} className={cx("span")}>
              https://www.bk8play.asia/auto-language/?refid=fsmzjknu
            </Link>
          </p>
          <button className={cx("btn-code")}>
            <RiFileCopy2Line style={{ fontSize: "26px" }} />
          </button>
        </div>
      </div>
      <div className={cx("main-content")}>
        <div className={cx("left")}>
          <div className={cx("content")}>
            <p className={cx("share")}>
              Share your favorite offers to your friends!
            </p>
            <label>
              <input type="radio" />
              <span className={cx("radio-title")}> Option 1 - FREE MYR 38</span>
            </label>
          </div>
          <div className={cx("content-block")}>
            <p className={cx("block-header")}>FREE MYR 38</p>
            <div className={cx("wrapBlock")}>
              <div className={cx("content-block1")}>
                <p> Turnover</p>
                <p>5x</p>
              </div>
              <div className={cx("content-block2")}>
                <p>Deposit</p>
                <p>MYR 50</p>
              </div>
            </div>
          </div>
          <div className={cx("item-btn")}>
            <button className={cx("submit-btn")}> INVITE FRIENDS</button>
          </div>
        </div>
        <div className={cx("right")}>
          <div className={cx("referal-right")}>
            <div className={cx("right-title")}>
              <AiOutlineWarning style={{ fontSize: "34px", color: "blue" }} />
              <div className={cx("span")}>Terms & Conditions</div>
            </div>
            <div className={cx("desc")}>
              <div className={cx("num")}>1.</div>
              <p className={cx("text-num")}>
                Friends registered through your unique refer link/ID will be
                entitled to claim MYR 38 in promo column.
              </p>
            </div>
            <div className={cx("desc")}>
              <div className={cx("num")}>2.</div>
              <p className={cx("text-num")}>
                You will receive a MYR 100 bonus reward for every referral made
                as long as your referee fulfils a deposit requirement of MYR 500
                within 60 days.
              </p>
            </div>
            <div className={cx("desc")}>
              <div className={cx("num")}>3.</div>
              <p className={cx("text-num")}>
                On top of the MYR 100 bonus reward, you will also be entitled
                for additional referral bonus of MYR 100 for every 3 friends
                deposited.
              </p>
            </div>
            <div className={cx("desc")}>
              <p className={cx("text-num")}>
                Learn more about our referral promo here >>>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("bottom")}>
        <p className={cx("content-p")}>Your Referral Status</p>
        <div className={cx("block-invite")}>
          <p className={cx("text-num")}>Invitation Accepted <span className={cx('blues')}>0</span></p>
          <p className={cx("text-num")}>Mission complete <span className={cx('greens')}>0</span></p>
        </div>
      </div>
    </div>
  );
}

export default MyReferral;
