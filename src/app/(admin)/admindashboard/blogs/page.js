"use client";
import React, { useEffect, useState, useContext } from "react";
import DynimicTable from "@/src/app/_adminPanel/components/csr_components/table_elements/DynimicTable";
import styles from "./bloglistpage.module.css";
import {
  blogtableColumns,
  blogsSampleData,
} from "@/src/app/_adminPanel/jsonData/tableData";

import BlogsListFillterBar from "@/src/app/_adminPanel/components/csr_components/table_elements/tableFillter/blogsListFillterBar";
import { allBlogsListAction } from "@/src/app/_adminPanel/admin_actions/adminBlogApi";
import useTableFillters from "@/src/app/_adminPanel/custome-hooks/useTableFillters";
export default function BlogListpage() {
  const [allBlogs, setallBlogs] = useState([]);

  const handelswith = () => {
    alert("switch toogle");
  };

  const handelgetBlogs = async () => {
    try {
      const res = await allBlogsListAction();
      if (res.data.status === "success") {
        setallBlogs(res.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handelgetBlogs();
  }, []);

  return (
    <div className={styles.page_container}>
      <div className={styles.fillter_bar}>
        <BlogsListFillterBar data={allBlogs} />
      </div>
      <div className={styles.table_wrapper}>
        <DynimicTable
          tableColumns={blogtableColumns}
          tableSampleData={allBlogs}
          booleanSwithHandel={handelswith}
        />
      </div>
    </div>
  );
}
