import React from "react";
import "../globals.css";
import NavBar from "@/src/components/server-components/Navbar/NavBar";


import BlogContextProvider from "../_contextApi/BlogContextApi";
import ModelContextProvider from "../_contextApi/ModelContextApi";
import TagContextProvider from "../_contextApi/TagContextApi";
import ImgModelContextProvider from "../_contextApi/ImgModelContextApi";

export default function layout({ children }) {
  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
}
