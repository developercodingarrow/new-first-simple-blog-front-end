"use client";
import React from "react";
import styles from "./contactform.module.css";
import { contactsupportFormInputFileds } from "@/src/jsonData/formData";
import useCustomForm from "@/src/custome-hooks/useCustomForm";
import SubmitBtn from "../client-components/elements/buttons/SubmitBtn";
import { newContactEnquire } from "@/src/app/utils/contactActions";

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

  const handleForm = async (data) => {
    try {
      console.log(data);
      const res = await newContactEnquire(data);
      console.log(res);
    } catch (error) {
      console.log("error", error);
    }
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

          <SubmitBtn btnText="Send" />
        </form>
      </div>
    </div>
  );
}
