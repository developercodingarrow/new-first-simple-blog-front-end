"use client";
import React, { useContext } from "react";
import styles from "./css/inputmodel.module.css";
import { IoCloseSharp } from "../../ApplicationIcons";
import ModelForm from "./ModelForm";
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
