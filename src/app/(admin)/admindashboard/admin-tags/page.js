"use client";
import React, { useEffect, useState, useContext } from "react";
import styles from "../../pagesStyle.module.css";
import {
  allTagListAction,
  deleteSingleTagAction,
  tagverificationAction,
} from "@/src/app/_adminPanel/admin_actions/adminTagApi";
import TableFillterBar from "@/src/app/_adminPanel/components/csr_components/table_elements/tableFillter/tableFillterBar";
import { tagtableColumns } from "@/src/app/_adminPanel/jsonData/tableData";
import { FillterContext } from "@/src/app/_adminPanel/context_api/FillterContextApi";
import DynimicTable from "@/src/app/_adminPanel/components/csr_components/table_elements/DynimicTable";
import TagListFillterBar from "@/src/app/_adminPanel/components/csr_components/table_elements/tableFillter/tagListFillterBar";

export default function AdminTags() {
  const [allTags, setallTags] = useState([]);
  const [isLoading, setisLoading] = useState(false);
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

  const handelDelete = async (data) => {
    try {
      const obj = {
        _id: data,
      };
      setisLoading(true);
      const res = await deleteSingleTagAction(obj);
      setisLoading(false);
      console.log(res);
    } catch (error) {
      setisLoading(false);
      console.log(error);
    }
  };

  const handelVerfication = async (data) => {
    try {
      const obj = {
        _id: data,
      };
      setisLoading(true);
      const res = await tagverificationAction(obj);
      setisLoading(false);
      console.log("tag verification", res);
    } catch (error) {
      setisLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    handelgetTags();
  }, [isLoading]);
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
            handelSingleDelete={handelDelete}
            booleanSwithHandel={handelVerfication}
          />
        )}
      </div>
    </div>
  );
}
