"use client";
import React, { forwardRef, useState } from "react";
import styles from "./css/passwordInputelement.module.css";
import { IoEyeOff, IoEye } from "../../ApplicationIcons";
import Link from "next/link";

function PasswordInputElemnt(props, ref) {
  const { lable, inputType, type, inputLink, ...inputProps } = props;
  const [passInputType, setpassInputType] = useState(type);

  const handelShowpassword = () => {
    setpassInputType("text");
  };

  const handelHidePassword = () => {
    setpassInputType("password");
  };
  return (
    <div className={styles.com_container}>
      <div className={styles.lable_wraper}>
        <label className={styles.lable_style}>{lable}</label>
      </div>
      <div className={styles.input_wrapper}>
        <input
          type={passInputType}
          ref={ref}
          {...inputProps}
          suppressHydrationWarning={true}
          className={styles.input_style}
        />
        <div className={styles.passInput_icon_wrapper}>
          {passInputType === "password" ? (
            <IoEyeOff onClick={handelShowpassword} />
          ) : (
            <IoEye onClick={handelHidePassword} />
          )}
        </div>
      </div>
      {inputLink && (
        <div className={styles.forgot_pass_link_wrapper}>
          <Link
            href={`${inputLink.hrfLink}`}
            className={styles.forgot_pass_link}
          >
            {inputLink.name}
          </Link>
        </div>
      )}
    </div>
  );
}

export default forwardRef(PasswordInputElemnt);
