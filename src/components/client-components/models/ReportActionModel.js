"use client";
import React, { useContext } from "react";
import styles from "./css/reportModel.module.css";
import { IoCloseSharp } from "../../ApplicationIcons";
import useCustomForm from "@/src/custome-hooks/useCustomForm";
import { ReportContentradioOptions } from "@/src/jsonData/formData";
import ClickBtn from "../elements/buttons/ClickBtn";
import SubmitBtn from "../elements/buttons/SubmitBtn";
import toast, { Toaster } from "react-hot-toast";
import { BlogContext } from "@/src/app/_contextApi/BlogContextApi";
import { ModelsContext } from "@/src/app/_contextApi/ModelContextApi";

export default function ReportActionModel(props) {
  const { isReportModel, setisReportModel, modelID, handelCloseModel } =
    useContext(ModelsContext);
  const { handelReportBlog, setisLoading, isLoading } = useContext(BlogContext);

  const { handleSubmit, renderInput, isValid } = useCustomForm();

  const onSubmit = async (data) => {
    const formData = {
      id: modelID,
      filedContent: data.reportcontent,
    };
    setisLoading(true);
    try {
      const res = await handelReportBlog(formData);
      console.log(res);
      if (res.status === "success") {
        toast.success(res.message);
        setisLoading(false);
      }
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };

  const handelModelClose = () => {
    handelCloseModel(setisReportModel);
  };

  return (
    <>
      {isReportModel && (
        <div className={styles.main_conatiner}>
          <Toaster />
          <div className={styles.inner_container}>
            <div className={styles.model_header}>
              <div className={styles.close_model} onClick={handelModelClose}>
                <IoCloseSharp />
              </div>
              <div className={styles.model_heading_wrapper}>
                <h2>Report Blog</h2>
              </div>
            </div>
            <div className={styles.model_body}>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {ReportContentradioOptions.map((input) => renderInput(input))}
                  <div className={styles.btn_wrapper}>
                    <div>
                      <ClickBtn btnText="cancle" btnHandel={handelModelClose} />
                    </div>
                    <div>
                      <SubmitBtn
                        btnText="Submit"
                        btnLoading={isLoading}
                        disabled={isValid}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
