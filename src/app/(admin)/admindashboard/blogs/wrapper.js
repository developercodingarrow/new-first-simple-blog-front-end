"use client";
import React, { useState, useContext } from "react";
import styles from "./bloglistpage.module.css";
import DynimicTable from "@/src/app/_adminPanel/components/csr_components/table_elements/DynimicTable";
import {
  blogtableColumns,
  superAdminblogColumns,
} from "@/src/app/_adminPanel/jsonData/tableData";
import BlogsListFillterBar from "@/src/app/_adminPanel/components/csr_components/table_elements/tableFillter/blogsListFillterBar";
import { FillterContext } from "@/src/app/_adminPanel/context_api/FillterContextApi";
import useUserRoleColumns from "@/src/app/_adminPanel/custome-hooks/useUserRoleColumns";
import TableFooter from "@/src/app/_adminPanel/components/csr_components/table_elements/table-footer/TableFooter";
import useTableFillters from "@/src/app/_adminPanel/custome-hooks/useTableFillters";
import { AuthContext } from "@/src/app/_contextApi/authContext";
import { featuredBlogAction } from "@/src/app/utils/adminActions/authBlogsActions";
import toast, { Toaster } from "react-hot-toast";

export default function Blogswrapper(props) {
  const { data } = props;
  const { authUser } = useContext(AuthContext);
  const userRole = authUser?.role;
  const [allBlogs, setallBlogs] = useState(data);
  const { handleSortClick, sortOrder } = useTableFillters(allBlogs);
  const roleBasedColumns = useUserRoleColumns(userRole, blogtableColumns, {
    superAdmin: superAdminblogColumns,
  });
  const { visibalRows } = useContext(FillterContext);

  const handelswith = async (data) => {
    try {
      const obj = {
        _id: data,
      };
      const res = await featuredBlogAction(obj);

      if (res.status === "success") {
        toast.success(res.message);
      }
    } catch (error) {}
  };

  return (
    <div className={styles.page_container}>
      <Toaster />
      <div className={styles.fillter_bar}>
        <BlogsListFillterBar data={allBlogs} />
      </div>
      <div className={styles.table_wrapper}>
        <DynimicTable
          tableColumns={roleBasedColumns}
          tableSampleData={visibalRows}
          booleanSwithHandel={handelswith}
          sorthandel={handleSortClick}
          sortOrder={sortOrder}
        />
      </div>
      <div className={styles.table_wrapper}>
        <TableFooter data={allBlogs} />
      </div>
    </div>
  );
}
