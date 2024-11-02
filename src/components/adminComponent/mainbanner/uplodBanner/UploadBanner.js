"use client";
import React, { useContext, useState, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./uplodbanner.module.css";
import { BsCloudUpload } from "../../../ApplicationIcons";
import useImageUpload from "@/src/custome-hooks/useImageUpload";
import Image from "next/image";
import SubmitBtn from "@/src/components/client-components/elements/buttons/SubmitBtn";
import { AppContext } from "@/src/app/_contextApi/AppContext";
import ClickBtn from "@/src/components/client-components/elements/buttons/ClickBtn";
import {
  publishedMainBanner,
  updateMainBannerUrl,
  getMainBanner,
} from "@/src/app/utils/mainBannerAction";
import { handelcreateMainBanner } from "@/src/utils/handlers/imageHandlers";
import { bannerLinkInput } from "@/src/jsonData/formData";
import BannerLinkForm from "../../bannerlink/BannerLinkForm";

export default function UploadBanner() {
  const [mainBanner, setmainBanner] = useState(null);
  const { isBtnLoadin, setisBtnLoadin } = useContext(AppContext);
  const [bannerUrl, setbannerUrl] = useState({ bannerLink: "" });
  const [bannerId, setbannerId] = useState("");
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
      setisBtnLoadin(true);
      const res = await handelcreateMainBanner(image, "bannerImg");
      console.log("res---", res);
      if (res.status === "success") {
        toast.success(res.message);
        setisBtnLoadin(false);
      }
    } catch (error) {}
  };

  const handelgetBanner = async () => {
    try {
      const res = await getMainBanner();
      console.log("res uploaded image get ---", res);

      setmainBanner(res.bannerImg?.url);
      setbannerId(res._id);
      setbannerUrl({ bannerLink: res.bannerLink });
    } catch (error) {}
  };

  useEffect(() => {
    handelgetBanner();
  }, [isBtnLoadin, mainBanner]);

  return (
    <div className={styles.main_container}>
      <Toaster />

      <div>
        {mainBanner && (
          <div className={styles.banner_imageWrraper}>
            <Image
              src={`/mainbanner/${mainBanner}`}
              width={900}
              height={900}
              className={styles.img_style}
            />
          </div>
        )}
      </div>

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
        <div>
          <BannerLinkForm
            formInput={bannerLinkInput}
            apiData={bannerUrl}
            formHandel={updateMainBannerUrl}
            actionID={bannerId}
          />
        </div>

        <div className={styles.image_uplod_actionBtn_wrapper}>
          <ClickBtn
            btnText="update"
            disabled={isValid}
            btnLoading={isBtnLoadin}
            btnHandel={handelSubmitImg}
          />
          <ClickBtn btnText="Remove" btnHandel={removeImg} btndisable="false" />
        </div>
      </div>
    </div>
  );
}
