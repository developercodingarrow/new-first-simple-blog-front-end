import React from "react";
import "../globals.css";
import AppContextProvider from "@/src/contextApi/AppcontextApi";
import NavBar from "@/src/components/server-components/Navbar/NavBar";
import Footer from "@/src/components/server-components/footer/Footer";
import ReagisterAuthModel from "@/src/components/client-components/models/ReagisterAuthModel";
import ReportActionModel from "@/src/components/client-components/models/ReportActionModel";

import BlogContextProvider from "../_contextApi/BlogContextApi";
import ModelContextProvider from "../_contextApi/ModelContextApi";

export default function layout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <BlogContextProvider>
            <ModelContextProvider>
              <ReportActionModel />
              <ReagisterAuthModel />
              <div>
                <NavBar />
              </div>
              <div className="children_wrapper">{children}</div>
              <Footer />
            </ModelContextProvider>
          </BlogContextProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
