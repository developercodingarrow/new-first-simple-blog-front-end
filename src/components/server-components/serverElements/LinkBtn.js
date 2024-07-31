import React from "react";
import Link from "next/link";

export default function LinkBtn(props) {
  const { linkText, btnSize, hrfLink } = props;
  return (
    <Link href={hrfLink} className={`link_btn ${btnSize}`}>
      {linkText}
    </Link>
  );
}
