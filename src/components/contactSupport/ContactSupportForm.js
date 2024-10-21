"use client";
import React from "react";
import styles from "./contactform.module.css";
import { contactsupportFormInputFileds } from "@/src/jsonData/formData";
import useCustomForm from "@/src/custome-hooks/useCustomForm";

export default function ContactSupportForm() {
  const {
    handleSubmit,
    formState,
    control,
    watch,
    setValue,
    renderInput,
    errors,
  } = useCustomForm();

  const handleForm = () => {
    alert("ok");
  };
  return (
    <div className={styles.container}>
      <div className={styles.form_wrapper}>
        <form onSubmit={handleSubmit(handleForm)}>
          {contactsupportFormInputFileds.map((input, index) => {
            return (
              <div key={index}>
                {renderInput(input)}
                {errors[input.name] && (
                  <span className={"input_errors"}>
                    {errors[input.name].message}
                  </span>
                )}
              </div>
            );
          })}
        </form>
      </div>
    </div>
  );
}
