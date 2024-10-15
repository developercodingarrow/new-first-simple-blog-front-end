import NavBar from "@/src/components/server-components/Navbar/NavBar";
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
import { getMainBanner } from "../utils/mainBannerAction";
import AppContextProvider from "../_contextApi/AppContext";

export const metadata = {
  title: "Fisrt blog website",
  description: "This is first Blog website",
};

export default async function RootLayout({ children }) {
  const userDetails = await getSession();
  const verifiedTags = await getTagsWithRevalidation();
  const featureTags = await featureTagListAction();
  const bannerDetails = await getMainBanner();

  return (
    <html lang="en">
      <body>
        <AuthContextProvider authData={userDetails}>
          <ImgModelContextProvider>
            <AppContextProvider bannerDetails={bannerDetails}>
              <TagContextProvider verifiedTags={verifiedTags}>
                <ModelContextProvider>
                  <BlogContextProvider>
                    <GoogleOAuthProvider clientId={GOOGLE_AUTH_CLIENT_ID}>
                      <ReportActionModel />
                      <ReagisterAuthModel />
                      <SearchModel />
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
            </AppContextProvider>
          </ImgModelContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
