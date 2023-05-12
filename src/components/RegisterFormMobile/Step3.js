import { useEffect, useContext } from 'react'
import className from "classnames/bind"
import styles from "./RegisterFormMobile.module.scss"
import { useNavigate } from 'react-router-dom'
import md5 from 'md5'
import axios from 'axios'
import { getError } from "~/utils"
import { toast } from "react-toastify"
import { Store } from '~/Store'
import images from '~/constants/images'
import * as userService from '~/services/userService'

const cx = className.bind(styles);

function Step3({ step, setStep }) {
    const navigate = useNavigate()
    const { state, dispatch: ctxDispatch } = useContext(Store)
    const { registerData } = state

    useEffect(() => {
        const timer = setTimeout(() => {
            const fetchData = async () => {
                let username = registerData?.username
                let password = registerData?.password
                const result = await userService.login(username, password)
                if (result?.status === 0) {
                    ctxDispatch({ type: 'USER_SIGNIN', payload: result })
                    localStorage.setItem('userInfo', JSON.stringify(result))
                    ctxDispatch({ type: 'REMOVE_REG_DATA' })
                    localStorage.removeItem('registerData')
                    navigate('/deposit')
                }
            }
            fetchData()
        }, 5000);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onClickHandler = () => {
        navigate('/deposit')
    }

    return (
        <div className={cx('step3-wrapper')}>
            <div className={cx('step3-inner')}>
                <div>CONGRATULATION</div>
                <p>Successfully register as a member</p>
                <img src={images.rWelcome} alt="img-welcome"></img>
                <div className={cx('register__button')}>
                    <button onClick={onClickHandler}>
                        DEPOSIT
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Step3