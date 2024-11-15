"use client";
import { ModelsContext } from "@/src/app/_contextApi/ModelContextApi";
import React, { useContext, useState } from "react";

export default function TableDeleteIcon(props) {
  const { data, handler } = props;
  const { handelOpenDeleteModel } = useContext(ModelsContext);

  const handelOpenModel = () => {
    handelOpenDeleteModel(data, handler);
  };

  return (
    <div onClick={handelOpenModel}>
      {" "}
      <p>x</p>{" "}
    </div>
  );
}
