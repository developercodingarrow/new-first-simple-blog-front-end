"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./css/blogimgprvuploader.module.css";
import toast, { Toaster } from "react-hot-toast";
import { FaCloudUploadAlt, IoCloseCircleSharp } from "../ApplicationIcons";
import Image from "next/image";
import { ModelsContext } from "@/src/app/_contextApi/ModelContextApi";
import { deleteBlogThumblinImages } from "@/src/app/utils/blogactions";
import { ImgModelContext } from "@/src/app/_contextApi/ImgModelContextApi";

export default function BlogImgPreUploder(props) {
  const { apiData, slug } = props;
  const { previewImage, setPreviewImage } = useContext(ImgModelContext);
  const [apiImg, setapiImg] = useState(null);
  const { handelOpenModel, singleImgModel, setsingleImgModel } =
    useContext(ModelsContext);
  const removeImg = () => {
    setPreviewImage(null);
  };

  useEffect(() => {
    if (apiData) {
      setapiImg(apiData?.blogThumblin || null); // Set to null if undefined
    }
  }, [apiData]);

  const handelModelOpen = () => {
    handelOpenModel(setsingleImgModel);
  };

  const handelDeleteApiImg = async () => {
    try {
      const res = await deleteBlogThumblinImages(slug);
      if (res.success === true) {
        toast.success(res.message);
        setapiImg(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <Toaster />
      <div className={styles.inner_container}>
        <div className={styles.image_uplod_wrapper}>
          {previewImage ? (
            <div className={styles.prev_img_container}>
              <div className={styles.img_remove_wrapper} onClick={removeImg}>
                <IoCloseCircleSharp />
              </div>
              <Image
                src={previewImage}
                width={100}
                height={100}
                className={styles.img_style}
                alt="Preview Image"
              />
            </div>
          ) : apiImg && apiImg.url ? (
            <>
              {console.log("Image URL:", `/blogthumblin/${apiImg?.url}`)}
              <div className={styles.prev_img_container}>
                <div
                  className={styles.img_remove_wrapper}
                  onClick={handelDeleteApiImg}
                >
                  <IoCloseCircleSharp />
                </div>
                <Image
                  src={`/blogthumblin/${apiImg?.url}?v=${new Date().getTime()}`}
                  width={900}
                  height={900}
                  className={styles.img_style}
                  alt={apiImg.altText}
                />
              </div>
            </>
          ) : (
            <div
              className={styles.image_uploader_container}
              onClick={handelModelOpen}
            >
              <FaCloudUploadAlt />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
