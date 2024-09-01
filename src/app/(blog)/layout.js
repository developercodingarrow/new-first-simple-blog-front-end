import React from "react";
import "../globals.css";
import AppContextProvider from "@/src/contextApi/AppcontextApi";
import NavBar from "@/src/components/server-components/Navbar/NavBar";
import Footer from "@/src/components/server-components/footer/Footer";
import ReagisterAuthModel from "@/src/components/client-components/models/ReagisterAuthModel";
import ReportActionModel from "@/src/components/client-components/models/ReportActionModel";
export default function layout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <ReportActionModel />
          <ReagisterAuthModel />
          <div>
            <NavBar />
          </div>
          <div className="children_wrapper">{children}</div>
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
