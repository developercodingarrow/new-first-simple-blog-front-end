import React from "react";
import Layoutwrapper from "../_adminPanel/layout/layoutwrapper";
import "../globals.css";
import styles from "./pagesStyle.module.css";
import FillterContextProvider from "../_adminPanel/context_api/FillterContextApi";
export default function Mainlayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body_style}>
        <div>
          <FillterContextProvider>
            <Layoutwrapper>{children}</Layoutwrapper>
          </FillterContextProvider>
        </div>
      </body>
    </html>
  );
}
