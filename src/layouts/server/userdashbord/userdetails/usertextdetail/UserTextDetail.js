"use client";
import React, { useContext } from "react";
import styles from "./css/usertextdetails.module.css";
import userImg from "../../../../../../public/web-static-img/auther-image.jpg";
import Image from "next/image";
import InputModel from "@/src/components/client-components/models/InputModel";
import { AppContext } from "@/src/contextApi/AppcontextApi";
import { useCustomApiForm } from "@/src/custome-hooks/useCutomeApiform";

export default function UserTextDetail(props) {
  const {
    title,
    textdata,
    type,
    imgData,
    apiData,
    modelInputs,
    openModal,
    modelActionHandler,
  } = props;
  const { handelOpenInputModel, editModelData } = useContext(AppContext);

  const handleOpen = () => {
    openModal(apiData, modelInputs, modelActionHandler);
  };

  console.log(textdata);

  return (
    <>
      <div className={styles.user_details_container}>
        <div className={styles.title_wrapper}>{title}</div>
        {type === "text" && (
          <div className={styles.text_data_wrapper} onClick={handleOpen}>
            {textdata === "undefined" ? <>add</> : <>{textdata}</>}
          </div>
        )}
        {type === "img" && (
          <div className={styles.small_img_wrapper}>
            <Image
              src={imgData}
              alt="user image"
              className={styles.img_style}
            />
          </div>
        )}
      </div>
    </>
  );
}
