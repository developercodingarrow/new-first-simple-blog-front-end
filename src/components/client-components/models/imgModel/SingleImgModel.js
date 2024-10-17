"use client";
import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./css/singleImgmodel.module.css";
import {
  IoCloudUpload,
  IoCloseCircleSharp,
  MdDeleteForever,
} from "../../../ApplicationIcons";
import Image from "next/image";
import sampleImg from "../../../../../public/web-static-img/blog sample image.png";
import useImageUpload from "@/src/custome-hooks/useImageUpload";
import ClickBtn from "../../elements/buttons/ClickBtn";
import { ModelsContext } from "@/src/app/_contextApi/ModelContextApi";

export default function SingleImgModel(props) {
  const { updateHandler, id } = props;
  const { singleImgModel, setsingleImgModel, handelCloseModel, imageName } =
    useContext(ModelsContext);

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

  const handelSubmitImg = async () => {
    try {
      const res = await updateHandler(image, imgData, "blogThumblin", id);

      if (res.status === "success") {
        toast.success(res.message);
      }
    } catch (error) {}
  };

  const handelModelClose = () => {
    handelCloseModel(setsingleImgModel);
  };

  return (
    <>
      {singleImgModel && (
        <div className={styles.container}>
          <Toaster />
          <div className={styles.inner_container}>
            <div className={styles.container_header}>
              <h3>Upload Blog Thumblin</h3>
              <div
                onClick={handelModelClose}
                className={styles.close_icon_warpper}
              >
                <IoCloseCircleSharp />
              </div>
            </div>
            <div className={styles.model_container}>
              {previewImage ? (
                <>
                  <div className={styles.Img_prev_container}>
                    <div className={styles.img_prev_wrapper}>
                      <Image
                        src={previewImage}
                        alt="imge"
                        width={900}
                        height={900}
                        className={styles.img_style}
                      />
                    </div>
                    <div className={styles.prev_footer}>
                      <div className={styles.img_name_wrapper}>{imageName}</div>
                      <div className={styles.img_info_action}>
                        <div
                          className={styles.prev_remov_icon}
                          onClick={removeImg}
                        >
                          <MdDeleteForever />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className={styles.img_upload_container}>
                  <div className={styles.uplod_info}>
                    <div>
                      <IoCloudUpload />
                    </div>
                    <div className="medium_text_wrapper">
                      Choose File to uplod
                    </div>
                    <div className="small_text_wrapper">JPG Or PNG</div>
                    <input
                      type="file"
                      accept="image/*"
                      className={styles.file_input}
                      onChange={handleImageUpload}
                    />
                  </div>
                </div>
              )}

              <div className={styles.input_container}>
                <div className={styles.inputs_wrapper_container}>
                  <div className={styles.input_box_wrapper}>
                    <div className={styles.lable_wrapper}>
                      <label>title</label>
                    </div>
                    <div className={styles.input_wrapper}>
                      <input
                        type="text"
                        className={styles.input_style}
                        name="title"
                        onChange={handelChange}
                        placeholder="Enter Image Title"
                      />
                    </div>
                  </div>

                  <div className={styles.input_box_wrapper}>
                    <div className={styles.lable_wrapper}>
                      <label>altText</label>
                    </div>
                    <div className={styles.input_wrapper}>
                      <input
                        type="text"
                        className={styles.input_style}
                        name="altText"
                        onChange={handelChange}
                        placeholder="Enter Alt Text"
                      />
                    </div>
                  </div>

                  <div className={styles.input_box_wrapper}>
                    <div className={styles.lable_wrapper}>
                      <label>caption</label>
                    </div>
                    <div className={styles.input_wrapper}>
                      <input
                        type="text"
                        className={styles.input_style}
                        name="caption"
                        onChange={handelChange}
                        placeholder="Enter Caption"
                      />
                    </div>
                  </div>

                  <div className={styles.input_box_wrapper}>
                    <div className={styles.lable_wrapper}>
                      <label>description</label>
                    </div>
                    <div className={styles.input_wrapper}>
                      <textarea
                        type="text"
                        className={styles.textarea_style}
                        rows={3}
                        name="description"
                        onChange={handelChange}
                        placeholder="Enter Image Descreption"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container_footer}>
              <ClickBtn
                btnText="Upload"
                btnHandel={handelSubmitImg}
                btndisable={isValid}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
