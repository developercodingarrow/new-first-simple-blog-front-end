import NavBar from "@/src/components/server-components/Navbar/NavBar";
import { inter, roboto } from "../../lib/fonts";
import "../globals.css";
import AppContextProvider from "@/src/contextApi/AppcontextApi";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Footer from "@/src/components/server-components/footer/Footer";
import GoogleOneTap from "@/src/components/client-components/googleAuth/GoogleOneTap";
import ImgModelContextProvider from "@/src/contextApi/ImgModelContextApi";
import TagContextProvider from "@/src/contextApi/TagContextApi";

export const metadata = {
  title: "Fisrt blog website",
  description: "This is first Blog website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable}`}>
        <AppContextProvider>
          <ImgModelContextProvider>
            <TagContextProvider>
              <GoogleOAuthProvider clientId="575999030621-q9l875mbikilrm28q7sbj7ed3pf3kehq.apps.googleusercontent.com">
                <div>
                  <NavBar />
                  <GoogleOneTap />
                </div>

                <div className="children_wrapper">{children}</div>
                <Footer />
              </GoogleOAuthProvider>
            </TagContextProvider>
          </ImgModelContextProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
