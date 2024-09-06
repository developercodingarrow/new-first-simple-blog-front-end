"use client";
import React, { useEffect, useState, useContext } from "react";
import styles from "./usertable.module.css";
import DynimicTable from "@/src/app/_adminPanel/components/csr_components/table_elements/DynimicTable";
import {
  tableColumns,
  tableSampleData,
} from "@/src/app/_adminPanel/jsonData/tableData";
import { allUserListAction } from "@/src/app/_adminPanel/admin_actions/adminUserApi";
import TableFillterBar from "@/src/app/_adminPanel/components/csr_components/table_elements/tableFillter/tableFillterBar";
import { FillterContext } from "@/src/app/_adminPanel/context_api/FillterContextApi";

export default function UserListPage() {
  const [allusers, setallusers] = useState([]);
  const { visibalRows, setvisibalRows } = useContext(FillterContext);

  
  const handelgetusers = async () => {
    try {
      const res = await allUserListAction();
      if (res.data.status === "success") {
        setallusers(res.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(allusers);

  useEffect(() => {
    handelgetusers();
  }, []);
  return (
    <div className={styles.page_container}>
      <div className={styles.fillter_bar}>
        <TableFillterBar data={allusers} />
      </div>
      <div className={styles.table_wrapper}>
        {visibalRows && (
          <DynimicTable
            tableColumns={tableColumns}
            tableSampleData={visibalRows}
          />
        )}
      </div>
    </div>
  );
}
