import NavBar from "@/src/components/server-components/Navbar/NavBar";
import { cookies } from "next/headers";
import "../globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Footer from "@/src/components/server-components/footer/Footer";
import GoogleOneTap from "@/src/components/client-components/googleAuth/GoogleOneTap";
import ReportActionModel from "@/src/components/client-components/models/ReportActionModel";
import styles from "./page.module.css";
import LayoutSideBar from "@/src/components/client-components/sideBar/LayoutSideBar";
import ReagisterAuthModel from "@/src/components/client-components/models/ReagisterAuthModel";
import BlogContextProvider from "../_contextApi/BlogContextApi";
import ModelContextProvider from "../_contextApi/ModelContextApi";
import { getSession } from "../lib/authentication";
import AuthContextProvider from "../_contextApi/authContext";
import {
  getTagsWithRevalidation,
  featureTagListAction,
} from "../utils/tagActions";
import TagTab from "@/src/components/client-components/tab/TagTab";
import HomePageMainBanner from "@/src/components/homepage/mainBanner/HomePageMainBanner";
import TagContextProvider from "../_contextApi/TagContextApi";
import ImgModelContextProvider from "../_contextApi/ImgModelContextApi";
import SearchModel from "@/src/components/client-components/models/SearchModel";
import { GOOGLE_AUTH_CLIENT_ID } from "@/config";
import AppContextProvider from "../_contextApi/AppContext";
import HomePageLayout from "@/src/components/homepage/layout/HomePageLayout";
import AppDrawer from "@/src/components/appDrawer/AppDrawer";

export const metadata = {
  title: "Fisrt blog website",
  description: "This is first Blog website",
};

export default async function RootLayout({ children }) {
  const userDetails = await getSession();
  const verifiedTags = await getTagsWithRevalidation();
  const featureTags = await featureTagListAction();

  return (
    <html lang="en">
      <body>
        <AuthContextProvider authData={userDetails}>
          <ImgModelContextProvider>
            <AppContextProvider>
              <TagContextProvider verifiedTags={verifiedTags}>
                <ModelContextProvider>
                  <BlogContextProvider>
                    <GoogleOAuthProvider clientId={GOOGLE_AUTH_CLIENT_ID}>
                      <ReportActionModel />
                      <ReagisterAuthModel />
                      <SearchModel />
                      <AppDrawer />
                      <div>
                        <NavBar userData={userDetails} />
                        {!userDetails && <GoogleOneTap />}
                      </div>

                      <div className="children_wrapper">
                        <main>
                          <div className={styles.page_banner_wrapper}>
                            <HomePageMainBanner />
                          </div>
                          <HomePageLayout featureTags={featureTags}>
                            {" "}
                            {children}{" "}
                          </HomePageLayout>
                        </main>
                      </div>
                      <Footer />
                    </GoogleOAuthProvider>
                  </BlogContextProvider>
                </ModelContextProvider>
              </TagContextProvider>
            </AppContextProvider>
          </ImgModelContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
