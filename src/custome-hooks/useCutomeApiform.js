"use client";

import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

import InputElemtns from "../components/client-components/elements/InputElemtns";
import TextareaElement from "../components/client-components/elements/TextareaElement";

export function useCustomApiForm(apiData = {}, inputFields = []) {
  // Extract only the relevant fields from apiData based on inputFields
  const filteredData = inputFields.reduce((acc, field) => {
    if (apiData[field.name] !== undefined) {
      acc[field.name] = apiData[field.name];
    }
    return acc;
  }, {});

  const { handleSubmit, formState, control, watch, setValue, reset } = useForm({
    mode: "all",
    defaultValues: filteredData,
  });

  useEffect(() => {
    if (filteredData) {
      Object.entries(filteredData).forEach(([name, value]) => {
        setValue(name, value);
      });
    }
  }, [filteredData, setValue]);

  const renderInput = (input, dynamicData) => {
    let InputComponent, specificProps;
    let defaultValues = filteredData[input.name];
    switch (input.inputType) {
      case "text":
        InputComponent = InputElemtns;
        specificProps = {
          inputplaceholder: input.placeholder,
          defaultValue: defaultValues || "",
        };
        break;

      case "textarea":
        InputComponent = TextareaElement;
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
    reset,
  };
}
