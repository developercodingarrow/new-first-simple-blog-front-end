"use client";

import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import styles from "../css/otpui.module.css";
import { TiMessageTyping } from "../../../components/ApplicationIcons";
import { otpInput } from "@/src/jsonData/authformData";
import useCustomeAuthForm from "@/src/custome-hooks/useCustomeAuthForm";
import SubmitBtn from "@/src/components/client-components/elements/buttons/SubmitBtn";
import { otpVerfication } from "@/src/Actions/userActions/userAuthAction";
import { AppContext } from "@/src/contextApi/AppcontextApi";

import { userotpVerfication } from "@/src/app/utils/userAuthaction";

export default function OTP() {
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
  const params = useParams();
  const router = useRouter();
  const { otp } = params;
  const { renderInput, handleSubmit, updatedInputs, isValid, errors } =
    useCustomeAuthForm(otpInput, "OTP");

  const handleForm = async (data) => {
    try {
      setisBtnLoading(true);
      const res = await userotpVerfication(data, otp);
      console.log(res);
      if (res.data.status === "success") {
        setisBtnLoading(false);
        toast.success(res.data.message);
        router.push("/");
      }

      if (res.data.error) {
        setisBtnLoading(false);
        console.log("error");
      }
    } catch (error) {
      setisBtnLoading(false);
      console.log(error);
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
              <SubmitBtn btnText="Verify" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
