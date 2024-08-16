import React from "react";
import styles from "./css/usercardfooter.module.css";
import {
  HiOutlineDotsVertical,
  IoArrowForwardCircleOutline,
} from "../../../ApplicationIcons";
export default function FooterActionWrapper() {
  return (
    <div className={styles.container_wrapper}>
      <div>
        <HiOutlineDotsVertical />
      </div>
      <div>
        <IoArrowForwardCircleOutline />
      </div>
    </div>
  );
}
