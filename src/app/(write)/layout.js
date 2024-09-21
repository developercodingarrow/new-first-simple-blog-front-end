import React from "react";
import "../globals.css";
import AppContextProvider from "@/src/contextApi/AppcontextApi";
import NavBar from "@/src/components/server-components/Navbar/NavBar";
import ImgModelContextProvider from "@/src/contextApi/ImgModelContextApi";
import TagContextProvider from "@/src/contextApi/TagContextApi";

import BlogContextProvider from "../_contextApi/BlogContextApi";
import ModelContextProvider from "../_contextApi/ModelContextApi";

export default function layout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <ImgModelContextProvider>
            <TagContextProvider>
              <BlogContextProvider>
                <ModelContextProvider>
                  <div>
                    <NavBar />
                  </div>
                  <div className="children_wrapper">{children}</div>
                </ModelContextProvider>
              </BlogContextProvider>
            </TagContextProvider>
          </ImgModelContextProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
