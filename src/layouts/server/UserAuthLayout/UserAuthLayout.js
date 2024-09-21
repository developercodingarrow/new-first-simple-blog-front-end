"use client";
import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./css/userAuthLayout.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import authBanner from "../../../../public/web-static-img/svg_img.svg";
import useCustomeAuthForm from "@/src/custome-hooks/useCustomeAuthForm";
import SubmitBtn from "@/src/components/client-components/elements/buttons/SubmitBtn";
import GoogleOneTap from "@/src/components/client-components/googleAuth/GoogleOneTap";
import GoogleAuthClient from "@/src/components/client-components/googleAuth/GoogleAuthClient";
import { authenticate } from "@/src/Actions/authAction";
import { AppContext } from "@/src/contextApi/AppcontextApi";

export default function UserAuthLayout(props) {
  const { isBtnLoading, setisBtnLoading } = useContext(AppContext);
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
      setisBtnLoading(true);
      const res = await formHandel(data);
      console.log("auth form---", res);

      if (res.apiFor === "register") {
        setisBtnLoading(false);
        console.log("resgiter---", res);
        toast.success(res.data.message);
        router.push(`/opt-verification/${res.data.UrlToken}`);
      } else if (res.apiFor === "Login") {
        router.push("/");
        console.log(res);
      }

      if (res.error) {
        setisBtnLoading(false);
        toast.error(res.error);
      }
    } catch (error) {
      setisBtnLoading(false);
      console.log("error---");
      console.log(error);
    }
  };

  return (
    <div className={styles.layout_conatiner}>
      <Toaster />
      <div className={styles.auth_image_banner_container}>
        <Image
          src={authBanner}
          alt="auth banner image"
          width={1000}
          height={1000}
          quality={100}
          className={styles.imgStyle}
        />
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
                  btnLoading={isBtnLoading}
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
