"use client";
import React, { useContext, useState, useEffect, useRef } from "react";
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
  const dropdownRef = useRef(null);

  const handelOpen = () => {
    setisOpen(true);
  };

  const handelClose = () => {
    setisOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        handelClose(); // Close the dropdown if clicked outside
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

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
        <div
          className={styles.action_dropDown_wrapper}
          style={dropdownStyle}
          ref={dropdownRef}
        >
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
