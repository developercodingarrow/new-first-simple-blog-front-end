"use client";
import Link from "next/link";
import React from "react";
import style from "./css/tableviewBtn.module.css";

export default function TableViewBtn(props) {
  const { data, path } = props;
  return (
    <div>
      <Link href={`/${path}/${data}`} className={style.view_link}>
        view
      </Link>
    </div>
  );
}
