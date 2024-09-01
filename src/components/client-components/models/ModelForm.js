"use client";
import React, { useContext, useEffect } from "react";
import styles from "./css/inputmodel.module.css";
import { AppContext } from "@/src/contextApi/AppcontextApi";
import { IoCloseSharp } from "../../ApplicationIcons";
import SubmitBtn from "../elements/buttons/SubmitBtn";
import ClickBtn from "../elements/buttons/ClickBtn";
import { useCustomApiForm } from "@/src/custome-hooks/useCutomeApiform";
import { UserContext } from "@/src/_contextApi/UserContextApi";

export default function ModelForm(props) {
  const { inputfileds, modelData, formhandel, id } = props;
  const { setisLoading, isLoading, handelcloseInputModal } =
    useContext(UserContext);

  const dynimicData = [];
  const {
    handleSubmit,
    formState,
    control,
    watch,
    setValue,
    renderInput,
    isValid,
  } = useCustomApiForm(modelData, inputfileds);

  const handleForm = async (data) => {
    const obj = {
      data,
      _id: id,
    };
    try {
      setisLoading(true);
      const res = await formhandel(obj);
      console.log("res---", res);
      if (res.data.status === "success") {
        console.log("succes");
        setisLoading(false);
      }
    } catch (error) {
      setisLoading(false);
      console.log(error);
    }
  };

  console.log("inputfileds===", inputfileds);
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
              <ClickBtn btnText="cancle" btnHandel={handelcloseInputModal} />
            </div>
            <div>
              <SubmitBtn
                btnText="Save"
                btnLoading={isLoading}
                disabled={!isValid}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
