import React from "react";
import classNames from "classnames/bind";
import styles from "./TeraErc.module.scss";
import images from "~/constants/imagesMember";
import { FaDownload } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
const cx = classNames.bind(styles);

function TeraErc() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("Scan")}>
        <p className={cx("Scan-title")}>Scan QR Code* </p>
        <div className={cx("qr-block")}>
          <div className={cx("qr-left")}>
            <div className={cx("img")}>
              <img src={images.teraercQR} alt="" className={cx("img-teraQR")} />
            </div>
            <div className={cx("save-qr")}>
              Save QR <FaDownload style={{ marginLeft: "5px" }} />
            </div>
          </div>
          <div className={cx("qr-right")}>
            <div>
              <p className={cx("p1")}>Min Deposit = USDT 200</p>
              <p className={cx("p2")}>Current exchange rate</p>
              <p className={cx("p3")}>USDT 1 = MYR 4.4</p>
            </div>
            <div className={cx("p-bottom")}>
              <p className={cx("p4")}>CHAIN : ERC20</p>
              <p className={cx("p5")}>SCAN THE QR CODE WITH YOUR USDT WALLET</p>
            </div>
          </div>
        </div>
      </div>
      <p className={cx("desc-scan")}>
        Reminder: QR deposit can only be used to scan once only
      </p>
      <div className={cx("send")}>
        <p className={cx("send-title")}>or send to this USDT address </p>
        <div className={cx("address-block")}>
          <div className={cx("code-block")}>
            <div className={cx("code")}>
              0x88ac09a63c6c2961c8edfe25d1e1c8def4f3557a
            </div>
            <button className={cx("share")}>
              <RiShareForwardLine />
            </button>
          </div>
          <button className={cx("btn-check")}>Check Status</button>
        </div>
      </div>
      <div className={cx("reminder")}>
        <div className={cx("title")}>Reminder: </div>
        <div className={cx("desc")}>
          <div className={cx("num")}>1.</div>
          <p className={cx("text-num")}>
            Minimum deposit is USDT 10 (Excluded gas fee), deposit below the
            amount may result in the loss of your deposit.
          </p>
        </div>
        <div className={cx("desc")}>
          <div className={cx("num")}>2.</div>
          <p className={cx("text-num")}>
            The exchange rate is for reference only, the credit will be given
            follow the latest exchange rate after all network confirmation.
          </p>
        </div>
        <div className={cx("desc")}>
          <div className={cx("num")}>3.</div>
          <p className={cx("text-num")}>
            Please transfer only USDT-TRC20 to this deposit address. Transfer
            with any other coin or token to this address may result in the loss
            of your deposit.
          </p>
        </div>
        <div className={cx("desc")}>
          <div className={cx("num")}>4.</div>
          <p className={cx("text-num")}>
            The credit will be added after all network confirmation.
          </p>
        </div>
        <div className={cx("desc")}>
          <div className={cx("num")}>5.</div>
          <p className={cx("text-num")}>
            For your safety, please use your personal crypto wallet to transfer
            the USDT-TRC20, and not directly from an exchange. DO NOT fill "BK8"
            # or any sensitive words related to gambling as reference.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeraErc;
