import React from "react";
import { inter, roboto } from "../../lib/fonts";
import "../globals.css";
import AppContextProvider from "@/src/contextApi/AppcontextApi";
import NavBar from "@/src/components/server-components/Navbar/NavBar";
import UserPanelLayout from "@/src/layouts/server/userdashbord/UserPanelLayout";
import ImgModelContextProvider from "@/src/contextApi/ImgModelContextApi";
import BlogContextProvider from "@/src/contextApi/BlogContextApi";
import TagContextProvider from "@/src/contextApi/TagContextApi";

export default function layout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable}`}>
        <AppContextProvider>
          <ImgModelContextProvider>
            <BlogContextProvider>
              <TagContextProvider>
                <div>
                  <NavBar />
                </div>
                <div className="children_wrapper">{children}</div>
              </TagContextProvider>
            </BlogContextProvider>
          </ImgModelContextProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
