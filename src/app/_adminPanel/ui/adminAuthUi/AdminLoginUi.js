"use client";
import React, { useContext } from "react";
import styles from "./css/adminLoginUi.module.css";
import { useRouter } from "next/navigation";
import { RiAdminLine } from "../../ApplicationIcons";
import useCustomeAuthForm from "@/src/custome-hooks/useCustomeAuthForm";
import { adminLoginInputs } from "../../jsonData/formData";
import SubmitBtn from "@/src/components/client-components/elements/buttons/SubmitBtn";
import { adminLoginAction } from "@/src/app/utils/adminactions";
import { AppContext } from "@/src/app/_contextApi/AppContext";

export default function AdminLoginUi() {
  const router = useRouter();
  const { isBtnLoadin, setisBtnLoadin } = useContext(AppContext);
  const { renderInput, handleSubmit, updatedInputs, isValid, errors } =
    useCustomeAuthForm(adminLoginInputs, "LOGIN");

  const handleForm = async (data) => {
    try {
      setisBtnLoadin(true);
      const res = await adminLoginAction(data);
      console.log(res);
      if (res.status === "success") {
        router.push("/admindashboard");
        setisBtnLoadin(false);
      }
    } catch (error) {
      console.log(error);
      setisBtnLoadin(false);
    }
  };

  return (
    <div className={styles.flex_container}>
      <div className={styles.inner_container}>
        <div className={styles.box_header}>
          <div className={styles.header_iconr}>
            {" "}
            <RiAdminLine />{" "}
          </div>
          <div className={styles.header_text}>
            <h1>Admin</h1>
            <h3>Login Your Account</h3>
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
                btnText="Login"
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
