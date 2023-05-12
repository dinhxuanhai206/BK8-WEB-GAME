import React, { useContext, useState } from 'react'
import className from "classnames/bind"
import styles from "./RegisterFormMobile.module.scss"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import images from '~/constants/images';
import 'tippy.js/dist/tippy.css'
import { Store } from '~/Store.js';

const cx = className.bind(styles);

function Step1({ step, setStep }) {
    const [isShow, setIsShow] = useState(false)
    const { state, dispatch: ctxDispatch } = useContext(Store)

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Username is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, formState: { errors }, handleSubmit } = useForm(formOptions);

    const handleNextSteps = (data) => {
        ctxDispatch({ type: 'UPDATE_REG_DATA', payload: data })
        localStorage.setItem('registerData', JSON.stringify(data))
        setStep(2)
    }

    return (
        <form onSubmit={handleSubmit(handleNextSteps)}>
            <div className={cx('form-item')}>
                <span className={cx('title')}>- Login Info -</span>
            </div>
            <div className={cx('form-item')}>
                <input placeholder='Username' {...register("username", { required: true })} />
            </div>
            <div className={cx('form-item')}>
                <input placeholder='Password' name="password" type="password" {...register('password')} />
            </div>
            <div className={cx('form-item')}>
                <input placeholder='Confirm Password' name="confirmPassword" type="password" {...register('confirmPassword')} />
            </div>
            <div className={cx('form-item', 'option')} onClick={() => setIsShow(!isShow)}>
                <img src={images.rCollapse} alt='asd' className={cx(isShow && 'isShow')} >
                </img>
                <span style={{ cursor: 'pointer' }} >(Optional if available)
                </span>
            </div>
            <div className={cx('form-item')}>
                {isShow && <input {...register("referral", { required: false })} placeholder="Affiliate ID / Referral ID" />}
            </div>
            <div className={cx('form-item','verify')}>
                <span>By clicking the REGISTER button, I hereby acknowledge that I am above 18 years old and have read and accepted your terms & conditions.</span>
            </div>
            {step !== 3 ?
                <div className={cx('register__button')}>
                    <button type="submit" className={cx('next', errors.username || errors.password || errors.confirmPassword ? 'disabled' : '')} >
                        REGISTER
                    </button>
                </div> : null
            }
        </form>
    )
}

export default Step1