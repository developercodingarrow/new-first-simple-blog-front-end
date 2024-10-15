"use client";
import React, { useContext } from "react";
import { FaBars } from "../../ApplicationIcons";
import { AppContext } from "@/src/app/_contextApi/AppContext";

export default function HangBug() {
  const { handelOpenMobileDrawer } = useContext(AppContext);

  return (
    <div onClick={handelOpenMobileDrawer}>
      <FaBars />
    </div>
  );
}
