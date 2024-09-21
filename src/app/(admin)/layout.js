import React from "react";
import Layoutwrapper from "../_adminPanel/layout/layoutwrapper";
import "../globals.css";
import styles from "./pagesStyle.module.css";
import FillterContextProvider from "../_adminPanel/context_api/FillterContextApi";
import AuthContextProvider from "../_contextApi/authContext";
import { getSession } from "../lib/authentication";
import DeleteModel from "@/src/components/client-components/models/DeleteModel";
import ModelContextProvider from "../_contextApi/ModelContextApi";

export default async function Mainlayout({ children }) {
  const userDetails = await getSession();
  return (
    <html lang="en">
      <body className={styles.body_style}>
        <div>
          <AuthContextProvider authData={userDetails}>
            <FillterContextProvider>
              <ModelContextProvider>
                <DeleteModel />
                <Layoutwrapper>{children}</Layoutwrapper>
              </ModelContextProvider>
            </FillterContextProvider>
          </AuthContextProvider>
        </div>
      </body>
    </html>
  );
}
