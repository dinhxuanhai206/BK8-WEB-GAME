import React, { useState } from "react";
import classNames from 'classnames/bind'
import images from "~/constants/images";
import RegisterFormMobile from "~/components/RegisterFormMobile/RegisterFormMobile";
import styles from "./RegisterMobile.module.scss";
const cx = classNames.bind(styles);


function RegisterMobile() {
    const [step, setStep] = useState(1)

    return (
        <div className={cx("wrapper")} style={{ minHeight: step === 3 && '675px' }}>
            <div className={cx("form-container")}>
                    <RegisterFormMobile {...{ step, setStep }} />
                <div className={cx("bottom", step === 3 && 'hidden')}>
                    <div className={cx("bottom__1")}>
                        <img src={images.rBanner1} alt="banner" />
                    </div>
                    <div className={cx("bottom__2", step === 3 && 'hidden')}>
                        <img src={images.rBanner2} alt="banner2" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegisterMobile