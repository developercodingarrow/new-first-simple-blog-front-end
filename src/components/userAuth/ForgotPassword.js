"use client";

import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./forgotpassword.module.css";
import { forgotPasswordInput } from "@/src/jsonData/authformData";
import { TiMessageTyping } from "../ApplicationIcons";
import SubmitBtn from "../client-components/elements/buttons/SubmitBtn";
import useCustomeAuthForm from "@/src/custome-hooks/useCustomeAuthForm";
import { AppContext } from "@/src/app/_contextApi/AppContext";
import { userForgotPasswordAction } from "@/src/app/utils/userAuthaction";

export default function ForgotPassword() {
  const { isBtnLoadin, setisBtnLoadin } = useContext(AppContext);

  const { renderInput, handleSubmit, updatedInputs, isValid, errors } =
    useCustomeAuthForm(forgotPasswordInput, "forgotPassword");

  const handleForm = async (data) => {
    try {
      setisBtnLoadin(true);
      const res = await userForgotPasswordAction(data);

      if (res.error) {
        toast.error(res.error);
        setisBtnLoadin(false);
        return;
      }
      // Proceed if there is no error and res.data exists
      if ((res.data.status = "success")) {
        toast.success(res.data.message);
      }
      setisBtnLoadin(false);
    } catch (error) {
      setisBtnLoadin(false);
    }
  };
  return (
    <div className={styles.flex_container}>
      <Toaster />
      <div className={styles.inner_container}>
        <div className={styles.box_header}>
          <div className={styles.header_iconr}>
            <TiMessageTyping />
          </div>
          <div className={styles.header_text}>
            <h1>Forgot Password</h1>
            <h3>you will get a OTP via Mail</h3>
          </div>
        </div>
        <div className={styles.opt_form_container}>
          <form onSubmit={handleSubmit(handleForm)}>
            <div className={styles.form_input_wrapper}>
              {updatedInputs.map((input, index) => {
                return (
                  <div key={index}>
                    {renderInput(input)}
                    {errors[input.name] && (
                      <span className={"input_errors"}>
                        {errors[input.name].message}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
            <div className={styles.submit_btn_wrapper}>
              <SubmitBtn
                btnText="Send OPT"
                disabled={!isValid}
                btnLoading={isBtnLoadin}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
