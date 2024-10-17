"use client";
import React, { useEffect, useState, useContext } from "react";
import styles from "../../pagesStyle.module.css";

import {
  tagtableColumns,
  SuperAdminColum,
} from "@/src/app/_adminPanel/jsonData/tableData";
import { FillterContext } from "@/src/app/_adminPanel/context_api/FillterContextApi";
import DynimicTable from "@/src/app/_adminPanel/components/csr_components/table_elements/DynimicTable";
import TagListFillterBar from "@/src/app/_adminPanel/components/csr_components/table_elements/tableFillter/tagListFillterBar";
import useUserRoleColumns from "@/src/app/_adminPanel/custome-hooks/useUserRoleColumns";
import TableFooter from "@/src/app/_adminPanel/components/csr_components/table_elements/table-footer/TableFooter";
import { AuthContext } from "@/src/app/_contextApi/authContext";
import {
  tagverificationAction,
  deleteSingleTagAction,
  createTagAction,
  tagListAction,
} from "@/src/app/utils/adminActions/authTagActions";
import toast, { Toaster } from "react-hot-toast";

export default function AdminTagswrapper(props) {
  const { data } = props;
  const { authUser } = useContext(AuthContext);
  const userRole = authUser?.role;

  const [allTags, setallTags] = useState(data);
  const { visibalRows, setvisibalRows } = useContext(FillterContext);
  const [isActionLoading, setIsActionLoading] = useState(false); // Separate loading for actions like delete or verification

  const roleBasedColumns = useUserRoleColumns(userRole, tagtableColumns, {
    superAdmin: SuperAdminColum,
  });

  const handelDelete = async (data) => {
    try {
      const obj = {
        _id: data,
      };
      setIsActionLoading(true); // Set action-specific loading state
      const res = await deleteSingleTagAction(obj);
      if (res.status === "success") {
        setIsActionLoading(false); // Set action-specific loading state
        router.refresh();
      }
    } catch (error) {
      setIsActionLoading(false); // Set action-specific loading state
    }
  };

  const handelVerfication = async (data) => {
    try {
      const obj = {
        _id: data,
      };
      setIsActionLoading(true); // Set action-specific loading state
      const res = await tagverificationAction(obj);
      if (res.status === "success") {
        toast.success(res.message);
        setIsActionLoading(false); // Set action-specific loading state
        router.refresh();
      }
    } catch (error) {
      setIsActionLoading(false); // Set action-specific loading state
    }
  };

  const handelGetData = async () => {
    try {
      const res = await tagListAction();

      setallTags(res.result);
    } catch (error) {}
  };

  useEffect(() => {
    handelGetData();
  }, [isActionLoading]);
  return (
    <div className={styles.page_container}>
      <Toaster />
      <div className={styles.fillter_bar}>
        {" "}
        <TagListFillterBar
          data={allTags}
          createHandel={createTagAction}
          setIsActionLoading={setIsActionLoading}
        />
      </div>
      <div className={styles.table_wrapper}>
        <DynimicTable
          tableColumns={roleBasedColumns}
          tableSampleData={visibalRows}
          handelSingleDelete={handelDelete}
          booleanSwithHandel={handelVerfication}
        />
      </div>
      <div className={styles.table_wrapper}>
        <TableFooter data={allTags} setIsActionLoading={setIsActionLoading} />
      </div>
    </div>
  );
}
