import React from "react";
import classNames from 'classnames/bind'
import { Link } from "react-router-dom";
import images from "../../constants/images";
import styles from "./Vip.module.scss";
// import { dataItem } from "~/constants/dataItem";
const cx = classNames.bind(styles);
function Vip() {
    return (
        <header className={cx("content")}>

            <div className={cx("banner_Vip")}>
                <div className={cx("image_banner")}>
                    <Link to='/#'>
                        <img
                            src={images.imgbanner}
                            alt=""
                            className={cx("img-fluid")}
                        />
                    </Link>
                </div>
                <div className={cx("image_banner")}>
                    <Link to='/#'>
                        <img
                            src={images.imgbanner1}
                            alt=""
                            className={cx("img-fluid")}
                        />
                    </Link>

                </div>
                <div className={cx("image_banner")}>
                    <Link to='/#'>
                        <img
                            src={images.imgbanner2}
                            alt=""
                            className={cx("img-fluid")}
                        />
                    </Link>

                </div>
                <div className={cx("image_banner")}>
                    <Link to='/#'>
                        <img
                            src={images.imgbanner3}
                            alt=""
                            className={cx("img-fluid")}
                        />
                    </Link>

                </div>
            </div>
        </header>
    )
}

export default Vip