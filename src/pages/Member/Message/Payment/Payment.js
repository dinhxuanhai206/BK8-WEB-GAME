import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Payment.module.scss";
import { dataPayment } from "~/constants/mock-member/dataPayment";
import {
  AiOutlineDoubleRight,
  AiOutlineRight,
  AiOutlineLeft,
  AiOutlineDoubleLeft,
} from "react-icons/ai";
import images from "~/constants/imagesMember";

const cx = classNames.bind(styles);

function Payment() {
  const [active, setActive] = useState("1");
  const [list, setList] = useState(dataPayment);
  const [listFlag, setListFlag] = useState([]);
  const [flag, setFlag] = useState();
  const [toggleFlag, setToggleFlag] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setActive(event.target.id);
  };
  const handleRemove = (id) => {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  };
  const handleFlag = (id) => {
    //setFlag(!flag);
    const temp = []
    const index = listFlag.indexOf(id)
    if (index > -1){
      listFlag.splice(index, 1)
      setListFlag(listFlag)
    }else{
      temp.push(...listFlag, id)
      setListFlag(temp)
    }
  };
  
  const renderFlag = (id) => {
    const index = listFlag.indexOf(id)
    if (index > -1){
      return(<img src={images.flagRed} className={cx("img-flg")} />)
    }else{
      return(<img src={images.flag} className={cx("img-flg")} />)
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div>
        {list.map((item, i) => (
          <div className={cx("block")} key={item.id}>
            <div className={cx("check")}>
              <input
                type="checkbox"
                defaultChecked={checked}
                onChange={() => setChecked(!checked)}
              />
            </div>
            <div className={cx("date")}>{item.Date}</div>
            <div className={cx("subject")}>{item.Subject}</div>
            <div className={cx("remark")}>
              <div onClick={() => handleFlag(item.id)}>
                {renderFlag(item.id)}
              </div>
              <div>
                <img
                  src={images.secDelete}
                  className={cx("img-delete")}
                  onClick={() => handleRemove(item.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={cx("block-button")}>
        <button className={cx("btn", "doubleLeft")}>
          <AiOutlineDoubleLeft />
        </button>
        <button className={cx("btn", "eft")}>
          <AiOutlineLeft />
        </button>
        <button
          key={1}
          className={cx("btn1", active === "1" ? "active" : "")}
          id={"1"}
          onClick={handleChange}
        >
          1
        </button>
        <button
          key={2}
          className={cx("btn1", active === "2" ? "active" : "")}
          id={"2"}
          onClick={handleChange}
        >
          2
        </button>
        <button className={cx("btn", "doubleRight")}>
          <AiOutlineRight />
        </button>
        <button className={cx("btn", "Right")}>
          <AiOutlineDoubleRight />
        </button>
      </div>
    </div>
  );
}

export default Payment;
