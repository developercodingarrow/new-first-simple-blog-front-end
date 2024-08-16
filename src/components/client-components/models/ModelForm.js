"use client";
import React, { useContext, useEffect } from "react";
import styles from "./css/inputmodel.module.css";
import { AppContext } from "@/src/contextApi/AppcontextApi";
import { IoCloseSharp } from "../../ApplicationIcons";
import SubmitBtn from "../elements/buttons/SubmitBtn";
import ClickBtn from "../elements/buttons/ClickBtn";
import { useCustomApiForm } from "@/src/custome-hooks/useCutomeApiform";

export default function ModelForm(props) {
  const { inputfileds, modelData, formhandel } = props;
  const dynimicData = [];
  const {
    handleSubmit,
    formState,
    control,
    watch,
    setValue,
    renderInput,
    isValid,
  } = useCustomApiForm(modelData);

  const handleForm = async (data) => {
    try {
      const res = await formhandel(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.model_form_wrapper}>
      <form onSubmit={handleSubmit(handleForm)}>
        <div className={styles.input_wrapper}>
          {inputfileds.map((input) => {
            return <div key={input.id}>{renderInput(input, dynimicData)}</div>;
          })}
        </div>

        <div className={styles.model_btn_wrapper}>
          <div className={styles.btn_wrapper}>
            <div>
              <ClickBtn btnText="cancle" />
            </div>
            <div>
              <SubmitBtn btnText="Save" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}