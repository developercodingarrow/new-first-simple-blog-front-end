"use client";
import React from "react";
import styles from "./css/usercardfooter.module.css";
import {
  HiOutlineDotsVertical,
  IoArrowForwardCircleOutline,
} from "../../../ApplicationIcons";
import ActionDot from "@/src/components/client-components/action-dot/ActionDot";
export default function FooterActionWrapper(props) {
  const { footerActions, actionId, slug } = props;

  console.log("footerActions in UserCardFooter---", footerActions);
  return (
    <div className={styles.container_wrapper}>
      <div>
        <ActionDot actionList={footerActions} actionId={actionId} slug={slug} />
      </div>
      <div>
        <IoArrowForwardCircleOutline />
      </div>
    </div>
  );
}
