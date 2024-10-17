"use client";

import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import styles from "./otpui.module.css";
import { TiMessageTyping } from "../ApplicationIcons";
import { userotpVerfication } from "@/src/app/utils/userAuthaction";
import SubmitBtn from "../client-components/elements/buttons/SubmitBtn";
import useCustomeAuthForm from "@/src/custome-hooks/useCustomeAuthForm";
import { otpInput } from "@/src/jsonData/authformData";
import { AppContext } from "@/src/app/_contextApi/AppContext";

export default function OTP() {
  const { isBtnLoadin, setisBtnLoadin } = useContext(AppContext);
  const params = useParams();
  const router = useRouter();
  const { otp } = params;
  const { renderInput, handleSubmit, updatedInputs, isValid, errors } =
    useCustomeAuthForm(otpInput, "OTP");

  const handleForm = async (data) => {
    try {
      setisBtnLoadin(true);
      const res = await userotpVerfication(data, otp);

      if (res.error) {
        toast.error(res.error);
        setisBtnLoadin(false);
        return;
      }
      if (res.data.status === "success") {
        toast.success(res.data.message);
        // router.push("/");
        setisBtnLoadin(false);
      }
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
            <h1>Verification</h1>
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
                btnText="Verify"
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
