"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./css/inputmodel.module.css";
import { AppContext } from "@/src/contextApi/AppcontextApi";
import { IoCloseSharp } from "../../ApplicationIcons";
import SubmitBtn from "../elements/buttons/SubmitBtn";
import ClickBtn from "../elements/buttons/ClickBtn";
import ModelForm from "./ModelForm";
import { UserContext } from "@/src/_contextApi/UserContextApi";

export default function InputModel(props) {
  const { modelData, inputfileds = [], heding, closeModal, id } = props;
  const { actionHandler } = useContext(UserContext);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div className={styles.model_container}>
            <div className={styles.close_bar}>
              <div onClick={closeModal} className={styles.close_iconWrapper}>
                <IoCloseSharp />
              </div>
            </div>
            <div className={styles.model_heading_wrapper}>
              <h2>{heding}</h2>
            </div>
            <div className={styles.model_form_conatiner}>
              <ModelForm
                inputfileds={inputfileds}
                modelData={modelData}
                formhandel={actionHandler}
                id={id}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
