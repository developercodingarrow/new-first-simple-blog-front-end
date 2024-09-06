"use client";
import React, { useContext, useState, useRef } from "react";
import { AppContext } from "@/src/contextApi/AppcontextApi";
import styles from "./css/userImgModel.module.css";
import useImageUpload from "@/src/custome-hooks/useImageUpload";
import { IoCloseSharp } from "../../../ApplicationIcons";
import Image from "next/image";
import userImg from "../../../../../public/web-static-img/auther-image.jpg";
import { handeluplodUserPic } from "@/src/utils/handlers/imageHandlers";
import { updateUserData, isAuth } from "@/src/Actions/authAction";
import TextClickBtn from "../../elements/buttons/TextClickBtn";
import ClickBtn from "../../elements/buttons/ClickBtn";

export default function UserImgModel(props) {
  const { id, updateHandler } = props;
  const {
    userImgModel,
    setuserImgModel,
    imgUrl,
    modelActionId,
    handelCloseImgModel,
  } = useContext(AppContext);
  const fileInputRef = useRef(null);
  const {
    previewImage,
    image,
    imgData,
    handleImageUpload,
    removeImg,
    handelChange,
    handleSave,
  } = useImageUpload();

  const handleClickUpload = () => {
    fileInputRef.current.click();
  };

  const handelSubmit = async () => {
    try {
      const res = await handeluplodUserPic(image, "userImg", modelActionId);
      console.log(res);
      if (res.data.status === "success") {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
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
              onClick={handelCloseImgModel}
            >
              <IoCloseSharp />
            </div>
          </div>
          <div className={styles.model_body}>
            <section className={styles.image_uplaod_section}>
              <div>
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
                      src={`/usersProfileImg/${imgUrl}`}
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
                  <p>
                    Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels
                    per side.
                  </p>
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