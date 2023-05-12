import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Prizes.module.scss";
import TabRank from "../CheckRank/TabRank/TabRank";
import { dataTab } from "~/constants/mock-leaderboard/dataTab";
import prizesTableRankData from "~/constants/mock-leaderboard/prizesTableRankData";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import images from "~/constants/Leaderboard/leaderBoardImages";
import { number } from "yup";
const cx = classNames.bind(styles);

const Prizes = () => {
  const [data, setData] = useState(prizesTableRankData);
  const [title, setTitle] = useState('');
  const [num, setNum] = useState('');
  const [popurImg, setPopurImg] = useState('');
  const [open, setOpen] = useState(false);
  const handleClick = (name, number, img) => {
    setOpen(true);
    setTitle(name)
    setNum(number)
    setPopurImg(img)
  };


  return (
    <div >
      <div className={cx("wrapper-block")}>
        <div className={cx("tabRank")}>
          <TabRank data={dataTab} />
        </div>

        <div className={cx("wrapper")}>
          {open && (
            <div className={cx("img-info")}>
              <div className={cx("block-image")}>
                <AiOutlineClose
                  className={cx("img-infoClose")}
                  onClick={() => setOpen(false)}
                />
                <div>
                  <img src={popurImg} className={cx("img-clock")} />
                </div>
                <p className={cx("tt")}>{num} Prizes</p>
                <p className={cx("text")}>{title}</p>
                <div>
                  <button className={cx("btn-close")} onClick={()=> setOpen(false)}>
                    close
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className={cx("block")}>
            <div className={cx("monthly")}>
              <button className={cx("btn-monthly")}>HÀNG THÁNG</button>
            </div>
            <div className={cx("date")}>
              <div className={cx("month")}>
                <select className={cx("month-select")}>
                  <option>January</option>
                  <option>February</option>
                  <option>Match</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
              <div className={cx("year")}>
                <select className={cx("year-select")}>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                </select>
              </div>
            </div>
          </div>
          <div className={cx("table-wrapper")}>
            <div className={cx("tr1")}>
              <div className={cx("div1")}>Hạng</div>
              <div className={cx("div2")}>Tên Giải Thưởng</div>
              <div className={cx("div3")}>Thông Tin Giải Thưởng</div>
            </div>

            {data.map((item, index) => (
              <div key={index} className={cx("tr2")}>
                <div className={cx("number")}>{item.number}</div>

                <div className={cx("username")}>{item.prizesName}</div>
                <div className={cx("prizesInfo")}>
                  <img src={item.prizes} alt="" className={cx("image")} />
                </div>
                <div className={cx("prizes-img")} onClick={()=> handleClick(item.prizesName, item.number, item.img)}>
                  Prizes info
                </div>
                <div className={cx('pris')}>
                  <img src={item.img} alt=""/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
