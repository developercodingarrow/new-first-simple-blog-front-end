"use client";

import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

import InputElemtns from "../components/client-components/elements/InputElemtns";
export function useCustomApiForm(apiData = {}) {
  const { handleSubmit, formState, control, watch, setValue, reset } = useForm({
    mode: "all",
    defaultValues: apiData,
  });

  useEffect(() => {
    if (apiData) {
      Object.entries(apiData).forEach(([name, value]) => {
        setValue(name, value);
      });
    }
  }, [apiData, setValue]);

  const renderInput = (input, dynamicData) => {
    let InputComponent, specificProps;
    let defaultValues = apiData[input.name];
    switch (input.inputType) {
      case "text":
        InputComponent = InputElemtns;
        specificProps = {
          inputplaceholder: input.placeholder,
          defaultValue: defaultValues || "",
        };
        break;

      default:
        return null;
    }
    return (
      <Controller
        key={input.id}
        name={input.name}
        control={control}
        defaultValue={apiData[input.name]}
        rules={input.validation}
        render={({ field }) => (
          <InputComponent {...input} {...field} {...specificProps} />
        )}
      />
    );
  };

  return {
    handleSubmit,
    formState,
    control,
    watch,
    setValue,
    renderInput,
  };
}
