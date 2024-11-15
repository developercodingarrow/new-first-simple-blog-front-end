import React from "react";
import Layoutwrapper from "../_adminPanel/layout/layoutwrapper";
import "../globals.css";
import styles from "./pagesStyle.module.css";
import FillterContextProvider from "../_adminPanel/context_api/FillterContextApi";
import AuthContextProvider from "../_contextApi/authContext";
import { getSession } from "../lib/authentication";
import DeleteModel from "@/src/components/client-components/models/DeleteModel";
import ModelContextProvider from "../_contextApi/ModelContextApi";
import ImgModelContextProvider from "../_contextApi/ImgModelContextApi";
import AppContextProvider from "../_contextApi/AppContext";
import { getTagsWithRevalidation } from "../utils/tagActions";
import TagContextProvider from "../_contextApi/TagContextApi";

export default async function Mainlayout({ children }) {
  const userDetails = await getSession();
  const verifiedTags = await getTagsWithRevalidation();
  return (
    <html lang="en">
      <body className={styles.body_style}>
        <div>
          <AuthContextProvider authData={userDetails}>
            <AppContextProvider>
            <TagContextProvider verifiedTags={verifiedTags}>
                <FillterContextProvider>
                  <ImgModelContextProvider>
                    <ModelContextProvider>
                      <DeleteModel />
                      <Layoutwrapper>{children}</Layoutwrapper>
                    </ModelContextProvider>
                  </ImgModelContextProvider>
                </FillterContextProvider>
              </TagContextProvider>
            </AppContextProvider>
          </AuthContextProvider>
        </div>
      </body>
    </html>
  );
}
