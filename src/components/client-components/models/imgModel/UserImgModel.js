"use client";
import React, { useContext, useState, useRef } from "react";
import styles from "./css/userImgModel.module.css";
import useImageUpload from "@/src/custome-hooks/useImageUpload";
import { IoCloseSharp } from "../../../ApplicationIcons";
import Image from "next/image";
import { handeluplodUserPic } from "@/src/utils/handlers/imageHandlers";
import TextClickBtn from "../../elements/buttons/TextClickBtn";
import ClickBtn from "../../elements/buttons/ClickBtn";
import { ModelsContext } from "@/src/app/_contextApi/ModelContextApi";
import { updateUserDetail } from "@/src/app/utils/userAuthaction";

export default function UserImgModel(props) {
  const { updateFor, setupdateData, filePath } = props;
  const { handelCloseUserImgModel, imgUrl, imgModelId } =
    useContext(ModelsContext);

  const fileInputRef = useRef(null);
  const { previewImage, image, handleImageUpload, removeImg } =
    useImageUpload();

  const handleClickUpload = () => {
    fileInputRef.current.click();
  };

  const handelSubmit = async () => {
    try {
      const res = await handeluplodUserPic(image, updateFor, imgModelId);

      if (res.status === "success") {
        setupdateData(res.data);
        updateUserDetail(res.data);
      }
    } catch (error) {}
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.model_container}>
          <div className={styles.model_header}>
            <div className={styles.model_heading}>
              <h3>Update Profile PIc</h3>
            </div>
            <div
              className={styles.close_iconWrapper}
              onClick={handelCloseUserImgModel}
            >
              <IoCloseSharp />
            </div>
          </div>
          <div className={styles.model_body}>
            <section className={styles.image_uplaod_section}>
              <div className={styles.img_column}>
                <div className={styles.img_wrapper}>
                  {previewImage ? (
                    <Image
                      src={previewImage}
                      alt="user-imag"
                      className={styles.img_style}
                      width={500}
                      height={500}
                    />
                  ) : (
                    <Image
                      src={`/${filePath}/${imgUrl}`}
                      alt="user-imag"
                      className={styles.img_style}
                      width={500}
                      height={500}
                    />
                  )}
                </div>
              </div>
              <div>
                <div className={styles.upload_info_wrapper}>
                  <div className={styles.info_content}>
                    Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels
                    per side.
                  </div>
                </div>
                <div className={styles.btns_wrapper}>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                  />
                  <TextClickBtn
                    text="Upload"
                    color="var(--th-primary-color)"
                    onClick={handleClickUpload}
                  />

                  <TextClickBtn text="Remove" color="red" onClick={removeImg} />
                </div>
              </div>
            </section>
          </div>
          <div className={styles.model_footer}>
            <ClickBtn btnText="Submit" btnHandel={handelSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}
