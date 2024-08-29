import React from "react";
// import { inter, roboto } from "../../lib/fonts";
import "../globals.css";
import AppContextProvider from "@/src/contextApi/AppcontextApi";
import Footer from "@/src/components/server-components/footer/Footer";
import NavBar from "@/src/components/server-components/Navbar/NavBar";
import { GoogleOAuthProvider } from "@react-oauth/google";
export default function layout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${inter.variable} ${roboto.variable}`}> */}
      <body>
        <AppContextProvider>
          <GoogleOAuthProvider clientId="575999030621-q9l875mbikilrm28q7sbj7ed3pf3kehq.apps.googleusercontent.com">
            <div>
              <NavBar />
            </div>
            <div className="children_wrapper">{children}</div>
            <Footer />
          </GoogleOAuthProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
