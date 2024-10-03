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
import TagContextProvider from "../_contextApi/TagContextApi";
import { GOOGLE_AUTH_CLIENT_ID } from "@/config";

export default async function layout({ children }) {
  const userDetails = await getSession();
  return (
    <html lang="en">
      <body>
        <BlogContextProvider>
          <ModelContextProvider>
            <AuthContextProvider authData={userDetails}>
              <TagContextProvider>
                <GoogleOAuthProvider clientId={GOOGLE_AUTH_CLIENT_ID}>
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
              </TagContextProvider>
            </AuthContextProvider>
          </ModelContextProvider>
        </BlogContextProvider>
      </body>
    </html>
  );
}
