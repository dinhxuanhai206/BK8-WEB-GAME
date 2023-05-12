import React, { useContext, useEffect, useRef, useState } from 'react'
import className from "classnames/bind"
import styles from "./RegisterForm.module.scss"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import images from '~/constants/images';
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { Store } from '~/Store.js';

const cx = className.bind(styles);

function Step1({ step, setStep }) {
    const [isShow, setIsShow] = useState(false)
    const { state, dispatch: ctxDispatch } = useContext(Store)

    const ref = useRef(null)

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

    useEffect(() => {
        ref.current.click()
    }, [])

    return (
        <form onSubmit={handleSubmit(handleNextSteps)}>
            <div className={cx('form-item')}>
                <label>Username</label>
                <span>*&nbsp;</span>
                <input {...register("username", { required: true })}/>
                <div className={cx('show-error')}>
                    {errors.username ?
                        <Tippy content={errors.username?.message} placement='right'>
                            <img src={images.error} alt='error' />
                        </Tippy>
                        : <img src={images.success} alt='success' />
                    }
                </div>
            </div>
            <div className={cx('form-item')}>
                <label>New Password</label>
                <span>*&nbsp;</span>
                <input name="password" type="password" {...register('password')} />
                <div className={cx('show-error')}>
                    {errors.password ?
                        <Tippy content={errors.password?.message} placement='right'>
                            <img src={images.error} alt='error' />
                        </Tippy>
                        : <img src={images.success} alt='success' />
                    }
                </div>
            </div>
            <div className={cx('form-item')}>
                <label>Confirm Password</label>
                <span>*&nbsp;</span>
                <input name="confirmPassword" type="password" {...register('confirmPassword')} />
                <div className={cx('show-error')}>
                    {errors.confirmPassword ?
                        <Tippy content={errors.confirmPassword?.message} placement='right'>
                            <img src={images.error} alt='error' />
                        </Tippy>
                        : <img src={images.success} alt='success' />
                    }
                </div>
            </div>
            <div className={cx('form-item')}>
                <label style={{ cursor: 'pointer' }} onClick={() => setIsShow(!isShow)}>Affiliate ID/Referral&nbsp;&nbsp;
                    <img src={images.rCollapse} alt='asd' className={cx(isShow && 'isShow')}></img>
                </label>
                <span></span>
                {isShow && <input {...register("referral", { required: false })} />}
            </div>
            {step !== 3 ?
                <div className={cx('register__button')}>
                    <button type="submit" ref={ref} className={cx('next', errors.username || errors.password || errors.confirmPassword ? 'disabled' : '')} >
                        REGISTER
                    </button>
                </div> : null
            }
        </form>
    )
}

export default Step1