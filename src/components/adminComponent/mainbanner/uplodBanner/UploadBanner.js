"use client";
import React, { useContext, useState, useRef } from "react";
import styles from "./uplodbanner.module.css";
import { BsCloudUpload } from "../../../ApplicationIcons";
import useImageUpload from "@/src/custome-hooks/useImageUpload";
import Image from "next/image";
import SubmitBtn from "@/src/components/client-components/elements/buttons/SubmitBtn";
import { AppContext } from "@/src/app/_contextApi/AppContext";
import ClickBtn from "@/src/components/client-components/elements/buttons/ClickBtn";
import { publishedMainBanner } from "@/src/app/utils/mainBannerAction";
import { handelcreateMainBanner } from "@/src/utils/handlers/imageHandlers";

export default function UploadBanner() {
  const { isBtnLoadin, setisBtnLoadin } = useContext(AppContext);
  const {
    previewImage,
    image,
    imgData,
    handleImageUpload,
    removeImg,
    handelChange,
    handleSave,
    isValid,
  } = useImageUpload();
  const fileInputRef = useRef(null);

  const handleClickUpload = () => {
    fileInputRef.current.click();
  };

  const handelSubmitImg = async () => {
    try {
      const res = await handelcreateMainBanner(image, "bannerImg");
    } catch (error) {}
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        {previewImage ? (
          <div className={styles.upload_image_wrapperd}>
            <Image
              src={previewImage}
              alt="image-banner"
              className={styles.img_style}
              width={900}
              height={900}
            />
          </div>
        ) : (
          <div className={styles.upload_image_wrapperd}>
            <div className={styles.center_box}>
              <div className={styles.icon_wrapper}>
                <BsCloudUpload />
              </div>
              <div>
                <h3>Uplod main Banner Image </h3>
              </div>
            </div>
            <div className={styles.input_wrapper} onClick={handleClickUpload}>
              <input
                type="file"
                accept="image/*"
                className={styles.file_input}
                onChange={handleImageUpload}
                ref={fileInputRef}
                style={{ display: "none" }}
              />
            </div>
          </div>
        )}
      </div>
      <div className={styles.footer_wrapper}>
        <ClickBtn
          btnText="update"
          disabled={isValid}
          btnLoading={isBtnLoadin}
          btnHandel={handelSubmitImg}
        />
        <ClickBtn btnText="Remove" btnHandel={removeImg} btndisable="false" />
      </div>
    </div>
  );
}
