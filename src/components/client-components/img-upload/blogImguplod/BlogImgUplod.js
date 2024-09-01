import React, { useContext, useEffect, useState } from "react";
import styles from "./css/blogImguplod.module.css";
import {
  FaCloudUploadAlt,
  IoCloseCircleSharp,
} from "../../../ApplicationIcons";
import Image from "next/image";
import sampleImg from "../../../../../public/web-static-img/blog sample image.png";
import { AppContext } from "@/src/contextApi/AppcontextApi";
import { ImgModelContext } from "@/src/contextApi/ImgModelContextApi";
import { deleteBlogThumblinImages } from "@/src/Actions/blogActions/blogAction";

export default function BlogImgUplod(props) {
  const { apiData, slug } = props;
  const { handelSingImgModelOpen } = useContext(AppContext);
  const { previewImage, setPreviewImage } = useContext(ImgModelContext);
  const [apiImg, setapiImg] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
      onImageUpload(file);
    }
  };

  const removeImg = () => {
    setPreviewImage(null);
  };

  useEffect(() => {
    if (apiData) {
      setapiImg(apiData.blogThumblin);
    }
  }, [apiData]);

  console.log(apiImg);

  const handelDeleteApiImg = async () => {
    try {
      const res = await deleteBlogThumblinImages(
        apiData.blogThumblin._id,
        slug
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
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
          ) : apiImg?.url ? (
            <div className={styles.prev_img_container}>
              <div
                className={styles.img_remove_wrapper}
                onClick={handelDeleteApiImg}
              >
                <IoCloseCircleSharp />
              </div>
              <Image
                src={`/blogthumblin/${apiImg.url}`}
                width={100}
                height={100}
                className={styles.img_style}
                alt="API Image"
              />
            </div>
          ) : (
            <div
              className={styles.image_uploader_container}
              onClick={handelSingImgModelOpen}
            >
              <FaCloudUploadAlt />
            </div>
          )}

          {/* <div className={styles.uploder_footer_wrapper}>
            <div className="small_text_wrapper">size 12kb</div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
