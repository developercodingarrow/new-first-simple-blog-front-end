import React from "react";
import { inter, roboto } from "../../lib/fonts";
import "../globals.css";
import AppContextProvider from "@/src/contextApi/AppcontextApi";
import NavBar from "@/src/components/server-components/Navbar/NavBar";
import UserPanelLayout from "@/src/layouts/server/userdashbord/UserPanelLayout";

export default function layout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable}`}>
        <AppContextProvider>
          <div>
            <NavBar />
          </div>
          <div className="children_wrapper">
            <UserPanelLayout>{children}</UserPanelLayout>
          </div>
        </AppContextProvider>
      </body>
    </html>
  );
}
