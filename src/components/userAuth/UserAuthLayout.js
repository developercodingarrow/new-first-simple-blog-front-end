"use client";
import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./userAuthLayout.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import authBanner from "../../../public/web-static-img/svg_img.svg";
import useCustomeAuthForm from "@/src/custome-hooks/useCustomeAuthForm";
import SubmitBtn from "../client-components/elements/buttons/SubmitBtn";
import GoogleAuthClient from "../client-components/googleAuth/GoogleAuthClient";
import { AppContext } from "@/src/app/_contextApi/AppContext";

export default function UserAuthLayout(props) {
  const { isBtnLoadin, setisBtnLoadin } = useContext(AppContext);

  const router = useRouter();
  const {
    formInputs,
    suHeading,
    socialAuth,
    formBtn,
    formType,
    formHandel,
    footerLink,
    footerText,
    userAuthData,
  } = props;
  const { renderInput, handleSubmit, updatedInputs, isValid, errors } =
    useCustomeAuthForm(formInputs, formType);

  const handleForm = async (data) => {
    try {
      setisBtnLoadin(true);
      const res = await formHandel(data);
      // Check if there's an error in the response

      if (res.error) {
        toast.error(res.error);
        setisBtnLoadin(false);
        return;
      }
      // Proceed if there is no error and res.data exists
      if ((res.data.status = "success")) {
        if (res.data.apiFor === "register") {
          router.push(`/opt-verification/${res.data.UrlToken}`);
          setisBtnLoadin(false);
        } else if (res.data.apiFor === "Login") {
          router.push("/");
          setisBtnLoadin(false);
        }
      }
    } catch (error) {
      setisBtnLoadin(false);
    }
  };

  return (
    <div className={styles.layout_conatiner}>
      <Toaster />
      <div className={styles.auth_image_banner_container}>
        <div className={styles.image_banner_inner_container}></div>
      </div>
      <div className={styles.auth_page_container}>
        <div className={styles.auth_form_Wrapper}>
          <div className={styles.form_heading}>
            <h2>Welcome to New Website</h2>
            <h3>{suHeading}</h3>
          </div>

          <div className={styles.form_inputs_wrapper}>
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
                  btnText={formBtn}
                  disabled={!isValid}
                  btnLoading={isBtnLoadin}
                />
              </div>
            </form>
          </div>
          <div className={styles.auth_seprate}>
            <span className={styles.single_line}></span>
            <span className="medium_text_wrapper">{socialAuth}</span>
            <span className={styles.single_line}></span>
          </div>
          <div className={styles.social_media_auth_wrapper}>
            <div>
              <GoogleAuthClient userAuthData={userAuthData} />
            </div>
          </div>

          <div className={styles.form_redirection_info_wrapper}>
            <span>Already have an Account? </span>{" "}
            <span>
              {" "}
              <Link href={`/${footerLink}`}>{footerText} </Link>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
