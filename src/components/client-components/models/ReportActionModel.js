"use client";
import React, { useState, useContext, useEffect } from "react";
import styles from "./css/reportModel.module.css";
import { IoCloseCircleSharp } from "../../ApplicationIcons";
import RadioElement from "../elements/RadioElement";
import useCustomForm from "@/src/custome-hooks/useCustomForm";
import { ReportContentradioOptions } from "@/src/jsonData/formData";
import { AppContext } from "@/src/contextApi/AppcontextApi";
import { reportContentAction } from "@/src/Actions/blogActions/blogAction";

export default function ReportActionModel(props) {
  const {
    isOpenReportModel,
    setisOpenReportModel,
    handelCloseReportModel,
    reportModelActionId,
  } = useContext(AppContext);

  const { handleSubmit, renderInput } = useCustomForm();

  const onSubmit = async (data) => {
    const formData = {
      blogId: reportModelActionId,
      reportAction: data.reportcontent,
    };

    try {
      const res = await reportContentAction(formData);
      console.log(res);
      if (res.data.status === "success") {
        handelCloseReportModel();
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log("model action id----", reportModelActionId);
  return (
    <>
      {isOpenReportModel && (
        <div className={styles.main_conatiner}>
          <div className={styles.inner_container}>
            <div className={styles.model_header}>
              <div className={styles.model_title}>
                <h2>Report Blog</h2>
              </div>
              <div
                className={styles.close_model}
                onClick={handelCloseReportModel}
              >
                <IoCloseCircleSharp />
              </div>
            </div>
            <div className={styles.model_body}>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {ReportContentradioOptions.map((input) => renderInput(input))}
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
