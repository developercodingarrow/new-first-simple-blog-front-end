import React from "react";
import "../globals.css";
import AppContextProvider from "@/src/contextApi/AppcontextApi";
import Footer from "@/src/components/server-components/footer/Footer";
import NavBar from "@/src/components/server-components/Navbar/NavBar";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { getSession } from "../lib/authentication";

export default async function layout({ children }) {
  const userDetails = await getSession();
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <GoogleOAuthProvider clientId="575999030621-q9l875mbikilrm28q7sbj7ed3pf3kehq.apps.googleusercontent.com">
            <div className={"navbar_wrapper"}>
              <NavBar userData={userDetails} />
            </div>
            <div className="children_wrapper">
              <main>{children}</main>
            </div>
            <Footer />
          </GoogleOAuthProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
