import { useContext, useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useTranslation, Trans } from 'react-i18next'
import md5 from 'md5'
import axios from 'axios'
import { toast } from 'react-toastify'
import classNames from "classnames/bind";

import styles from "./Login.module.scss";
import { Store } from '~/Store'
import { getError } from '~/utils'
import images from "~/constants/imagePromosMobile";
import * as userService from '~/services/userService'

const cx = classNames.bind(styles);

function Login() {
  const { t } = useTranslation()
  const { search } = useLocation()
  const redirectInUrl = new URLSearchParams(search).get('redirect')
  const redirect = redirectInUrl ? redirectInUrl : '/deposit'

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required')
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState: { errors }, reset } = useForm(formOptions)

  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { userInfo } = state

  const navigate = useNavigate()


  const LoginHandler = async (formData) => {
    let username = formData?.username
    let password = formData?.password
    let balance, promotionList
    const result = await userService.login(username, password)
    if (result?.status === 0) {
      const resultBalance = await userService.getBalance(username)
      if (resultBalance?.status === 0) {
        balance = resultBalance.balance
      }
      const resultPromo = await userService.getPromotionList(userInfo?.username);
      if (resultPromo?.status === 0) {
        promotionList = resultPromo.data
      }
      const data = { username: result.username, token: result.token, balance, promotionList }
      ctxDispatch({ type: 'USER_SIGNIN', payload: data })
      localStorage.setItem('userInfo', JSON.stringify(data))
      navigate(redirect || '/member-settings/deposit')
    }
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("logo")}>
        <img src={images.logoBK} alt="" className={cx("img-logo")} />
      </div>
      <form className={cx("content")} onSubmit={handleSubmit(LoginHandler)}>
        <div className={cx("username")}>
          <div>
            <FaRegUser
              style={{
                fontSize: "30px",
                color: "gray",
                marginTop: "5px",
              }}
            />
          </div>
          <div className={cx("input")}>
            <input
              id="username"
              {...register("username", { required: true })}
              className={cx('login-username')}
              placeholder={t('username')}
            />
          </div>
        </div>
        <div className={cx("pass")}>
          <div>
            <IoKeyOutline
              style={{
                fontSize: "30px",
                color: "gray",
                marginTop: "5px",
              }}
            />
          </div>
          <div className={cx("input")}>
            <input
              id="password"
              {...register('password')}
              type="password"
              className={cx('login-password')}
              placeholder={t('password')}
            />
          </div>
        </div>
        <div className={cx("check")}>
          <div className={cx("input")}>
            <input type="checkbox" />
          </div>
          <span className={cx("text")}>Keep Me Logged In</span>
        </div>
        <button className={cx("btn-login")}>LOGIN</button>
        <Link to="/reset" className={cx("link")}>Forget Password?</Link>
      </form>
      <div className={cx("register")}>
        Do not have an account yet? Click <Link to="/mregister" className={cx("link")}>HERE </Link>to register.
      </div>

    </div>
  );
}

export default Login;
