"use client";
import React, { useContext } from "react";
import styles from "./css/inputmodel.module.css";
import SubmitBtn from "../elements/buttons/SubmitBtn";
import ClickBtn from "../elements/buttons/ClickBtn";
import { useCustomApiForm } from "@/src/custome-hooks/useCutomeApiform";
import toast, { Toaster } from "react-hot-toast";
import { ModelsContext } from "@/src/app/_contextApi/ModelContextApi";
import { updateUserDetail } from "@/src/app/utils/userAuthaction";
import { AppContext } from "@/src/app/_contextApi/AppContext";

export default function ModelForm(props) {
  const { modelInput, apiData, actionID, modelActionHandler, setupdateData } =
    props;

  const { handelcloseInputModal } = useContext(ModelsContext);
  const { isBtnLoadin, setisBtnLoadin } = useContext(AppContext);
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
      setisBtnLoadin(true);
      const res = await modelActionHandler(obj);

      if (res.status === "Fails") {
        toast.error(res.message);
        setisBtnLoadin(false);
      }
      if (res.status === "success") {
        updateUserDetail(res.result);
        setupdateData(res.result);
        setisBtnLoadin(false);
      }
    } catch (error) {
      setisBtnLoadin(false);
    }
  };

  return (
    <div className={styles.model_form_wrapper}>
      <Toaster />
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
              <SubmitBtn
                btnText="Save"
                btnLoading={isBtnLoadin}
                disabled={isValid}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
