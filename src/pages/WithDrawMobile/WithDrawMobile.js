import { useState, useContext } from "react";
import classNames from "classnames/bind";
import styles from "./WithDrawMobile.module.scss";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import images from "~/constants/imagePromosMobile";
import WithCrypto from "./WithCrypto/WithCrypto";
import WithBank from "./WithBank/WithBank";
import { Link } from "react-router-dom";
import { Store } from "~/Store";
const cx = classNames.bind(styles);

const tabPageWithDraw = [
  {
    display: "Crypto",
  },
  {
    display: "Bank Tranfer",
  },
];

function WithDrawMobile() {
  const [active, setActive] = useState(0);
  const [number, setNumber] = useState(true);
  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { userInfo } = state

  const handleChangeEye = () => {
    setNumber(!number);
  };
  const handleChangeTab = (index) => {
    setActive(index);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("coin")}>
          <p className={cx("main")}>Main Wallet</p>
          <div className={cx("left")}>
            <div onClick={handleChangeEye}>
              {number ? (
                <AiOutlineEye
                  style={{
                    color: "black",
                    fontSize: "20px",
                    marginBottom: "-6px",
                  }}
                />
              ) : (
                <AiOutlineEyeInvisible
                  style={{
                    color: "black",
                    fontSize: "20px",
                    marginBottom: "-6px",
                  }}
                />
              )}
            </div>
            <div className={cx("block")}>
              <div className={cx("vnd")}>
                MYR <span>{number ? userInfo.balance : '***'}</span>{" "}
                <BiRefresh
                  style={{
                    color: "blue",
                    fontSize: "20px",
                    marginBottom: "-4px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={cx("right")}>
          <div className={cx("img")}>
            <img src={images.restore} alt="" className={cx("img-store")} />
          </div>
          <p className={cx("title")}>Restore</p>
        </div>
      </div>
      <div className={cx("inner")}>
        <div className={cx("block")}>
          {" "}
          {tabPageWithDraw.map((item, index) => (
            <div
              key={index}
              onClick={() => handleChangeTab(index)}
              className={cx("item", index === active ? "active" : "")}
            >
              {item.display}
            </div>
          ))}
        </div>
        <div>
          {active === 0 ? <WithCrypto /> : active === 1 ? <WithBank /> : null}
        </div>
      </div>
      <p className={cx("titles")}>WithDraw History</p>
      <div className={cx("yet")}>No transaction yet</div>
      <Link to="/history" className={cx("view")}>
        view more
      </Link>
    </div>
  );
}

export default WithDrawMobile;
