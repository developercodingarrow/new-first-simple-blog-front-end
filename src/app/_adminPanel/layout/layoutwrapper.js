import React from "react";
import AdminLayout from "./adminLayout";
import styles from "./css/adminlayout.module.css";
export default function Layoutwrapper({ children }) {
  return (
    <div className={styles.layout_wrraper}>
      <AdminLayout>{children}</AdminLayout>
    </div>
  );
}
