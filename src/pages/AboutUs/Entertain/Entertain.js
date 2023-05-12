import React from "react";
import classNames from "classnames/bind";
import styles from "./Entertain.module.scss";

const cx = classNames.bind(styles);

function Entertain() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>Built To Entertain</div>
      <p className={cx("content")}>
        Our members’ entertainment is our top priority. It’s simple, really. We
        want our members to have endless fun here at BK8. To do so, we provide
        only the best by following a simple guideline – putting our members{" "}
        <strong className={cx("fi")}>F.I.R.S.T</strong>{" "}
      </p>
      <p className={cx("title-item")}>
        <strong className={cx("fi")}>F</strong>ast
      </p>
      <p className={cx("content")}>
        BK8 has one of the fastest transaction process. All types of
        transactions are to be completed within 15 minutes or less, for the time
        being, as we are constantly trying to decrease transaction time and
        increase fun times.{" "}
      </p>
      <p className={cx("title-item")}>
        <strong className={cx("fi")}>I</strong>nnovative
      </p>
      <p className={cx("content")}>
        Rest assured that all products on BK8 are of the newest and the hottest.
        Apart from that, we are always enhancing and updating the website to
        maintain a consistent and easy-to-navigate platform with the latest,
        most innovative features.
      </p>
      <p className={cx("title-item")}>
        <strong className={cx("fi")}>R</strong>ewarding
      </p>
      <p className={cx("content")}>
      We understand that the odds might not always be in your favour, which is why we make sure you always get something back. BK8 offers the best rebates for all types of games, continuously. Again, we appreciate your confidence in us as your entertainment provider and we would like to show our thanks through our rebates and rewards.
      </p>
      <p className={cx("title-item")}>
        <strong className={cx("fi")}>S</strong>ecure
      </p>
      <p className={cx("content")}>
      We built the website to be user-friendly and stimulating, but more importantly – safe and secure. BK8 takes extra precaution and necessary security measures to protect member’s personal information and privacy. So, rest assured that the information you provided are kept safely in our database while you’re playing your favourite game.
      </p>
      <p className={cx("title-item")}>
        <strong className={cx("fi")}>T</strong>ransparent 
      </p>
      <p className={cx("content")}>
      Your continuous support is what drives us to do more and to serve you better. Because,  ‘Honesty is the best policy’, we keep all process simple and transparent – meaning there’s no surprises, no hidden fees and no confusing jargon. Everything is as it is.
      </p>
      <p className={cx("content")}>
      In times when you need any kind of clarification, please feel free to contact our 24-hour Customer Service teams situated in multiple locations. We are always ready to answer questions and address inquiries in a timely manner.
      </p>
      
    </div>
  );
}

export default Entertain;
