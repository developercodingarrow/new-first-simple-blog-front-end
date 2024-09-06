"use client";

import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import InputElemtns from "@/src/components/client-components/elements/InputElemtns";
import RadioElement from "@/src/components/client-components/elements/RadioElement";

export default function useCustomFormFiled() {
  const {
    handleSubmit,
    formState, // Include formState here
    control,
    watch,
    setValue,
  } = useForm({
    mode: "all",
  });

  const renderInput = (input) => {
    let InputComponent, specificProps;
    switch (input.inputType) {
      case "text":
        InputComponent = InputElemtns;
        specificProps = {
          inputplaceholder: input.placeholder,
          filed_container: "filedContainer",
        };

        break;
      case "radio":
        InputComponent = RadioElement;
        specificProps = {
          radioOptions: input.options || [],
          onChange: (selectedOption) => setValue(input.name, selectedOption),
          selectedOption: watch(input.name),
          inputLabel: input.label,
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
        defaultValue=""
        rules={input.validation}
        render={({ field }) => (
          <>
            <InputComponent {...input} {...field} {...specificProps} />
          </>
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
    isValid: formState.isValid, // Access isValid from formState
    errors: formState.errors,
  };
}
