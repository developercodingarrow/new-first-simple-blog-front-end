import React from "react";
import "../globals.css";
import AppContextProvider from "@/src/contextApi/AppcontextApi";
import NavBar from "@/src/components/server-components/Navbar/NavBar";
import UserPanelLayout from "@/src/layouts/server/userdashbord/UserPanelLayout";
import ImgModelContextProvider from "@/src/contextApi/ImgModelContextApi";
import UserContextProvider from "../_contextApi/UserContextApi";

export default function layout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <ImgModelContextProvider>
            <UserContextProvider>
              <div>
                <NavBar />
              </div>
              <div className="children_wrapper">
                <UserPanelLayout>{children}</UserPanelLayout>
              </div>
            </UserContextProvider>
          </ImgModelContextProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
