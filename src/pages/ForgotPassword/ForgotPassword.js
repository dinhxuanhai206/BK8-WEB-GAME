import React, { useState } from "react";
import className from "classnames/bind";
import styles from "./ForgotPassword.module.scss";
import md5 from "md5";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import * as userService from "~/services/userService";
import { result } from "lodash";
import {AiFillCloseCircle} from "react-icons/ai"

const cx = className.bind(styles);

function ForgotPassword() {
  const [success, setSuccess] = useState(false);
  const [resultPass, setResultPass] = useState()
  const [modal, setModal] = useState(false);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    mobile: Yup.number()
      .required("Phone is required")
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(10000000, "to short"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const SubmitHandler = async (data) => {
    const result = await userService.forgot(
      data.username,
      data.email,
      data.mobile
    );
    if (result?.status === 0) {
        console.log(result.msg);
     
        setResultPass(result.msg)
    }
    setModal(true);
};




  return (
    <div className={cx("wrapper")}>
      {modal ? <div className={cx("modal")}>
        <AiFillCloseCircle className={cx("icon-close")} onClick={() => setModal(false)}/>
        {resultPass}</div> : ""}
      <div className={cx("inner")}>
        <div className={cx("left")}>
          <div className={cx("left-content")}>
            Enter your registered email address to reset your password
          </div>
        </div>
        <div className={cx("right")}>
          <div className={cx("right-title")}>Reset your password</div>
          <div className={cx("right-form")}>
            <form onSubmit={handleSubmit(SubmitHandler)}>
              <div className={cx("form-item")}>
                <label>Username</label>
                <span>*&nbsp;</span>
                <input name="username" type="text" {...register("username")} />
              </div>
              <div className={cx("form-item")}>
                <label>Email</label>
                <span>*&nbsp;</span>
                <input name="email" type="text" {...register("email")} />
              </div>
              <div className={cx("form-item")}>
                <label>Contact Number</label>
                <span>*&nbsp;</span>
                <Controller
                  control={control}
                  name="mobile"
                  render={({
                    field: { ref, ...field },
                    formState: { errors },
                  }) => (
                    <>
                      <PhoneInput
                        {...field}
                        className={cx("form-item-number")}
                        country={"vn"}
                        placeholder="Enter phone number"
                        countryCodeEditable={true}
                      />
                    </>
                  )}
                />
              </div>
              <div className={cx("btn-wrapper")}>
                <button
                  type="submit"
                  className={cx(
                    "button",
                    errors.username || errors.email || errors.mobile
                      ? "disabled"
                      : ""
                  )}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
