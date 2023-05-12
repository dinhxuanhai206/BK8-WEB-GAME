import React,{useContext} from "react";
import { Store } from "~/Store";
import classNames from "classnames/bind";
import styles from "./SoccerMobile.module.scss";
import images from "~/constants/images";

const cx = classNames.bind(styles);

const SoccerMobile = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  return (
    <React.Fragment>
    {!userInfo ? (<div className="container">
    <div className={cx("wrapper")}>
      <p className={cx("title")}>Official Global & Betting Partners</p>
      <p className={cx("title-club")}>CLUB SPONSOR</p>
      <div className={cx("football")}>
        <div className={cx("item")}>
          <div className={cx("img-logo")}>
            <img src={images.hudder} alt="" className={cx("logo")} />
          </div>
          <div className={cx("div-text")}>
            <div className={cx("name")}><p>Huddersfield</p>
            <p>Town A.F.C</p></div>
            <p className={cx("texts")}>Official Global Partner</p>
            <p className={cx("date")}>2021/22</p>
          </div>
        </div>
        {/* ///////////////////////// */}
        <div className={cx("item")}>
          <div className={cx("img-logo")}>
            <img src={images.valencia} alt="" className={cx("logo")} />
          </div>
          <div className={cx("div-text")}>
            <p className={cx("name")}>Valencia CF</p>
            <p className={cx("text")}>
              Official Asian Betting Partner
            </p>
            <p className={cx("date")}>2021/22</p>
          </div>
        </div>
        {/* ///////////////////////// */}
        <div className={cx("item")}>
          <div className={cx("img-logo")}>
            <img src={images.athletic} alt="" className={cx("logo")} />
          </div>
          <div className={cx("div-text")}>
            <p className={cx("name")}>Athletic Club</p>
            <p className={cx("text")}>
              Official Asian Betting Partner 
            </p>
            <p className={cx("date")}>2021/22</p>
          </div>
        </div>
        {/* ///////////////////////// */}
        <div className={cx("item")}>
          <div className={cx("img-logo")}>
            <img src={images.villarreal} alt="" className={cx("logo")} />
          </div>
          <div className={cx("div-text")}>
            {" "}
            <p className={cx("name")}>Villarreal CF</p>
            <p className={cx("text")}>
              Official Asian Betting Partner
            </p>
            <p className={cx("date")}>2021/22</p>
          </div>
        </div>
        {/* ////////////////////////// */}
        <div className={cx("item")}>
          <div className={cx("img-logo")}>
            <img src={images.elche} alt="" className={cx("logo")} />
          </div>
          <div className={cx("div-text")}>
            <p className={cx("name")}>Elche CF</p>
            <p className={cx("text")}>
              Official Asian Betting Partner
            </p>
            <p className={cx("date")}>2021/22</p>
          </div>
        </div>
        {/* ////////////////////////// */}
        <div className={cx("item")}>
          <div className={cx("img-logo")}>
            <img src={images.mallorca} alt="" className={cx("logo")} />
          </div>
          <div className={cx("div-text")}>
            <p className={cx("name")}>RCD Mallorca</p>
            <p className={cx("text")}>
              Official Asian Betting Partner
            </p>
            <p className={cx("date")}>2021/22</p>
          </div>
        </div>
      </div>
    </div>
  </div>) : null}
 </React.Fragment>
  );
};

export default SoccerMobile;
