import React from "react";
import "../globals.css";
import NavBar from "@/src/components/server-components/Navbar/NavBar";
import Footer from "@/src/components/server-components/footer/Footer";
import ReagisterAuthModel from "@/src/components/client-components/models/ReagisterAuthModel";
import ReportActionModel from "@/src/components/client-components/models/ReportActionModel";

import BlogContextProvider from "../_contextApi/BlogContextApi";
import ModelContextProvider from "../_contextApi/ModelContextApi";
import SingleBlogLayout from "@/src/components/singleBlog/layout/SingleBlogLayout";
import { getSession } from "../lib/authentication";
import GoogleOneTap from "@/src/components/client-components/googleAuth/GoogleOneTap";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthContextProvider from "../_contextApi/authContext";

export default async function layout({ children }) {
  const userDetails = await getSession();
  return (
    <html lang="en">
      <body>
        <BlogContextProvider>
          <ModelContextProvider>
            <AuthContextProvider authData={userDetails}>
              <GoogleOAuthProvider clientId="575999030621-q9l875mbikilrm28q7sbj7ed3pf3kehq.apps.googleusercontent.com">
                <ReportActionModel />
                <ReagisterAuthModel />
                <div>
                  <div>
                    <NavBar userData={userDetails} />
                    {!userDetails && <GoogleOneTap />}
                  </div>
                </div>
                <div className="children_wrapper">
                  <SingleBlogLayout>{children}</SingleBlogLayout>
                </div>
                <Footer />
              </GoogleOAuthProvider>
            </AuthContextProvider>
          </ModelContextProvider>
        </BlogContextProvider>
      </body>
    </html>
  );
}
