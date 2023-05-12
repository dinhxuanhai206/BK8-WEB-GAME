import React, { useRef, useState, useContext } from "react";
import classNames from "classnames/bind";
import styles from "./UserInfoMobile.module.scss";
import { Store } from "~/Store";
import { dataInfoMobile } from "~/constants/mockNavHomeMobile/dataUserInfoMobile";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function UserInfoMobile() {
  const [active, setActive] = useState();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  return (
    <React.Fragment>
      {userInfo ? (
        <div className={cx("wrapper")}>
          {dataInfoMobile.map((item, index) => (
            <div
              className={cx("logo-img")}
              onClick={() => setActive(index)}
              key={index}
            >
              <Link to={item.link} className={cx("block")}>
                <i style={active === index ? item.imgActive : item.img} />
                <p className={cx("name")}>{item.name}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : null}
    </React.Fragment>
  );
}

export default UserInfoMobile;
