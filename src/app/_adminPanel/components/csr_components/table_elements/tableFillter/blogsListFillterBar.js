"use client";
import React, { useEffect } from "react";
import styles from "./css/tablfillterbar.module.css";
import TableSearch from "./tableSearch";
import useTableFillters from "@/src/app/_adminPanel/custome-hooks/useTableFillters";

export default function BlogsListFillterBar(props) {
  const { data } = props;

  const { updateVisibleRows, searchByTableFiled, filterByDate } =
    useTableFillters(data);

  useEffect(() => {
    updateVisibleRows(data);
  }, [data]);
  return (
    <div className={styles.main_contatiner}>
      <div className={styles.inner_container}>
        <div className={styles.search_Compoent_wrraper}>
          <TableSearch
            searchHandel={searchByTableFiled}
            searchFiled="blogTitle"
            placholder="Search blog..."
          />
        </div>
      </div>
    </div>
  );
}
