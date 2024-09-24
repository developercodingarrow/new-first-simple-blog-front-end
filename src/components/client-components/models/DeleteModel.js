"use client";
import React, { useContext } from "react";
import styles from "./css/deleteModel.module.css";
import { ModelsContext } from "@/src/app/_contextApi/ModelContextApi";
export default function DeleteModel() {
  const { isDeleteModel, id, actionHandler, handelCloseDeleteModel } =
    useContext(ModelsContext);

  const handelDelete = () => {
    actionHandler(id);
  };

  return (
    <>
      {isDeleteModel && (
        <div className={styles.main_conatiner}>
          <div className={styles.inner_container}>
            <div className={styles.Modelclose_bar}>
              <div
                className={styles.close_icon_wrapper}
                onClick={handelCloseDeleteModel}
              >
                x{" "}
              </div>{" "}
            </div>
            <div className={styles.model_body}>
              <div className={styles.model_heading}>
                <h3>Are You Sure To delete This ?</h3>
              </div>
              <div className={styles.model_btn_wrapper}>
                <div
                  onClick={handelCloseDeleteModel}
                  className={styles.action_btn}
                >
                  No
                </div>
                <div onClick={handelDelete} className={styles.action_btn}>
                  Yes
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
