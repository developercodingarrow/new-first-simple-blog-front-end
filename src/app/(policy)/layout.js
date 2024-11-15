import React from "react";
import "../globals.css";
import AppContextProvider from "../_contextApi/AppContext";
import { getSession } from "../lib/authentication";
import AuthContextProvider from "../_contextApi/authContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_AUTH_CLIENT_ID } from "@/config";
import GoogleOneTap from "@/src/components/client-components/googleAuth/GoogleOneTap";
import NavBar from "@/src/components/server-components/Navbar/NavBar";
import TagContextProvider from "../_contextApi/TagContextApi";
import ModelContextProvider from "../_contextApi/ModelContextApi";
import Footer from "@/src/components/server-components/footer/Footer";
import { getTagsWithRevalidation } from "../utils/tagActions";

export default async function Termslayout({ children }) {
  const userDetails = await getSession();
  const verifiedTags = await getTagsWithRevalidation();
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <ModelContextProvider>
            <AuthContextProvider authData={userDetails}>
              <GoogleOAuthProvider clientId={GOOGLE_AUTH_CLIENT_ID}>
                <TagContextProvider verifiedTags={verifiedTags}>
                  <div>
                    <NavBar userData={userDetails} />
                    {!userDetails && <GoogleOneTap />}
                  </div>
                  <div className="children_wrapper"> {children}</div>
                  <Footer />
                </TagContextProvider>
              </GoogleOAuthProvider>
            </AuthContextProvider>
          </ModelContextProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
