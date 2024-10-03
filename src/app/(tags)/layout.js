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
import ImgModelContextProvider from "../_contextApi/ImgModelContextApi";
import TagsPageLayout from "@/src/components/tags/layout/TagsPageLayout";
import TagContextProvider from "../_contextApi/TagContextApi";
import { GOOGLE_AUTH_CLIENT_ID } from "@/config";

export const metadata = {
  title: "Fisrt blog website",
  description: "This is first Blog website",
};

export default async function TagsLayout({ children }) {
  const userDetails = await getSession();
  // const verifiedTags = await getTagsWithRevalidation();
  const featureTags = await featureTagListAction();

  return (
    <html lang="en">
      <body>
        <AuthContextProvider authData={userDetails}>
          <ImgModelContextProvider>
            <TagContextProvider>
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
                      <main>
                        <div className={styles.main_banner}>
                          <HomePageMainBanner />
                        </div>
                        <TagsPageLayout>{children}</TagsPageLayout>
                      </main>
                    </div>
                    <Footer />
                  </GoogleOAuthProvider>
                </BlogContextProvider>
              </ModelContextProvider>
            </TagContextProvider>
          </ImgModelContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
