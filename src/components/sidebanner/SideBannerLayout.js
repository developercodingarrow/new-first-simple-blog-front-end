"use client";
import React, { useContext, useState, useRef, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./sidebannerlayout.module.css";
import ClickBtn from "../client-components/elements/buttons/ClickBtn";
import { AppContext } from "@/src/app/_contextApi/AppContext";
import useImageUpload from "@/src/custome-hooks/useImageUpload";
import Image from "next/image";
import { handelcreateSideBanner } from "@/src/utils/handlers/imageHandlers";
import DummyImg from "../../../public/web-static-img/side-banner-img.jpg";
import {
  getSideBanner,
  updateSideBannerUrl,
} from "@/src/app/utils/mainBannerAction";
import BannerLinkForm from "../adminComponent/bannerlink/BannerLinkForm";
import { bannerLinkInput } from "@/src/jsonData/formData";

export default function SideBannerLayout() {
  const { isBtnLoadin, setisBtnLoadin } = useContext(AppContext);
  const [sideBanner, setsideBanner] = useState(null);
  const [bannerUrl, setbannerUrl] = useState({ bannerLink: "" });
  const [loading, setLoading] = useState(true);
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

  const handelgetBanner = async () => {
    try {
      const res = await getSideBanner();
      console.log("res uploaded image get ---", res);

      setsideBanner(res.bannerImg?.url);
      setbannerUrl({ bannerLink: res.bannerLink });
      setbannerId(res._id);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    handelgetBanner();
  }, [sideBanner]);

  const handelSubmitImg = async () => {
    try {
      setisBtnLoadin(true);
      const res = await handelcreateSideBanner(image, "bannerImg");
      console.log("res---", res);
      setisBtnLoadin(false);
      if (res.status === "success") {
        toast.success(res.message);
      }
    } catch (error) {}
  };

  return (
    <div className={styles.container}>
      <Toaster />
      <div className={styles.inner_container}>
        <section className={styles.banner_uploder_container}>
          {loading ? (
            <div>
              <p>loading...</p>
            </div>
          ) : (
            <div className={styles.ui_banner}>
              <div className={styles.image_wrapper}>
                <Image
                  src={`/sideBanner/${sideBanner}`}
                  alt="image-banner"
                  className={styles.img_style}
                  width={900}
                  height={900}
                />
              </div>
            </div>
          )}

          {previewImage ? (
            <div>
              <div className={styles.image_uplod_wrapper}>
                <div className={styles.image_uploader_container}>
                  <Image
                    src={previewImage}
                    alt="image-banner"
                    className={styles.img_style}
                    width={900}
                    height={900}
                  />
                </div>
              </div>
              <div className={styles.action_btn_wrraper}>
                <input
                  type="file"
                  accept="image/*"
                  //   className={styles.file_input}
                  onChange={handleImageUpload}
                  ref={fileInputRef}
                  style={{ display: "none" }}
                />
                <ClickBtn btnText="upload" btnHandel={handleClickUpload} />

                <ClickBtn btnText="remove" btnHandel={removeImg} />
                <ClickBtn
                  btnText="Save"
                  btnLoading={isBtnLoadin}
                  btnHandel={handelSubmitImg}
                />
              </div>
            </div>
          ) : (
            <div className={styles.uplod_container}>
              <div className={styles.image_uplod_wrapper}>
                <div className={styles.image_uploader_container}>
                  <p>Preview </p>
                </div>
              </div>
              <div className={styles.action_btn_wrraper}>
                <input
                  type="file"
                  accept="image/*"
                  //   className={styles.file_input}
                  onChange={handleImageUpload}
                  ref={fileInputRef}
                  style={{ display: "none" }}
                />
                <ClickBtn btnText="upload" btnHandel={handleClickUpload} />

                <ClickBtn btnText="remove" btnHandel={removeImg} />
                <ClickBtn
                  btnText="Save"
                  btnLoading={isBtnLoadin}
                  btnHandel={handelSubmitImg}
                />
              </div>
            </div>
          )}

          <div>
            <BannerLinkForm
              formInput={bannerLinkInput}
              apiData={bannerUrl}
              formHandel={updateSideBannerUrl}
              actionID={bannerId}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
