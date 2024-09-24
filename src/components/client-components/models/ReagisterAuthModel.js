"use client";
import React, { useContext } from "react";
import styles from "./css/regsiterAuthModel.module.css";
import { ModelsContext } from "@/src/app/_contextApi/ModelContextApi";
import GoogleAuthClient from "../googleAuth/GoogleAuthClient";
import Link from "next/link";

export default function ReagisterAuthModel() {
  const { isAuthModel, handelCloseAuthModel } = useContext(ModelsContext);

  return (
    <>
      {isAuthModel && (
        <div className={styles.main_conatiner}>
          <div className={styles.inner_container}>
            <div className={styles.Modelclose_bar}>
              <div
                className={styles.close_icon_wrapper}
                onClick={handelCloseAuthModel}
              >
                x{" "}
              </div>{" "}
            </div>
            <div className={styles.model_heading_wrapper}>
              <h3>welcome Back</h3>
            </div>
            <div className={styles.model_body}>
              <div className={styles.model_centerBox}>
                <div className={styles.google_login_option}>
                  <GoogleAuthClient />
                </div>
                <Link href={"/login"} className={styles.login_option}>
                  Login With Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
