"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./css/commentModel.module.css";
import CommentComponent from "../comments/CommentComponent";
import { IoArrowBack } from "../../ApplicationIcons";
import { AppContext } from "@/src/contextApi/AppcontextApi";

export default function CommentModel(props) {
  const { data } = props;
  const {
    isOpenCommentModel,
    setisOpenCommentModel,
    handelOpenCommentModel,
    handelCloseCommentModel,
  } = useContext(AppContext);

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
