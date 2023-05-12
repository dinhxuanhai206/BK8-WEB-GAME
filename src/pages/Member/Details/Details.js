import React,{useState} from "react";
import classNames from "classnames/bind";
import styles from "./Details.module.scss";
import Withdrawal from "./WithDrawal/Withdrawal";
import Address from "./Address/Address";

const cx = classNames.bind(styles);
const tabDetails= [
  {
    key: "detail",
    display: "WITHDRAWAL DETAILS",
  },
  {
    key: "address",
    display: "CRYPTO ADDRESS",
  },

];

function Details() {
  const [active, setActive] = useState(0);
  const [renderTab, setRenderTab] = useState("detail");

  const handleChangeTab = (index, key) => {
    setActive(index);
    setRenderTab(key);
  };
  return (
    <div className={cx("wrapper")}>
    
    <div className={cx("inner")}>
        <div className={cx("title-block")}>
          {tabDetails.map((item, index) => (
            <div
              onClick={() => handleChangeTab(index, item.key)}
              className={cx("with-title", index === active ? "active" : "")}
              key={index}
            >
              {item.display}
            </div>
          ))}
        </div>
        <div className={cx("message-body")}>
          {renderTab === "detail" ? (
            <Withdrawal />
          ) : renderTab === "address" ? (
            <Address />
          ) : null}
        </div>
      </div>

    </div>
  );
}

export default Details;
