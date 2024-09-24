"use client";
import React, { useContext } from "react";
import styles from "./css/cardFooter.module.css";
import { IoArrowForwardCircleOutline } from "../../ApplicationIcons";
import ActionDot from "../../client-components/action-dot/ActionDot";
import Link from "next/link";
import LikesAction from "../../client-components/likes/LikesAction";
import { ModelsContext } from "@/src/app/_contextApi/ModelContextApi";

export default function CardFooter(props) {
  const { pageTitleUrl, postLikes, elementID } = props;
  const { handelOpenReportModel } = useContext(ModelsContext);

  const handelOpenModel = async (actionId) => {
    handelOpenReportModel(actionId);
  };

  const blogReportAction = [{ label: "Report", handler: handelOpenModel }];
  return (
    <div className={styles.com_container}>
      <div className={styles.footer_leftSide}>
        <div className="small_text_wrapper"> 2-Aug-2024 </div>
        <div className={styles.like_wrapper}>
          <LikesAction postLikes={postLikes} elementID={elementID} />
        </div>
        <div>
          <ActionDot actionList={blogReportAction} actionId={elementID} />
        </div>
      </div>
      <div className={styles.footer_rightSide}>
        <Link href={`/blog/${pageTitleUrl}`}>
          <IoArrowForwardCircleOutline />
        </Link>
      </div>
    </div>
  );
}
