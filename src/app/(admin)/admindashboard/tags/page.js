"use client";
import React, { useEffect, useState, useContext } from "react";
import styles from "../../pagesStyle.module.css";
import {
  allTagListAction,
  deleteSingleTagAction,
} from "@/src/app/_adminPanel/admin_actions/adminTagApi";
import TableFillterBar from "@/src/app/_adminPanel/components/csr_components/table_elements/tableFillter/tableFillterBar";
import { tagtableColumns } from "@/src/app/_adminPanel/jsonData/tableData";
import { FillterContext } from "@/src/app/_adminPanel/context_api/FillterContextApi";
import DynimicTable from "@/src/app/_adminPanel/components/csr_components/table_elements/DynimicTable";
import TagListFillterBar from "@/src/app/_adminPanel/components/csr_components/table_elements/tableFillter/tagListFillterBar";

export default function TagListpage() {
  const [allTags, setallTags] = useState([]);
  const { visibalRows, setvisibalRows } = useContext(FillterContext);

  const handelgetTags = async () => {
    try {
      const res = await allTagListAction();
      if (res.data.status === "success") {
        setallTags(res.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelDelete = async () => {
    alert("handel delte");
  };

  useEffect(() => {
    handelgetTags();
  }, []);
  return (
    <div className={styles.page_container}>
      <div className={styles.fillter_bar}>
        {" "}
        <TagListFillterBar data={allTags} />
      </div>
      <div className={styles.table_wrapper}>
        {visibalRows && (
          <DynimicTable
            tableColumns={tagtableColumns}
            tableSampleData={visibalRows}
          />
        )}
      </div>
    </div>
  );
}
