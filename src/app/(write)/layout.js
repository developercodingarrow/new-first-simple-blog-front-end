import React from "react";
import "../globals.css";
import NavBar from "@/src/components/server-components/Navbar/NavBar";
import BlogContextProvider from "../_contextApi/BlogContextApi";
import ModelContextProvider from "../_contextApi/ModelContextApi";
import TagContextProvider from "../_contextApi/TagContextApi";
import ImgModelContextProvider from "../_contextApi/ImgModelContextApi";
import AuthContextProvider from "../_contextApi/authContext";
import { getSession } from "../lib/authentication";
import AppDrawer from "@/src/components/appDrawer/AppDrawer";
import AppContextProvider from "../_contextApi/AppContext";

export default async function layout({ children }) {
  const userDetails = await getSession();
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <AuthContextProvider authData={userDetails}>
            <ImgModelContextProvider>
              <TagContextProvider>
                <BlogContextProvider>
                  <ModelContextProvider>
                    <AppDrawer />
                    <div>
                      <NavBar userData={userDetails} />
                    </div>
                    <div className="children_wrapper">{children}</div>
                  </ModelContextProvider>
                </BlogContextProvider>
              </TagContextProvider>
            </ImgModelContextProvider>
          </AuthContextProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
