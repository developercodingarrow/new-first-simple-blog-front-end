"use client";
import React, { useEffect, useState, useContext } from "react";
import styles from "./bloglistpage.module.css";
import DynimicTable from "@/src/app/_adminPanel/components/csr_components/table_elements/DynimicTable";
import {
  blogtableColumns,
  superAdminblogColumns,
} from "@/src/app/_adminPanel/jsonData/tableData";

import BlogsListFillterBar from "@/src/app/_adminPanel/components/csr_components/table_elements/tableFillter/blogsListFillterBar";
import { FillterContext } from "@/src/app/_adminPanel/context_api/FillterContextApi";
import { allBlogsListAction } from "@/src/app/_adminPanel/admin_actions/adminBlogApi";
import useUserRoleColumns from "@/src/app/_adminPanel/custome-hooks/useUserRoleColumns";
export default function Blogswrapper(props) {
  const userRole = "super-admin";
  const { data } = props;
  const [allBlogs, setallBlogs] = useState([]);
  const [isActionLoading, setIsActionLoading] = useState(false);

  const roleBasedColumns = useUserRoleColumns(userRole, blogtableColumns, {
    "super-admin": superAdminblogColumns,
  });

  const { visibalRows, setvisibalRows } = useContext(FillterContext);
  const handelswith = () => {
    alert("switch toogle");
  };

  const handelGetData = async () => {
    try {
      const res = await allBlogsListAction();
      console.log("result---", res.data.result);
      setallBlogs(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handelGetData();
  }, [isActionLoading]);
  return (
    <div className={styles.page_container}>
      <div className={styles.fillter_bar}>
        <BlogsListFillterBar data={allBlogs} />
      </div>
      <div className={styles.table_wrapper}>
        <DynimicTable
          tableColumns={roleBasedColumns}
          tableSampleData={visibalRows}
          booleanSwithHandel={handelswith}
        />
      </div>
    </div>
  );
}
