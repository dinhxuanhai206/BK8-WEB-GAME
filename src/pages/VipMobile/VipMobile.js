import React from "react";
import classNames from 'classnames/bind'
import { Link } from "react-router-dom";
import images from "../../constants/images";
import styles from "./VipMobile.module.scss";
// import { dataItem } from "~/constants/dataItem";
const cs = classNames.bind(styles);
function VipMobile() {
    return (
        <header className={cs("content")}>

            <div className={cs("banner_Vip")}>
                <div className={cs("image_banner")}>
                    <Link to='/#'>
                        <img
                            src={images.imgbanner}
                            alt=""
                            className={cs("img-fluid")}
                        />
                    </Link>
                </div>
                <div className={cs("image_banner")}>
                    <Link to='/#'>
                        <img
                            src={images.imgbanner1}
                            alt=""
                            className={cs("img-fluid")}
                        />
                    </Link>

                </div>
                <div className={cs("image_banner")}>
                    <Link to='/#'>
                        <img
                            src={images.imgbanner2}
                            alt=""
                            className={cs("img-fluid")}
                        />
                    </Link>

                </div>
                <div className={cs("image_banner")}>
                    <Link to='/#'>
                        <img
                            src={images.imgbanner3}
                            alt=""
                            className={cs("img-fluid")}
                        />
                    </Link>

                </div>
            </div>
        </header>
    )
}

export default VipMobile