import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./MemberTab.module.scss";
import {
  bankingTab,
  myAccount,
} from "../../constants/mock-member/dataMemberTab";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function MemberTab(props) {
  const { data } = props;
  const [active, setActive] = useState(props.positionActive);
  const [activeAccout, setActiveAccout] = useState();

  const handleBankClick = (i) => {
    setActive(i)
    setActiveAccout()
  }
  const handleAccoutClick = (i) => {
    setActiveAccout(i)
    setActive()
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("bank")}>
        <p className={cx("title-banking")}>BANKING</p>
        <div className={cx("bank-block")}>
          {bankingTab.map((item, i) => (
            <li
              key={i}
              className={cx("tab-items", active === i ? "active" : "")}
              onClick={()=> handleBankClick(i)}
            >
              <Link to={item.link} className={cx("item-block")}>
                <div className={cx("item-image")}>
                  <i
                    style={              
                        active === i
                        ? item.imgActive
                        : item.img
                    }
                  />
                </div>
                <div className={cx("item-title")}>{item.title}</div>
              </Link>
            </li>
          ))}
        </div>
      </div>
      <div className={cx("account")}>
        <p className={cx("title-myaccount")}>My Account</p>
        <div className={cx("account-block")}>
          {myAccount.map((item, i) => (
             <li
             key={i}
             className={cx("tab-items", activeAccout === i ? "active" : "")}
             onClick={()=> handleAccoutClick(i)}
           >
            <Link to={item.link} className={cx("item-block")}>
                <div className={cx("item-image")}>
                  <i
                    style={              
                        activeAccout === i
                        ? item.imgActive
                        : item.img
                    }
                  />
                </div>
              <div className={cx("item-title")}>{item.title}</div>
            </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MemberTab;
