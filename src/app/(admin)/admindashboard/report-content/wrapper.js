"use client";
import React, { useState, useContext, useEffect } from "react";
import styles from "./reportpageStyles.module.css";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "@/src/app/_contextApi/authContext";
import useTableFillters from "@/src/app/_adminPanel/custome-hooks/useTableFillters";
import { FillterContext } from "@/src/app/_adminPanel/context_api/FillterContextApi";
import {
  repotedBlogtableColumns,
  superAdminRepotedblogColumns,
} from "@/src/app/_adminPanel/jsonData/tableData";
import useUserRoleColumns from "@/src/app/_adminPanel/custome-hooks/useUserRoleColumns";
import BlogsListFillterBar from "@/src/app/_adminPanel/components/csr_components/table_elements/tableFillter/blogsListFillterBar";
import DynimicTable from "@/src/app/_adminPanel/components/csr_components/table_elements/DynimicTable";
import NoContentMsg from "@/src/components/msgComponents/NoContentMsg";
import TableFooter from "@/src/app/_adminPanel/components/csr_components/table_elements/table-footer/TableFooter";
import { BlogReportAction } from "@/src/app/utils/adminActions/authBlogsActions";
import { suspendedBlogDeleteAction } from "@/src/app/utils/adminActions/authReportActions";

export default function Reportwrapper(props) {
  const { data } = props;
  console.log("Reportwrapper data----", data);
  const { authUser } = useContext(AuthContext);
  const userRole = authUser?.role;
  const [allReportBlogs, setallReportBlogs] = useState(data);
  const [isActionLoading, setIsActionLoading] = useState(false);
  const { handleSortClick, sortOrder } = useTableFillters(allReportBlogs);

  const roleBasedColumns = useUserRoleColumns(
    userRole,
    repotedBlogtableColumns,
    {
      superAdmin: superAdminRepotedblogColumns,
    }
  );
  const { visibalRows } = useContext(FillterContext);

  const handelReportaction = async (id, filedContent) => {
    setIsActionLoading(true);
    try {
      const obj = {
        id: id,
        filedContent,
      };

      const res = await BlogReportAction(obj);
      console.log("BlogReportAction--", res);
      if (res.status === "success") {
        toast.success(res.message);
        setIsActionLoading(false);
      }
    } catch (error) {
      setIsActionLoading(false);
    }
  };

  const handelDelete = async (data) => {
    try {
      const obj = {
        id: data,
      };
      const res = await suspendedBlogDeleteAction(obj);
      console.log(res);
    } catch (error) {}
  };

  return (
    <div className={styles.page_container}>
      <Toaster />
      <div className={styles.fillter_bar}>
        <BlogsListFillterBar data={allReportBlogs} />
      </div>
      <div className={styles.table_wrapper}>
        {visibalRows.length >= 1 ? (
          <DynimicTable
            tableColumns={roleBasedColumns}
            tableSampleData={visibalRows}
            handelSingleDelete={handelDelete}
            threestateswitchHandler={handelReportaction}
          />
        ) : (
          <div>
            <NoContentMsg />
          </div>
        )}
      </div>
      <div className={styles.table_wrapper}>
        <TableFooter data={allReportBlogs} />
      </div>
    </div>
  );
}
