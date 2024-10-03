import React from "react";
import "../globals.css";
import Footer from "@/src/components/server-components/footer/Footer";
import NavBar from "@/src/components/server-components/Navbar/NavBar";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ModelContextProvider from "../_contextApi/ModelContextApi";
import TagContextProvider from "../_contextApi/TagContextApi";
import { GOOGLE_AUTH_CLIENT_ID } from "@/config";

export default function layout({ children }) {
  return (
    <html lang="en">
      <body>
        <GoogleOAuthProvider clientId={GOOGLE_AUTH_CLIENT_ID}>
          <ModelContextProvider>
            <TagContextProvider>
              <div>
                <NavBar />
              </div>
              <div className="children_wrapper">{children}</div>
              <Footer />
            </TagContextProvider>
          </ModelContextProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
