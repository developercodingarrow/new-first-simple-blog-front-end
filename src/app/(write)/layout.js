import React from "react";
import "../globals.css";
import NavBar from "@/src/components/server-components/Navbar/NavBar";

import BlogContextProvider from "../_contextApi/BlogContextApi";
import ModelContextProvider from "../_contextApi/ModelContextApi";
import TagContextProvider from "../_contextApi/TagContextApi";
import ImgModelContextProvider from "../_contextApi/ImgModelContextApi";
import AuthContextProvider from "../_contextApi/authContext";
import { getSession } from "../lib/authentication";

export default async function layout({ children }) {
  const userDetails = await getSession();
  return (
    <html lang="en">
      <body>
        <AuthContextProvider authData={userDetails}>
          <ImgModelContextProvider>
            <TagContextProvider>
              <BlogContextProvider>
                <ModelContextProvider>
                  <div>
                    <NavBar userData={userDetails} />
                  </div>
                  <div className="children_wrapper">{children}</div>
                </ModelContextProvider>
              </BlogContextProvider>
            </TagContextProvider>
          </ImgModelContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
