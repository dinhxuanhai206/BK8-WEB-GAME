import React, { useState } from "react";
import classNames from 'classnames/bind'
import images from "~/constants/images";
import RegisterForm from "~/components/RegisterForm/RegisterForm";
import styles from "./Register.module.scss";
const cx = classNames.bind(styles);


function Register() {
    const [step, setStep] = useState(1)

    return (
        <div className={cx("wrapper")} style={{minHeight: step === 3 && '675px'}}>
            <div className={cx("form-container")}>
                <div className={cx("top")}>
                    <div className={cx("top__left")}>
                        <div className={cx("top__left-img")}>
                        </div>
                        <div className={cx("top__left-span")}>
                            <img src={images.rSpan} alt='span' />
                        </div>
                    </div>
                    <div className={cx("top__right")}>
                        <div className={cx("top__right-header")}>
                            <span>Create Account</span>
                        </div>
                        <RegisterForm {...{step, setStep}}/>
                        <div className={cx("top__right-footer", step === 3 && 'hidden')}>
                            <span>By clicking the REGISTER button, I hereby acknowledge that I am above 18 years old and have read and accepted your terms & conditions.</span>
                        </div>
                    </div>
                </div>
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
export default Register