import react, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./FrizesMobile.module.scss";
import { dataTabMobile } from "~/constants/mock-leaderboard/dataTab";
import TabRankMobile from "../CheckRankMobile/TabRankMobile/TabRankMobile";
import images from "~/constants/Leaderboard/leaderBoardImages";
import { AiOutlineClose } from "react-icons/ai";
import { prizesTableRankDataMobile } from "~/constants/mock-leaderboard/prizesTableRankData";

const cx = classNames.bind(styles);

function FrizesMobile() {
  const [data, setData] = useState(prizesTableRankDataMobile);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [num, setNum] = useState("");
  const [popurImg, setPopurImg] = useState("");
  const handleClick = (name, number, img) => {
    setOpen(true);
    setTitle(name);
    setNum(number);
    setPopurImg(img);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={cx("wrapper-frizes")}>
      <div className={cx("top")}>
        <TabRankMobile data={dataTabMobile} />
      </div>
      <div className={cx("container")}>
        {open && (
          <div className={cx("img-info")}>
            <div className={cx("block-image")}>
              <AiOutlineClose
                className={cx("img-infoClose")}
                onClick={() => setOpen(false)}
              />
              <div className={cx("clock")}>
                <img src={popurImg} className={cx("img-clock")} />
              </div>
              <p className={cx("tt")}>{num} Prizes</p>
              <p className={cx("text")}>{title}</p>
              <div>
                <button className={cx("btn-close")} onClick={handleClose}>
                  close
                </button>
              </div>
            </div>
          </div>
        )}
        <div className={cx("table-wrapper")}>
          <div className={cx("tr1")}>
            <div className={cx("div1")}>RANK</div>
            <div className={cx("div2")}>FRIZE NAME</div>
            <div className={cx("div3")}>FRIZES</div>
          </div>

          {data.map((item, index) => (
            <div key={index} className={cx("tr2")}>
              <div className={cx("number")}>{item.number}</div>

              {item.prizesName.length > 22 ? (
                 <marquee className={cx("username")}>{item.prizesName}</marquee>
              ) : (
                <div className={cx("username")}>{item.prizesName}</div>
              )}
              <div
                className={cx("prizes-img")}
                onClick={() =>
                  handleClick(item.prizesName, item.number, item.img)
                }
              >
                Prizes info
              </div>
              <div className={cx("pris")}>
                <img src={item.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FrizesMobile;
