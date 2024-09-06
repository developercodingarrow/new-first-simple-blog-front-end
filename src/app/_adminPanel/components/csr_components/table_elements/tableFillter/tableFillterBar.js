"use client";
import React, { useEffect } from "react";
import styles from "./css/tablfillterbar.module.css";
import TableSearch from "./tableSearch";
import useTableFillters from "@/src/app/_adminPanel/custome-hooks/useTableFillters";
import DateRange from "./dateRange";
export default function TableFillterBar(props) {
  const { data } = props;

  console.log("fillter bar---", data);
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
            searchFiled="email"
            placholder="Search e-mail..."
          />
        </div>
        <div className={styles.search_Compoent_wrraper}>
          <TableSearch
            searchHandel={searchByTableFiled}
            searchFiled="name"
            placholder="Search name..."
          />
        </div>
        <div className={styles.dateRange_Compoent_wrraper}>
          <DateRange handelDateRange={filterByDate} />
        </div>
      </div>
    </div>
  );
}
