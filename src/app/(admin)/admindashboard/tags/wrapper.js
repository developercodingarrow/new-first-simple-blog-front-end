"use client";
import React, { useEffect, useState, useContext } from "react";
import styles from "../../pagesStyle.module.css";
import TagListFillterBar from "@/src/app/_adminPanel/components/csr_components/table_elements/tableFillter/tagListFillterBar";
import DynimicTable from "@/src/app/_adminPanel/components/csr_components/table_elements/DynimicTable";
import { useRouter } from "next/navigation";
import { FillterContext } from "@/src/app/_adminPanel/context_api/FillterContextApi";
import {
  tagfaturetableColumns,
  SuperAdminColum,
} from "@/src/app/_adminPanel/jsonData/tableData";
import useUserRoleColumns from "@/src/app/_adminPanel/custome-hooks/useUserRoleColumns";
import TableFooter from "@/src/app/_adminPanel/components/csr_components/table_elements/table-footer/TableFooter";
import { AuthContext } from "@/src/app/_contextApi/authContext";
import {
  deleteSingleTagAction,
  tagFeatureAction,
  createTagAction,
  tagListAction,
} from "@/src/app/utils/adminActions/authTagActions";
import toast, { Toaster } from "react-hot-toast";

export default function Tagwrapper(props) {
  const { data } = props;
  const router = useRouter();
  const { authUser } = useContext(AuthContext);
  const userRole = authUser?.role;

  const [allTags, setallTags] = useState(data);
  const { visibalRows } = useContext(FillterContext);
  const [isActionLoading, setIsActionLoading] = useState(false);

  const roleBasedColumns = useUserRoleColumns(userRole, tagfaturetableColumns, {
    superAdmin: SuperAdminColum,
  });

  const handelFeatueTag = async (data) => {
    try {
      const obj = {
        _id: data,
      };
      setIsActionLoading(true); // Set action-specific loading state
      const res = await tagFeatureAction(obj);

      if (res.status === "success") {
        toast.success(res.message);
        setIsActionLoading(false); // Set action-specific loading state
        console.log("tag featured", res);
        router.refresh();
      }
    } catch (error) {
      setIsActionLoading(false); // Set action-specific loading state
      console.log(error);
    }
  };

  const handelDelete = async (data) => {
    try {
      const obj = {
        id: data,
      };
      setIsActionLoading(true); // Set action-specific loading state
      const res = await deleteSingleTagAction(obj);
      if (res.status === "success") {
        toast.success(res.message);
        console.log("delete tags", res);
        setIsActionLoading(false); // Set action-specific loading state
        router.refresh();
      }
    } catch (error) {
      setIsActionLoading(false); // Set action-specific loading state
      console.log(error);
    }
  };

  const handelGetData = async () => {
    try {
      const res = await tagListAction();
      console.log("result---", res.result);

      setallTags(res.result);
    } catch (error) {
      console.log(error);
    }
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
          setIsActionLoading={setIsActionLoading}
          createHandel={createTagAction}
        />
      </div>
      <div className={styles.table_wrapper}>
        <DynimicTable
          tableColumns={roleBasedColumns}
          tableSampleData={visibalRows}
          handelSingleDelete={handelDelete}
          booleanSwithHandel={handelFeatueTag}
        />
      </div>
      <div className={styles.table_wrapper}>
        <TableFooter data={allTags} />
      </div>
    </div>
  );
}
