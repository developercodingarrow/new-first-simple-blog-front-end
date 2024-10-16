import React from "react";
import "../globals.css";
import Footer from "@/src/components/server-components/footer/Footer";
import NavBar from "@/src/components/server-components/Navbar/NavBar";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { getSession } from "../lib/authentication";
import { GOOGLE_AUTH_CLIENT_ID } from "@/config";
import ModelContextProvider from "../_contextApi/ModelContextApi";
import AppContextProvider from "../_contextApi/AppContext";
import TagContextProvider from "../_contextApi/TagContextApi";
import AuthContextProvider from "../_contextApi/authContext";
import AppDrawer from "@/src/components/appDrawer/AppDrawer";

export default async function layout({ children }) {
  const userDetails = await getSession();
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <AuthContextProvider>
            <GoogleOAuthProvider clientId={GOOGLE_AUTH_CLIENT_ID}>
              <TagContextProvider>
                <ModelContextProvider>
                  <AppDrawer />
                  <div className={"navbar_wrapper"}>
                    <NavBar userData={userDetails} />
                  </div>
                  <div className="children_wrapper">
                    <main>{children}</main>
                  </div>
                  <Footer />
                </ModelContextProvider>
              </TagContextProvider>
            </GoogleOAuthProvider>
          </AuthContextProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
