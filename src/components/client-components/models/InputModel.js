"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./css/inputmodel.module.css";
import { AppContext } from "@/src/contextApi/AppcontextApi";
import { IoCloseSharp } from "../../ApplicationIcons";
import SubmitBtn from "../elements/buttons/SubmitBtn";
import ClickBtn from "../elements/buttons/ClickBtn";
import ModelForm from "./ModelForm";
import { UserContext } from "@/src/app/_contextApi/UserContextApi";
import { AuthContext } from "@/src/app/_contextApi/authContext";
import { ModelsContext } from "@/src/app/_contextApi/ModelContextApi";
export default function InputModel(props) {
  const {
    modelTitle,
    modelInput,
    apiData,
    actionID,
    modelActionHandler,
    setupdateData,
  } = props;
  const { handelcloseInputModal } = useContext(ModelsContext);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div className={styles.model_container}>
            <div className={styles.close_bar}>
              <div
                onClick={handelcloseInputModal}
                className={styles.close_iconWrapper}
              >
                <IoCloseSharp />
              </div>
            </div>
            <div className={styles.model_heading_wrapper}>
              <h2>{modelTitle}</h2>
            </div>
            <div className={styles.model_form_conatiner}>
              <ModelForm
                modelInput={modelInput}
                apiData={apiData}
                actionID={actionID}
                modelActionHandler={modelActionHandler}
                setupdateData={setupdateData}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
