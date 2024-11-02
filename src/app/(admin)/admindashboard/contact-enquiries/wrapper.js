"use client";
import React, { useState, useContext } from "react";
import styles from "../../pagesStyle.module.css";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "@/src/app/_contextApi/authContext";
import { FillterContext } from "@/src/app/_adminPanel/context_api/FillterContextApi";
import DynimicTable from "@/src/app/_adminPanel/components/csr_components/table_elements/DynimicTable";
import { contactEnquiretableColumns } from "@/src/app/_adminPanel/jsonData/tableData";
import useUserRoleColumns from "@/src/app/_adminPanel/custome-hooks/useUserRoleColumns";
import BlogsListFillterBar from "@/src/app/_adminPanel/components/csr_components/table_elements/tableFillter/blogsListFillterBar";
import TableFooter from "@/src/app/_adminPanel/components/csr_components/table_elements/table-footer/TableFooter";
export default function Contactwrapper(props) {
  const { data } = props;
  const [allContactEnquires, setallContactEnquires] = useState(data);
  const { authUser } = useContext(AuthContext);
  const { visibalRows } = useContext(FillterContext);
  const userRole = authUser?.role;
  const roleBasedColumns = useUserRoleColumns(
    userRole,
    contactEnquiretableColumns,
    {
      superAdmin: [],
    }
  );

  return (
    <div className={styles.page_container}>
      <Toaster />
      <div className={styles.fillter_bar}>
        <BlogsListFillterBar data={allContactEnquires} />
      </div>
      <div className={styles.table_wrapper}>
        <DynimicTable
          tableColumns={roleBasedColumns}
          tableSampleData={visibalRows}
        />
      </div>
      <div className={styles.table_wrapper}>
        <TableFooter data={allContactEnquires} />
      </div>
    </div>
  );
}
