import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Info.module.scss";
import { Infodata} from "~/constants/mock-member/dataInfo";
import {
  AiOutlineDoubleRight,
  AiOutlineRight,
  AiOutlineLeft,
  AiOutlineDoubleLeft,
} from "react-icons/ai";
import images from "~/constants/imagesMember";

const cx = classNames.bind(styles);

function Info() {
  const [active, setActive] = useState("1");
  const [list, setList] = useState(Infodata);
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setActive(event.target.id);
  };
  const handleDelete = (id) => {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
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
              <div className={cx("img-f")}>
                <img src={images.flag} className={cx("img-flg")} />
              </div>
              <div className={cx("img-d")}>
                <img src={images.secDelete} className={cx("img-delete")}  onClick={() => handleDelete(item.id)}/>
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

export default Info;
