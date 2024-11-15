"use client";
import React, { useState, useContext, useEffect } from "react";
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
import {
  featuredBlogAction,
  clientblogsList,
} from "@/src/app/utils/adminActions/authBlogsActions";
import toast, { Toaster } from "react-hot-toast";
import NoContentMsg from "@/src/components/msgComponents/NoContentMsg";

export default function Blogswrapper(props) {
  const { data } = props;
  const { authUser } = useContext(AuthContext);
  const userRole = authUser?.role;
  const [allBlogs, setallBlogs] = useState(data);
  const [isActionLoading, setIsActionLoading] = useState(false);
  const { handleSortClick, sortOrder } = useTableFillters(allBlogs);
  const roleBasedColumns = useUserRoleColumns(userRole, blogtableColumns, {
    superAdmin: superAdminblogColumns,
  });
  const { visibalRows } = useContext(FillterContext);

  const handelGetData = async () => {
    try {
      const res = await clientblogsList();
      console.log("get data--", res);
      setallBlogs(res.result);
    } catch (error) {}
  };

  const handelswith = async (data) => {
    setIsActionLoading(true);
    try {
      const obj = {
        _id: data,
      };
      const res = await featuredBlogAction(obj);

      if (res.status === "success") {
        toast.success(res.message);
        setIsActionLoading(false);
      }
    } catch (error) {
      setIsActionLoading(false);
    }
  };

  useEffect(() => {
    handelGetData();
  }, [isActionLoading]);

  return (
    <div className={styles.page_container}>
      <Toaster />
      <div className={styles.fillter_bar}>
        <BlogsListFillterBar data={allBlogs} />
      </div>
      <div className={styles.table_wrapper}>
        {visibalRows.length >= 1 ? (
          <DynimicTable
            tableColumns={roleBasedColumns}
            tableSampleData={visibalRows}
            booleanSwithHandel={handelswith}
            sorthandel={handleSortClick}
            sortOrder={sortOrder}
          />
        ) : (
          <div>
            <NoContentMsg />
          </div>
        )}
      </div>
      <div className={styles.table_wrapper}>
        <TableFooter data={allBlogs} />
      </div>
    </div>
  );
}
