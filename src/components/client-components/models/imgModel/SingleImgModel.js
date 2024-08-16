"use client";
import React, { useContext, useState } from "react";
import styles from "./css/singleImgmodel.module.css";
import {
  IoCloudUpload,
  IoCloseCircleSharp,
  MdDeleteForever,
} from "../../../ApplicationIcons";
import Image from "next/image";
import sampleImg from "../../../../../public/web-static-img/blog sample image.png";
import useImageUpload from "@/src/custome-hooks/useImageUpload";
import { AppContext } from "@/src/contextApi/AppcontextApi";
export default function SingleImgModel(props) {
  const { updateHandler, id } = props;
  const { singleImgModel, handelSingImgModelClose } = useContext(AppContext);

  const {
    previewImage,
    image,
    imgData,
    handleImageUpload,
    removeImg,
    handelChange,
    handleSave,
  } = useImageUpload();

  const handelSubmitImg = async () => {
    try {
      const res = await updateHandler(image, imgData, "blogThumblin", id);

      console.log("model response----", res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {singleImgModel && (
        <div className={styles.container}>
          <div className={styles.inner_container}>
            <div className={styles.container_header}>
              <h3>Upload Blog Thumblin</h3>
              <div onClick={handelSingImgModelClose}>
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
                        width={500}
                        height={500}
                        className={styles.img_style}
                      />
                    </div>
                    <div className={styles.prev_footer}>
                      <div className={styles.img_name_wrapper}>
                        <h3>blog image thumnlin</h3>
                      </div>
                      <div className={styles.img_info_action}>
                        <div className="small_text_wrapper">356kb</div>
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
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container_footer}>
              <button>save</button>
              <button onClick={handelSubmitImg}>Uplod</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}