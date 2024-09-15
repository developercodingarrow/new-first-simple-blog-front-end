import React from "react";
import "../globals.css";
import AppContextProvider from "@/src/contextApi/AppcontextApi";
import NavBar from "@/src/components/server-components/Navbar/NavBar";
import ImgModelContextProvider from "@/src/contextApi/ImgModelContextApi";
import UserContextProvider from "../_contextApi/UserContextApi";
import { getSession } from "../lib/authentication";
import AuthContextProvider from "../_contextApi/authContext";
import UserDashbordLayout from "@/src/components/userDashbord/layout/UserDashbordLayout";
import ModelContextProvider from "../_contextApi/ModelContextApi";

export default async function layout({ children }) {
  const userDetails = await getSession();
  return (
    <html lang="en">
      <body>
        <AuthContextProvider authData={userDetails}>
          <AppContextProvider userDetails={userDetails}>
            <ImgModelContextProvider>
              <UserContextProvider>
                <ModelContextProvider>
                  <div>
                    <NavBar userData={userDetails} />
                  </div>
                  <div className="children_wrapper">
                    <UserDashbordLayout>{children}</UserDashbordLayout>
                  </div>
                </ModelContextProvider>
              </UserContextProvider>
            </ImgModelContextProvider>
          </AppContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
