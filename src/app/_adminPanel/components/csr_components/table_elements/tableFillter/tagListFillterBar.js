"use client";
import React, { useEffect, useState } from "react";
import styles from "./css/tablfillterbar.module.css";
import TableSearch from "./tableSearch";
import useTableFillters from "@/src/app/_adminPanel/custome-hooks/useTableFillters";
import useCustomFormFiled from "@/src/app/_adminPanel/custome-hooks/useCustomFormFiled";
import { createtagInputs } from "@/src/app/_adminPanel/jsonData/formData";
import SubmitBtn from "@/src/components/client-components/elements/buttons/SubmitBtn";
import { createTagAction } from "@/src/app/_adminPanel/admin_actions/adminTagApi";

export default function TagListFillterBar(props) {
  const { data } = props;
  const [isLoading, setisLoading] = useState(false);
  const { handleSubmit, renderInput, isValid, errors } = useCustomFormFiled();

  const { updateVisibleRows, searchByTableFiled, filterByDate } =
    useTableFillters(data);

  useEffect(() => {
    updateVisibleRows(data);
  }, [data, isLoading]);

  const handleForm = async (data) => {
    setisLoading(true);
    try {
      const res = await createTagAction(data);
      console.log(res);
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };
  return (
    <div className={styles.main_contatiner}>
      <div className={styles.inner_container}>
        <div className={styles.search_Compoent_wrraper}>
          <TableSearch
            searchHandel={searchByTableFiled}
            searchFiled="tagName"
            placholder="Search tags..."
          />
        </div>
        <div className={styles.single_inputForm}>
          <form onSubmit={handleSubmit(handleForm)}>
            <div className={styles.inline_form}>
              {createtagInputs.map((input, index) => {
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
              <div>
                <SubmitBtn
                  btnText="create"
                  btnLoading={isLoading}
                  disabled={!isValid}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}