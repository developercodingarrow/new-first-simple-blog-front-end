"use client";
import React, { useState } from "react";
import styles from "./css/actionDots.module.css";
import { HiOutlineDotsVertical } from "../../ApplicationIcons";
import ActionDropDown from "./ActionDropDown";

export default function ActionDot(props) {
  const { actionList, actionId , slug } = props;
  const [isOpen, setisOpen] = useState(false);

  const handelOpen = () => {
    setisOpen(!isOpen);
  };

  console.log(actionList);
  return (
    <div className={styles.com_component}>
      <div onClick={handelOpen} className={styles.action_dot_icon}>
        <HiOutlineDotsVertical />
      </div>
      {isOpen && (
        <div className={styles.action_dropDown_wrapper}>
          <ActionDropDown actionList={actionList} actionId={actionId} slug={slug} />
        </div>
      )}
    </div>
  );
}
