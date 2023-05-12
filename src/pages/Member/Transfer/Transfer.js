import React from "react";
import classNames from "classnames/bind";
import styles from "./Transfer.module.scss";
import transfer from "~/assets/images/img-member/img-tranfer/tContent_transferContent_interchangeIcon.png";
import images from "../../../constants/images";
const cx = classNames.bind(styles);

const transferList = [
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
];

const transferList1 = [
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
];
const transferList2 = [
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
  {
    title: "BK8-Sport",
    btnAll: "All-in",
    num: {
      mark: "MYR",
      number: "00.0",
    },
    time: "Weekly Turnover",
    symbol: "-",
  },
];

function Transfer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <p>TRANSFER</p>
      </div>
      <div className={cx("main")}>
        <div className={cx("title-trans")}>
          <div className={cx("form-item")}>
            <div className={cx("from")}>
              <label className={cx("transForm")}>Transfer from</label>
              <span>&nbsp;</span>
              <select name="mainWallet" className={cx("mainWallet")}>
                <option value="Metamask">Metamask</option>
              </select>

              <span>&nbsp;</span>

              <img className={cx("transfer")} src={transfer}></img>

              <span>&nbsp;</span>

              <select name="mainWallet" className={cx("mainWallet")}>
                <option value="Metamask">Metamask</option>
              </select>
            </div>
            <div className={cx("amount-block")}>
              <label className={cx("amount")}>Amount</label>
              <span>&nbsp;</span>
              <input
                type="text"
                className={cx("textAmount")}
                placeholder="0"
                className={cx("input")}
              />
            </div>
          </div>
        </div>
        <div className={cx("specialCode")}>
          <label className={cx("titleSpecial")}>Special Code</label>
          <span>&nbsp;</span>
          <input type="text" className={cx("textCode")} placeholder=""></input>
        </div>
        <div className={cx("promoCode")}>
          <label className={cx("titlePromo")}>Promo Code</label>
          <span>&nbsp;</span>
          <select name="mainWallet" className={cx("textPromo")}>
            <option value="Metamask" placeholder="---Please Select---">
              ---Please Select---{" "}
            </option>
          </select>
        </div>
        <div className={cx("item-btn")}>
          <button className={cx("submit-btn")}> Submit</button>
        </div>
      </div>

      <div className={cx("total")}>
        <div className={cx("tableSport")}>
          <div className={cx("titleSport")}>
            <p>Sportsbook</p>
          </div>
          <div className={cx("weekly")}>
            <p className={cx("weekly__title")}>Weekly Turnover Total</p>
            <p className={cx("weekly__num")}>00.0</p>
            <p>-</p>
          </div>
        </div>
        <div className={cx("itemTotal")}>
          {transferList?.map((item, index) => (
            <div key={index} className={cx("tab-item-main")}>
              <div className={cx("tab-item")}>
                <div className={cx("content-item-header")}>
                  <div className={cx("header-content")}>
                    <p className={cx("title-content")}>{item.title}</p>
                  </div>
                  <div className={cx("body-content")}>
                    <button className={cx("all-in")}>{item.btnAll}</button>
                    <div className={cx("num")}>
                      <p className={cx("content")}>{item.num.mark}</p>
                      <p className={cx("content")}>{item.num.number}</p>
                    </div>
                  </div>
                </div>
                <div className={cx("footer-content")}>
                  <p className={cx("time")}>{item.time}</p>
                  <p className={cx("symbol")}>{item.symbol}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={cx("title1")}>
          <p>Live Casino/Slots/Fishing</p>
        </div>
        <div className={cx("itemTotal")}>
          {transferList1?.map((item, index) => (
            <div key={index} className={cx("tab-item-main")}>
              <div className={cx("tab-item")}>
                <div className={cx("top")}>
                  <div className={cx("content-item")}>
                    <div className={cx("content-item-header")}>
                      <div className={cx("header-content")}>
                        <p className={cx("title-content")}>{item.title}</p>
                      </div>
                      <div className={cx("body-content")}>
                        <button className={cx("all-in")}>{item.btnAll}</button>
                        <div className={cx("num")}>
                          <p className={cx("content")}>{item.num.mark}</p>
                          <p className={cx("content")}>{item.num.number}</p>
                        </div>
                      </div>
                    </div>
                    <div className={cx("footer-content")}>
                      <p className={cx("time")}>{item.time}</p>
                      <p className={cx("symbol")}>{item.symbol}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={cx("title1")}>
          <p>Other</p>
        </div>
        <div className={cx("itemTotal")}>
          {transferList2?.map((item, index) => (
            <div key={index} className={cx("tab-item-main")}>
              <div className={cx("tab-item")}>
                <div className={cx("top")}>
                  <div className={cx("content-item")}>
                    <div className={cx("content-item-header")}>
                      <div className={cx("header-content")}>
                        <p className={cx("title-content")}>{item.title}</p>
                      </div>
                      <div className={cx("body-content")}>
                        <button className={cx("all-in")}>{item.btnAll}</button>
                        <div className={cx("num")}>
                          <p className={cx("content")}>{item.num.mark}</p>
                          <p className={cx("content")}>{item.num.number}</p>
                        </div>
                      </div>
                    </div>
                    <div className={cx("footer-content")}>
                      <p className={cx("time")}>{item.time}</p>
                      <p className={cx("symbol")}>{item.symbol}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Transfer;
