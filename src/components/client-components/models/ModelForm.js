"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./css/inputmodel.module.css";
import SubmitBtn from "../elements/buttons/SubmitBtn";
import ClickBtn from "../elements/buttons/ClickBtn";
import { useCustomApiForm } from "@/src/custome-hooks/useCutomeApiform";

import { ModelsContext } from "@/src/app/_contextApi/ModelContextApi";
import { updateUserDetail } from "@/src/app/utils/userAuthaction";

export default function ModelForm(props) {
  const { modelInput, apiData, actionID, modelActionHandler, setupdateData } =
    props;
  const { handelcloseInputModal } = useContext(ModelsContext);

  const dynimicData = [];
  const {
    handleSubmit,
    formState,
    control,
    watch,
    setValue,
    renderInput,
    isValid,
    reset,
  } = useCustomApiForm(apiData, modelInput);

  const handleForm = async (data) => {
    const obj = {
      ...data,
      _id: actionID,
    };

    try {
      const res = await modelActionHandler(obj);
      console.log(res);
      if (res.status === "success") {
        updateUserDetail(res.result);
        setupdateData(res.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.model_form_wrapper}>
      <form onSubmit={handleSubmit(handleForm)}>
        <div className={styles.input_wrapper}>
          {modelInput.map((input) => {
            return <div key={input.id}>{renderInput(input, dynimicData)}</div>;
          })}
        </div>

        <div className={styles.model_btn_wrapper}>
          <div className={styles.btn_wrapper}>
            <div>
              <ClickBtn btnText="cancle" btnHandel={handelcloseInputModal} />
            </div>
            <div>
              <SubmitBtn btnText="Save" btnLoading={false} disabled={isValid} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
