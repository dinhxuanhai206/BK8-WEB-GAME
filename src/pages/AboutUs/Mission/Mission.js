import React from "react";
import classNames from "classnames/bind";
import styles from "./Mission.module.scss";

const cx = classNames.bind(styles);

function Mission() {

  return (
    <div className={cx("wrapper")}>
       <div className={cx("title")}>Our Mission</div>
       <p className={cx("content")}>We aim to be the largest one-stop hub for all online gaming enthusiasts in Asia. Providing access to a wide range of games in sports, casino, slots and many more. </p>
       <p className={cx("content")}>Based in Malta, our team of professionals all around the globe strives to build a fully integrated gaming website using cutting-edge technology. </p>
       <p className={cx("content")}>Our goal is to provide a platform with the most comprehensive gambling selection in hopes of giving members a stress-free environment while they seek to be entertained.</p>
       <p className={cx("content")}> In order to do so, we have eliminated the complexity of traditional casino and replaced it with a more straightforward and streamlined process. Allowing members a quicker access to their desired games without the hassle of complicated transaction procedures.</p>
       <p className={cx("content")}>At BK8, our diverse group of experts work tirelessly to create an innovative website that is both accessible and lifelike. Through ongoing and extensive researches, we are able to expand our knowledge about the industry and learn more about what our customers want, which allow us to improve our services. </p>
       <p className={cx("content")}>BK8 team members are equipped with the latest information needed to innovate and bring an online casino come to life – giving members an experience so real, it is almost as though you’re in an actual casino. Try it out for yourself by joining our real time, real life dealers in our Live Casino. </p>
    </div>
  );
}

export default Mission;
