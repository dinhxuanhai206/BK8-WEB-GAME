import React, { useContext, useReducer } from 'react'
import className from "classnames/bind"
import styles from "./RegisterFormMobile.module.scss"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Store } from '~/Store'
import md5 from 'md5'
import axios from 'axios'
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react'
import { getError } from "~/utils"
import { toast } from "react-toastify"
import * as userService from '~/services/userService'

const cx = className.bind(styles);

function Step2({ step, setStep }) {
    const { isLoading, error: visitorError, data: visitorData } = useVisitorData();
    const { state, dispatch: ctxDispatch } = useContext(Store)
    const { userInfo, registerData } = state

    const validationSchema = Yup.object().shape({
        fullName: Yup.string()
            .required('Full name is required'),
        nickName: Yup.string(),
        dob: Yup.string()
            .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        mobile: Yup.number()
            .required('Phone is required')
            .typeError("That doesn't look like a phone number")
            .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .min(10000000, "to short")
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    const { control, register, formState: { errors }, handleSubmit } = useForm(formOptions);

    const handleNextSteps = async (data) => {
        var mergeData = { ...registerData, ...data }
        ctxDispatch({ type: 'UPDATE_REG_DATA', payload: mergeData })
        localStorage.setItem('registerData', JSON.stringify(mergeData))
        const result = await userService.register(mergeData, visitorData?.visitorId)
        if (result?.status===0){
            setStep(step + 1)
        }
    }

    return (
        <form onSubmit={handleSubmit(handleNextSteps)}>
            <div className={cx('form-item')}>
                <span className={cx('title')}>- CONTACT DETAILS -</span>
            </div>
            <div className={cx('form-item')}>
                <input name="email" placeholder='Email Address' type="text" {...register('email')} />
            </div>
            <div className={cx('form-item')}>
                <Controller
                    control={control}
                    name="mobile"
                    /* rules={{
                        required: {value:true, message:'Number phone is required'},
                        min: {value: 8, message:'Min 8'}
                      }} */
                    render={({ field: { ref, ...field }, formState:{errors} }) => (
                        <>
                            <PhoneInput
                                {...field}
                                /* inputExtraProps={{
                                    ref,
                                    required: true,
                                    autoFocus: true,
                                    min:8
                                }} */
                                className={cx('form-item-number')}
                                country={'vn'}
                                placeholder="Enter phone number"
                                countryCodeEditable={true}
                            />
                        </>
                    )}
                />
            </div>
            <div className={cx('form-item')}>
                <input name="fullName" placeholder='Full Name' type="text" {...register('fullName')} />
            </div>
            <div className={cx('form-item')}>
                <input name="nickName" placeholder='Nick Name' type="text" {...register('nickName')} />
            </div>
            <div className={cx('form-item')}>
                <span className={cx('desc')}>Date of birthday</span>
            </div>
            <div className={cx('form-item')}>
                <input name="dob" type="date" {...register('dob')} />
            </div>
            <div className={cx('form-item','verify')}>
                <span>By clicking the REGISTER button, I hereby acknowledge that I am above 18 years old and have read and accepted your terms & conditions.</span>
            </div>
            {step !== 3 ?
                <div className={cx('register__button')}>
                    <button type="submit" className={cx('next', errors.fullName || errors.email || errors.mobile ? 'disabled' : '')} >
                        REGISTER
                    </button>
                </div> : null
            }
        </form>
    )
}

export default Step2