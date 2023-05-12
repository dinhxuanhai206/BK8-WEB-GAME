import React, { useContext, useEffect, useReducer, useState } from "react"
import className from "classnames/bind"
import styles from "./RegisterFormMobile.module.scss"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"

const cx = className.bind(styles);

function RegisterFormMobile({ step, setStep }) {

    const stepHandler = (newStep) => {
        if (newStep < 3 && step === 3) {
            setStep(newStep)
        }else if (newStep < 2 && step === 2) {
            setStep(newStep)
        }
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('register-wrapper')}>
                <div className={cx('progress_bar')}>
                    <hr></hr>
                    <span className={cx('step', 'step-1', step === 1 && 'active')} onClick={()=>stepHandler(1)}>
                        1
                    </span>
                    <span className={cx('step', 'step-2', step === 2 && 'active')} onClick={()=>stepHandler(2)}>
                        2
                    </span>
                    <span className={cx('step', 'step-3', step === 3 && 'active')} style={{ background: step === 3 && '#00c14a' }}>
                        ✔
                    </span>
                </div>
                <div className={cx('form')}>
                    {step === 1 ?
                        <Step1 {...{ step, setStep }} />
                        :
                        step === 2 ?
                            <Step2 {...{ step, setStep }} />
                            : <Step3 {...{ step, setStep }} />
                    }
                </div>
            </div>
        </div>
    )
}

export default RegisterFormMobile