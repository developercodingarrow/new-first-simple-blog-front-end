"use client";
import React, { useEffect, useState, useContext } from "react";
import styles from "./usertable.module.css";
import DynimicTable from "@/src/app/_adminPanel/components/csr_components/table_elements/DynimicTable";
import {
  usertableColumns,
  SuperAdminUserColum,
} from "@/src/app/_adminPanel/jsonData/tableData";
import TableFillterBar from "@/src/app/_adminPanel/components/csr_components/table_elements/tableFillter/tableFillterBar";
import { FillterContext } from "@/src/app/_adminPanel/context_api/FillterContextApi";
import { allUserListAction } from "@/src/app/_adminPanel/admin_actions/adminUserApi";
import useUserRoleColumns from "@/src/app/_adminPanel/custome-hooks/useUserRoleColumns";
import TableFooter from "@/src/app/_adminPanel/components/csr_components/table_elements/table-footer/TableFooter";

export default function UserWrapper(props) {
  const userRole = "super-admin";
  const [allusers, setallusers] = useState([]);
  const { visibalRows, setvisibalRows } = useContext(FillterContext);
  const [isActionLoading, setIsActionLoading] = useState(false);

  const roleBasedColumns = useUserRoleColumns(userRole, usertableColumns, {
    "super-admin": SuperAdminUserColum,
  });

  const handelGetData = async () => {
    try {
      const res = await allUserListAction();
      console.log("result---", res.data.result);
      setallusers(res.data.result);
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
        <TableFillterBar data={allusers} />
      </div>
      <div className={styles.table_wrapper}>
        <DynimicTable
          tableColumns={roleBasedColumns}
          tableSampleData={visibalRows}
        />
      </div>
      <div className={styles.table_wrapper}>
        <TableFooter data={allusers} setIsActionLoading={setIsActionLoading} />
      </div>
    </div>
  );
}
