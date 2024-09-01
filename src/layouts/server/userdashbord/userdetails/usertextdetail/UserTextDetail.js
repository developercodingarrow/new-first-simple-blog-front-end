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
    id,
    modelInputs,
    openModal,
    modelActionHandler,
  } = props;

  const handleOpen = () => {
    openModal(apiData, id, modelInputs, modelActionHandler);
  };

  const handelOpenImgModel = () => {
    openModal(apiData?.userImg?.url, apiData._id);
  };

  console.log("textdata---", textdata);

  return (
    <>
      <div className={styles.user_details_container}>
        <div className={styles.title_wrapper}>
          <h5 className="capitalize_text"> {title}</h5>
        </div>
        {type === "text" && (
          <div className={styles.text_data_wrapper} onClick={handleOpen}>
            {textdata === "undefined" ? <>add</> : <>{textdata}</>}
          </div>
        )}
        {type === "img" && (
          <div
            className={styles.small_img_wrapper}
            onClick={handelOpenImgModel}
          >
            <Image
              // src={imgData}
              src={`/usersProfileImg/${apiData?.userImg?.url}`}
              alt="user image"
              className={styles.img_style}
              width={500}
              height={500}
            />
          </div>
        )}
      </div>
    </>
  );
}
