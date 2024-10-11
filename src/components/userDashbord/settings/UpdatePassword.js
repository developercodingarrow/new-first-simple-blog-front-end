"use client";
import React, { useContext } from "react";
import styles from "./css/updatePassword.module.css";
import { upadteUserPasswordInput } from "@/src/jsonData/authformData";
import useCustomeAuthForm from "@/src/custome-hooks/useCustomeAuthForm";
import SubmitBtn from "../../client-components/elements/buttons/SubmitBtn";
import { AppContext } from "@/src/app/_contextApi/AppContext";
import Link from "next/link";

export default function UpdatePassword() {
  const { isBtnLoadin, setisBtnLoadin } = useContext(AppContext);
  const { renderInput, handleSubmit, updatedInputs, isValid, errors } =
    useCustomeAuthForm(upadteUserPasswordInput, "forgotPassword");

  const handleForm = async () => {};
  return (
    <div className={styles.container}>
      <section className={styles.header_section}>
        <h3>Upadte your password</h3>
      </section>
      <div className={styles.form_container}>
        <form onSubmit={handleSubmit(handleForm)} className={styles.form_style}>
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
              btnText="Update Password"
              disabled={!isValid}
              btnLoading={isBtnLoadin}
            />
          </div>
        </form>
      </div>
      <div className={styles.forgot_password_info}>
        <span>if you forgot your current password then click on </span>
        <Link href={"/forgot-password"} className={styles.link_style}>
          Forgot password
        </Link>
      </div>
    </div>
  );
}
