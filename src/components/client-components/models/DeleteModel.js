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
            <div onClick={handelDelete}>delete</div>
          </div>
        </div>
      )}
    </>
  );
}
