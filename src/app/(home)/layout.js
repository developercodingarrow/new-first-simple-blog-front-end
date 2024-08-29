import NavBar from "@/src/components/server-components/Navbar/NavBar";
// import { inter, roboto } from "../../lib/fonts";
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

export const metadata = {
  title: "Fisrt blog website",
  description: "This is first Blog website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${inter.variable} ${roboto.variable}`}> */}
      <body>
        <AppContextProvider>
          <ImgModelContextProvider>
            <TagContextProvider>
              <GoogleOAuthProvider clientId="575999030621-q9l875mbikilrm28q7sbj7ed3pf3kehq.apps.googleusercontent.com">
                <ReportActionModel />
                <div>
                  <NavBar />
                  <GoogleOneTap />
                </div>

                <div className="children_wrapper">
                  <main>
                    <div className={styles.page_banner_wrapper}>
                      <MainBanner />
                    </div>
                    <div className={styles.layout_wrapper}>
                      <div className={styles.content_side}>{children}</div>
                      <div className={styles.layout_side_bar}>
                        <LayoutSideBar />
                      </div>
                    </div>
                  </main>
                </div>
                <Footer />
              </GoogleOAuthProvider>
            </TagContextProvider>
          </ImgModelContextProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
