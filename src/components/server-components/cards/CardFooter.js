import React from "react";
import styles from "./css/cardFooter.module.css";
import {
  HiOutlineDotsVertical,
  IoArrowForwardCircleOutline,
} from "../../ApplicationIcons";
import ActionDot from "../../client-components/action-dot/ActionDot";

export default function CardFooter() {
  return (
    <div className={styles.com_container}>
      <div className={styles.footer_leftSide}>
        <div className="small_text_wrapper"> 2-Aug-2024 </div>
        <div>{/* <ActionDot /> */}</div>
      </div>
      <div className={styles.footer_rightSide}>
        <IoArrowForwardCircleOutline />
      </div>
    </div>
  );
}
