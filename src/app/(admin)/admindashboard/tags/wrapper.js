"use client";
import React, { useEffect, useState, useContext } from "react";
import styles from "../../pagesStyle.module.css";
import TagListFillterBar from "@/src/app/_adminPanel/components/csr_components/table_elements/tableFillter/tagListFillterBar";
import DynimicTable from "@/src/app/_adminPanel/components/csr_components/table_elements/DynimicTable";
import { allTagListAction } from "@/src/app/_adminPanel/admin_actions/adminTagApi";
import { FillterContext } from "@/src/app/_adminPanel/context_api/FillterContextApi";
import { tagtableColumns } from "@/src/app/_adminPanel/jsonData/tableData";
import useUserRoleColumns from "@/src/app/_adminPanel/custome-hooks/useUserRoleColumns";

export default function Tagwrapper() {
  const userRole = "super-admin";
  const [allTags, setallTags] = useState([]);
  const { visibalRows, setvisibalRows } = useContext(FillterContext);
  const [isActionLoading, setIsActionLoading] = useState(false);

  const roleBasedColumns = useUserRoleColumns(userRole, tagtableColumns, {
    "super-admin": [],
  });

  const handelGetData = async () => {
    try {
      const res = await allTagListAction();
      console.log("result---", res.data.result);

      setallTags(res.data.result);
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
        {" "}
        <TagListFillterBar
          data={allTags}
          setIsActionLoading={setIsActionLoading}
        />
      </div>
      <div className={styles.table_wrapper}>
        <DynimicTable
          tableColumns={roleBasedColumns}
          tableSampleData={visibalRows}
        />
      </div>
    </div>
  );
}
