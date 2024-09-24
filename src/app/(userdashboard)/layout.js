import React from "react";
import "../globals.css";
import NavBar from "@/src/components/server-components/Navbar/NavBar";

import { getSession } from "../lib/authentication";
import AuthContextProvider from "../_contextApi/authContext";
import UserDashbordLayout from "@/src/components/userDashbord/layout/UserDashbordLayout";
import ModelContextProvider from "../_contextApi/ModelContextApi";
import Footer from "@/src/components/server-components/footer/Footer";
import ImgModelContextProvider from "../_contextApi/ImgModelContextApi";

export default async function layout({ children }) {
  const userDetails = await getSession();
  return (
    <html lang="en">
      <body>
        <AuthContextProvider authData={userDetails}>
          <ImgModelContextProvider>
            <ModelContextProvider>
              <div>
                <NavBar userData={userDetails} />
              </div>
              <div className="children_wrapper">
                <UserDashbordLayout>{children}</UserDashbordLayout>
              </div>
              <Footer />
            </ModelContextProvider>
          </ImgModelContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
