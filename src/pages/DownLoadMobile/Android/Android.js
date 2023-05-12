import React from "react";
import classNames from "classnames/bind";
import styles from "./Android.module.scss";
import images from "~/constants/imagePromosMobile";
import { Link } from "react-router-dom";
export const fetchGame = [
  {
    id: 1,
    img: images.android1,
    link: "#",
  },
  {
    id: 2,
    img: images.android2,
    link: "#",
  },
  {
    id: 3,
    img: images.android3,
    link: "#",
  },
  {
    id: 4,
    img: images.android4,
    link: "#",
  },
  {
    id: 5,
    img: images.android5,
    link: "#",
  },
  {
    id: 6,
    img: images.android6,
    link: "#",
  },
  {
    id: 7,
    img: images.android7,
    link: "#",
  },
  {
    id: 8,
    img: images.android8,
    link: "#",
  },
  {
    id: 9,
    img: images.android9,
    link: "#",
  },
  {
    id: 10,
    img: images.android10,
    link: "#",
  },
  {
    id: 11,
    img: images.android11,
    link: "#",
  },
  // {
  //   id: 12,
  //   link: "#",
  // },
];

const cx = classNames.bind(styles);

function Android() {
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

export default Android;
