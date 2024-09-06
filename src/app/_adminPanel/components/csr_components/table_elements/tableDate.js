"use client";
import React from "react";
import { formatDate } from "../../logicalFunctions/formatDate";

export default function TableDate(props) {
  const { data } = props;
  return (
    <div className={`dark_text_color small_text`}> {formatDate(data)} </div>
  );
}
