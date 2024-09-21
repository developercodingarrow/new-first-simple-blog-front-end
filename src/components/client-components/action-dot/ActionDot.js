"use client";
import React, { useContext, useState } from "react";
import styles from "./css/actionDots.module.css";
import { HiOutlineDotsVertical } from "../../ApplicationIcons";
import ActionDropDown from "./ActionDropDown";
import { AuthContext } from "@/src/app/_contextApi/authContext";
import { ModelsContext } from "@/src/app/_contextApi/ModelContextApi";

export default function ActionDot(props) {
  const {
    actionList,
    actionId,
    slug,
    top = "20px",
    left = "0px",
    right,
  } = props;

  const [isOpen, setisOpen] = useState(false);
  const { authUser } = useContext(AuthContext);
  const { handelOpenAuthModel } = useContext(ModelsContext);

  const handelOpen = () => {
    setisOpen(true);
  };

  const handelClose = () => {
    setisOpen(false);
  };

  const dropdownStyle = {
    top,
    left: right ? "auto" : left, // If 'right' is provided, set 'left' to 'auto'
    right, // This will be undefined if not provided, which is fine
  };
  return (
    <div className={styles.com_component}>
      {authUser ? (
        <div onClick={handelOpen} className={styles.action_dot_icon}>
          <HiOutlineDotsVertical />
        </div>
      ) : (
        <div onClick={handelOpenAuthModel} className={styles.action_dot_icon}>
          <HiOutlineDotsVertical />
        </div>
      )}

      {isOpen && (
        <div className={styles.action_dropDown_wrapper} style={dropdownStyle}>
          <ActionDropDown
            actionList={actionList}
            actionId={actionId}
            slug={slug}
            closeHandel={handelClose}
          />
        </div>
      )}
    </div>
  );
}
