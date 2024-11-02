import dynamic from "next/dynamic";
import NavBar from "@/src/components/server-components/Navbar/NavBar";
import { inter, roboto, poppins, montserrat } from "../lib/fonts";
import "../globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Footer from "@/src/components/server-components/footer/Footer";
import GoogleOneTap from "@/src/components/client-components/googleAuth/GoogleOneTap";
import styles from "./page.module.css";
import BlogContextProvider from "../_contextApi/BlogContextApi";
import ModelContextProvider from "../_contextApi/ModelContextApi";
import { getSession } from "../lib/authentication";
import AuthContextProvider from "../_contextApi/authContext";
import {
  getTagsWithRevalidation,
  featureTagListAction,
} from "../utils/tagActions";
import HomePageMainBanner from "@/src/components/homepage/mainBanner/HomePageMainBanner";
import TagContextProvider from "../_contextApi/TagContextApi";
import ImgModelContextProvider from "../_contextApi/ImgModelContextApi";

import { GOOGLE_AUTH_CLIENT_ID } from "@/config";
import AppContextProvider from "../_contextApi/AppContext";
import HomePageLayout from "@/src/components/homepage/layout/HomePageLayout";

const ReportActionModel = dynamic(
  () => import("@/src/components/client-components/models/ReportActionModel"),
  {
    ssr: false,
  }
);
const ReagisterAuthModel = dynamic(
  () => import("@/src/components/client-components/models/ReagisterAuthModel"),
  {
    ssr: false,
  }
);
const SearchModel = dynamic(
  () => import("@/src/components/client-components/models/SearchModel"),
  {
    ssr: false,
  }
);
const AppDrawer = dynamic(
  () => import("@/src/components/appDrawer/AppDrawer"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "pinbuzzers",
  template: "%s - pinbuzzers",
  description:
    "Pin your idea on Pinbuzzers and boot up your website with high traffic backlinking",
  openGraph: {
    title: "Pinbuzzers",
    description:
      "Pin your idea on Pinbuzzers and boot up your website with high traffic backlinking",
    url: "https://www.pinbuzzers.com", // Replace with your actual URL
    type: "website",
    images: [
      {
        url: "https://pinbuzzers.com/web-static-img/Facebook-og-image.png", // Replace with the actual image URL
        width: 1200,
        height: 630,
        alt: "Pinbuzzers Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pinbuzzers", // Replace with your Twitter handle
    title: "Pinbuzzers",
    description:
      "Pin your idea on Pinbuzzers and boot up your website with high traffic backlinking",
    images: [
      {
        url: "https://www.pinbuzzers.com/web-static-img/twiiter-og-image.png", // Replace with the actual Twitter image URL
        alt: "Pinbuzzers Twitter Image",
      },
    ],
  },
};

export default async function RootLayout({ children }) {
  const userDetails = await getSession();
  const verifiedTags = await getTagsWithRevalidation();
  const featureTags = await featureTagListAction();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto.variable} ${poppins.variable} ${montserrat.variable}`}
    >
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
