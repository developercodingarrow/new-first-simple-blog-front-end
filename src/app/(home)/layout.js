import NavBar from "@/src/components/server-components/Navbar/NavBar";
import "../globals.css";
import AppContextProvider from "@/src/contextApi/AppcontextApi";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Footer from "@/src/components/server-components/footer/Footer";
import GoogleOneTap from "@/src/components/client-components/googleAuth/GoogleOneTap";
import ImgModelContextProvider from "@/src/contextApi/ImgModelContextApi";
import TagContextProvider from "@/src/contextApi/TagContextApi";
import ReportActionModel from "@/src/components/client-components/models/ReportActionModel";
import MainBanner from "@/src/components/server-components/banners/MainBanner";
import styles from "./page.module.css";
import LayoutSideBar from "@/src/components/client-components/sideBar/LayoutSideBar";
import { tabData } from "@/src/jsonData/navigationData";
import ReagisterAuthModel from "@/src/components/client-components/models/ReagisterAuthModel";

import BlogContextProvider from "../_contextApi/BlogContextApi";
import ModelContextProvider from "../_contextApi/ModelContextApi";
import { cookies } from "next/headers"; // Import the cookies function
import { getSession } from "../lib/authentication";

import AuthContextProvider from "../_contextApi/authContext";
import {
  getTagsWithRevalidation,
  featureTagListAction,
} from "../utils/tagActions";
import TagTab from "@/src/components/client-components/tab/TagTab";
import HomePageMainBanner from "@/src/components/homepage/mainBanner/HomePageMainBanner";
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
        <AppContextProvider>
          <AuthContextProvider authData={userDetails}>
            <ImgModelContextProvider>
              <TagContextProvider verifiedTags={verifiedTags}>
                <ModelContextProvider>
                  <BlogContextProvider>
                    <GoogleOAuthProvider clientId="575999030621-q9l875mbikilrm28q7sbj7ed3pf3kehq.apps.googleusercontent.com">
                      <ReportActionModel />
                      <ReagisterAuthModel />
                      <div>
                        <NavBar userData={userDetails} />
                        {!userDetails && <GoogleOneTap />}
                      </div>

                      <div className="children_wrapper">
                        <main>
                          <div className={styles.page_banner_wrapper}>
                            <HomePageMainBanner />
                          </div>
                          <div className={styles.layout_wrapper}>
                            <div className={styles.content_side}>
                              <div className={styles.sticky_tab_wrapper}>
                                <TagTab
                                  tabData={featureTags}
                                  redirectType="query"
                                />
                              </div>
                              {children}
                            </div>
                            <div className={styles.layout_side_bar}>
                              <LayoutSideBar featureTag={featureTags} />
                            </div>
                          </div>
                        </main>
                      </div>
                      <Footer />
                    </GoogleOAuthProvider>
                  </BlogContextProvider>
                </ModelContextProvider>
              </TagContextProvider>
            </ImgModelContextProvider>
          </AuthContextProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
