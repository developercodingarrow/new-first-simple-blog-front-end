"use client";
import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "@/src/contextApi/AppcontextApi";
import styles from "./css/regsiterAuthModel.module.css";

export default function ReagisterAuthModel() {
  const { isunAuthModel, setisunAuthModel } = useContext(AppContext);
  return (
    <>
      {isunAuthModel && (
        <div className={styles.main_conatiner}>
          <div className={styles.inner_container}></div>
        </div>
      )}
    </>
  );
}
