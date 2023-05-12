import React, { useEffect } from "react";
import { useNavigate, Outlet, Link, useLocation } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Member.module.scss";
import MemberTab from "~/components/MemberTab/MemberTab";
import images from "~/constants/imagesMember";
import { IoEllipsisVertical } from "react-icons/io5";
import { AiOutlineRight } from "react-icons/ai";
import { GrRotateRight } from "react-icons/gr";
import { useContext } from "react";
import { Store } from "~/Store.js";
const cx = classNames.bind(styles);

function Member() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { userInfo } = state

  useEffect(() => {
    if (pathname === "/member") {
      navigate(`deposit`);
    }
  }, [pathname]);

  return (
    <div className={cx("member-wrapper")}>
      <div className={cx("container")}>
        <div className={cx("banner-block")}>
          <div className={cx("normal")}>
            <div className={cx("image")}>
              <img src={images.normal} className={cx("img")} />
            </div>
            <div className={cx("wel")}>
              <div className={cx("wel-block")}>
                <p className={cx("title")}>NORMAL</p>
                <IoEllipsisVertical
                  style={{ marginTop: "1px", fontSize: "26px" }}
                />
                <div className={cx("block-img")}>
                  <img src={images.coin} className={cx("img-coin")} />
                  <p className={cx("p")}>{`>100`}</p>
                </div>
              </div>
              <p className={cx("name")}>Welcom</p>
            </div>
          </div>
          {/* //////////////// */}
          <div className={cx("main-wallet")}>
            <div className={cx("myr")}>
              <p className={cx("mw")}>Main wallet</p>
              <p className={cx("my")}>MYR {userInfo.balance}</p>
            </div>
            <div className={cx("restore")}>
              <div className={cx("img-s")}>
                <img src={images.key} alt="" className={cx("img")}/>
              </div>
              <div className={cx("title")}>Restore</div>
            </div>
            <div className={cx("user")}>
              <p className={cx("user-title")}>User Verification</p>
              <div className={cx("img-block")}>
                <div>
                  <img src={images.user} className={cx("img-user")} />
                </div>
                <div>
                  <img src={images.mail} className={cx("img-mail")} />
                </div>
                <div>
                  <img src={images.phone} className={cx("img-phone")} />
                </div>
                <div>
                  <img src={images.bank} className={cx("img-bank")} />
                </div>
              </div>
              <div className={cx("line-block")}>
                <div className={cx("line")}></div>
                <div className={cx("line")}></div>
                <div className={cx("line")}></div>
                <div className={cx("line")}></div>
              </div>
            </div>
          </div>
          <div className={cx("auto-transfer")}>
            <div>
              <img src={images.iconSmart} className={cx("img-iconSmart")} />
            </div>
            <p className={cx("auto")}>Main Wallet Auto Transfer</p>
            <label className={cx("switch")}htmlFor="checkbox">
              <input type="checkbox" id="checkbox" />
              <div className={cx("slider","round")}></div>
            </label>
          </div>
        </div>
        <div className={cx("block")}>
          <div className={cx("member-tab")}>
            <MemberTab positionActive={0} />
          </div>
          <div className={cx("member-content")}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Member;
