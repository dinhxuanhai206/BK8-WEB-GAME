import React, {useState} from "react";
import classNames from "classnames/bind";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import * as userService from "~/services/userService";
import styles from "./ForgotPasswordMobile.module.scss";
import {AiFillCloseCircle} from "react-icons/ai"

const cx = classNames.bind(styles);

const ForgotPasswordMobile = () => {
  const [resultPass, setResultPass] = useState();
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

      setResultPass(result.msg);
    }
    setModal(true);
  };
  return (
    <div className={cx("wrapper")}>
      {modal ? (
        <div className={cx("modal")}>
          <AiFillCloseCircle
            className={cx("icon-close")}
            onClick={() => setModal(false)}
          />
          {resultPass}
        </div>
      ) : (
        ""
      )}
      <div className={cx("title")}>
        Enter your registered details to reset your password
      </div>
      <form onSubmit={handleSubmit(SubmitHandler)}>
        <label className={cx("lable")}>
          Username <span>*</span>
        </label>
        <div className={cx("block-input")}>
          <input
            placeholder="Username"
            name="username"
            className={cx("input")}
            {...register("username")}
          />
        </div>
        <label className={cx("lable")}>
          Email <span>*</span>
        </label>
        <div className={cx("block-input")}>
          <input
            placeholder="Email Address"
            name="email"
            className={cx("input")}
            {...register("email")}
          />
        </div>
        <p className={cx("or")}>OR</p>
        <label className={cx("lable")}>
          Contact Number <span>*</span>
        </label>
        <div className={cx("form-item")}>
          <Controller
            control={control}
            name="mobile"
            render={({ field: { ref, ...field }, formState: { errors } }) => (
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
        <div className={cx("submit")}>
          <button className={cx("btn-submit")}> Submit </button>
        </div>
      </form>
    </div>
  );
};
export default ForgotPasswordMobile;
