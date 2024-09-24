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
import useUserRoleColumns from "@/src/app/_adminPanel/custome-hooks/useUserRoleColumns";
import TableFooter from "@/src/app/_adminPanel/components/csr_components/table_elements/table-footer/TableFooter";
import { AuthContext } from "@/src/app/_contextApi/authContext";

export default function UserWrapper(props) {
  const { data } = props;
  const { authUser } = useContext(AuthContext);
  const userRole = authUser?.role;

  const [allusers, setallusers] = useState(data);
  const { visibalRows } = useContext(FillterContext);
  const roleBasedColumns = useUserRoleColumns(userRole, usertableColumns, {
    superAdmin: SuperAdminUserColum,
  });

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
        <TableFooter data={allusers} />
      </div>
    </div>
  );
}
