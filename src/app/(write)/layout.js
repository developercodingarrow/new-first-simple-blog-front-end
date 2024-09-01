import React from "react";
import "../globals.css";
import AppContextProvider from "@/src/contextApi/AppcontextApi";
import NavBar from "@/src/components/server-components/Navbar/NavBar";
import UserPanelLayout from "@/src/layouts/server/userdashbord/UserPanelLayout";
import ImgModelContextProvider from "@/src/contextApi/ImgModelContextApi";

import TagContextProvider from "@/src/contextApi/TagContextApi";
import BlogContextProvider from "@/src/_contextApi/BlogContextApi";

export default function layout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <ImgModelContextProvider>
            <TagContextProvider>
              <BlogContextProvider>
                <div>
                  <NavBar />
                </div>
                <div className="children_wrapper">{children}</div>
              </BlogContextProvider>
            </TagContextProvider>
          </ImgModelContextProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
