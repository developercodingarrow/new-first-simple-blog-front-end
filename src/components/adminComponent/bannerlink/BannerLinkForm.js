"use client";

import React, { useContext } from "react";
import SubmitBtn from "../../client-components/elements/buttons/SubmitBtn";
import { AppContext } from "@/src/app/_contextApi/AppContext";
import { useCustomApiForm } from "@/src/custome-hooks/useCutomeApiform";

export default function BannerLinkForm(props) {
  const { apiData, formInput, formHandel, actionID } = props;

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
  } = useCustomApiForm(apiData, formInput);

  const handleForm = async (data) => {
    try {
      const obj = {
        ...data,
        _id: actionID,
      };
      console.log(data);
      const res = await formHandel(obj);
      console.log("respose----", res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)}>
        {formInput.map((input) => {
          return <div key={input.id}>{renderInput(input, dynimicData)}</div>;
        })}
        <div>
          <SubmitBtn
            btnText="update"
            btnLoading={isBtnLoadin}
            disabled={isValid}
          />
        </div>
      </form>
    </div>
  );
}
