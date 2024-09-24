"use client";
import React, { useContext } from "react";
import styles from "./css/commentModel.module.css";

import { IoArrowBack } from "../../ApplicationIcons";

import CommentComponent from "../../singleBlog/blogComments/CommentComponent";
import { ModelsContext } from "@/src/app/_contextApi/ModelContextApi";

export default function CommentModel(props) {
  const { data } = props;
  const { isOpenCommentModel, handelCloseCommentModel } =
    useContext(ModelsContext);

  return (
    <>
      {isOpenCommentModel && (
        <div className={styles.only_mobile_container}>
          <div className={styles.inner_container}>
            <div className={styles.model_header}>
              <div onClick={handelCloseCommentModel}>
                <IoArrowBack />
              </div>
            </div>
            <div>
              <CommentComponent
                blogComments={data.comments}
                blogId={data._id}
                blogBy={data.user}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
