import React from "react";
import classNames from "classnames/bind";
import styles from "./Ios.module.scss";
import images from "~/constants/imagePromosMobile";
import { Link } from "react-router-dom";
export const fetchGame = [
  {
    id: 1,
    img: images.ios1,
    link: "#",
  },
  {
    id: 2,
    img: images.ios2,
    link: "#",
  },
  {
    id: 3,
    img: images.ios3,
    link: "#",
  },
  {
    id: 4,
    img: images.ios4,
    link: "#",
  },
  {
    id: 5,
    img: images.ios5,
    link: "#",
  },
  {
    id: 6,
    img: images.ios6,
    link: "#",
  },
  {
    id: 7,
    img: images.ios7,
    link: "#",
  },
  {
    id: 8,
    img: images.ios8,
    link: "#",
  },
  
];

const cx = classNames.bind(styles);

function Ios() {
  return (
    <div className={cx("wrapper")}>
      {fetchGame.map((item) => (
        <Link to={item.link} key={item.id} className={cx("link")}>
          <img src={item.img} alt="" className={cx("img")} />
        </Link>
      ))}
    </div>
  );
}

export default Ios;
