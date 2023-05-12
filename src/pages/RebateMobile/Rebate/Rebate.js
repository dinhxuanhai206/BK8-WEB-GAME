import React from "react";
import classNames from "classnames/bind";
import styles from "./Rebate.module.scss";
import { Store } from "~/Store.js";
import { useContext } from "react";

const cx = classNames.bind(styles);

const Rebate = () => {
    const { state, dispatch: ctxDispatch } = useContext(Store)
  const { userInfo } = state

  return (
    <div className={cx("wrapper")}>
      <div className={cx("last")}>Last update -</div>
      <div className={cx("myr")}>
        MYR <span>{userInfo.balance}</span>{" "}
      </div>
      <button className={cx("btn")}>CLAIM ALL</button>
      <div className={cx("last")}>Last claimed -</div>
    </div>
  );
};
export default Rebate;
