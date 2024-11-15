import React from "react";

export default function TablePopulatedEmail(props) {
  const { data } = props;
  console.log("TablePopulatedEmail--", data);
  return (
    <div
      className={`dark_text_color small_text`}
      style={{ textTransform: "lowercase" }}
    >
      {data?.email}
    </div>
  );
}
