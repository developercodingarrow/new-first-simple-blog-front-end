"use client";
import React, { useState } from "react";

export default function TableDeleteIcon(props) {
  const { data, handler } = props;

  const deletehandler = () => {
    handler(data);
  };

  return (
    <div onClick={deletehandler}>
      {" "}
      <p>x</p>{" "}
    </div>
  );
}
