import React, { useContext } from "react";
import classNames from "classnames/bind";
import styles from "./PasswordMobile.module.scss";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import * as userService from "~/services/userService";
import { Store } from "~/Store";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);

function PasswordMobile() {
  const validationSchema = Yup.object().shape({
    oldpass: Yup.number().required("Old password is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    passconf: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  // const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const changePasswordHandler = async (data) => {
    const result = await userService.changePassword(
      userInfo.username,
      data.oldpass,
      data.password,
      data.passconf
    );
    if (result?.status === 0) {
      toast.success(result.msg);

      setTimeout(() => {
        console.log("done timeout");
        ctxDispatch({ type: "USER_SIGNOUT" });
        localStorage.removeItem("userInfo");
        //window.location.href = '/'
        navigate("/");
      }, 2000);
    }
  };
  return (
    <div className={cx("wrapper")}>
      <div>
        <form
          className={cx("form")}
          onSubmit={handleSubmit(changePasswordHandler)}
        >
          <div className={cx("Bank-blog")}>
            <p className={cx("bank-title")}>Current Password*</p>
            <input
              type="password"
              placeholder="Current Password"
              className={cx("input")}
              {...register("oldpass")}
            />
          </div>
          <div className={cx("account-blog")}>
            <p className={cx("account-title")}>New Password*</p>
            <input
              type="password"
              placeholder="New Password"
              className={cx("input")}
              {...register("password")}
            />
          </div>
          <div className={cx("account-no")}>
            <p className={cx("accountno-title")}>Confirm Password*</p>
            <input
              type="password"
              placeholder="Confirm Password"
              className={cx("input")}
              {...register("passconf")}
            />
          </div>
          <div className={cx("save")}>
            <button className={cx("btn-save")}>SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PasswordMobile;
