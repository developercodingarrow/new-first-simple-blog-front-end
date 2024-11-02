"use client";
import React from "react";

export default function TableEmail(props) {
  const { data } = props;
  return (
    <div
      className={`dark_text_color small_text`}
      style={{ textTransform: "lowercase" }}
    >
      {" "}
      {data}{" "}
    </div>
  );
}
