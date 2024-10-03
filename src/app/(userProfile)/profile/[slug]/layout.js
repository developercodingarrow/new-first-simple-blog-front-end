import React from "react";
import "../../../globals.css";
import AuthContextProvider from "../../../_contextApi/authContext";
import NavBar from "@/src/components/server-components/Navbar/NavBar";
import ModelContextProvider from "../../../_contextApi/ModelContextApi";
import UserProfileLayOut from "@/src/components/userprofile/layout/UserProfileLayOut";
import Footer from "@/src/components/server-components/footer/Footer";
import { profileUserDeatils } from "../../apiactions";
import { getSession } from "@/src/app/lib/authentication";
import GoogleOneTap from "@/src/components/client-components/googleAuth/GoogleOneTap";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ReportActionModel from "@/src/components/client-components/models/ReportActionModel";
import ReagisterAuthModel from "@/src/components/client-components/models/ReagisterAuthModel";
import BlogContextProvider from "@/src/app/_contextApi/BlogContextApi";
import { GOOGLE_AUTH_CLIENT_ID } from "@/config";

async function getData(slug) {
  try {
    const res = await profileUserDeatils(slug);
    if (res.status === "success") {
      return await res.result;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    // throw new Error(`Failed to fetch data: ${error}`);
  }
}

export default async function Profilelayout({ children, params }) {
  const userDetails = await getSession();
  const slug = params?.slug;
  const userData = await getData(slug);

  return (
    <html lang="en">
      <body>
        <AuthContextProvider authData={userDetails}>
          <ModelContextProvider>
            <BlogContextProvider>
              <GoogleOAuthProvider clientId={GOOGLE_AUTH_CLIENT_ID}>
                <ReportActionModel />
                <ReagisterAuthModel />
                <div>
                  <NavBar userData={userDetails} />
                  {!userDetails && <GoogleOneTap />}
                </div>
                <div className="children_wrapper">
                  <UserProfileLayOut userData={userData}>
                    {children}
                  </UserProfileLayOut>
                </div>
                <div>
                  <Footer />
                </div>
              </GoogleOAuthProvider>
            </BlogContextProvider>
          </ModelContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
