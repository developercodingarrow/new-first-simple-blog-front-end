import NavBar from "@/src/components/server-components/Navbar/NavBar";
import { inter, roboto } from "../../lib/fonts";
import "../globals.css";
import AppContextProvider from "@/src/contextApi/AppcontextApi";
import Footer from "@/src/components/server-components/footer/Footer";

export const metadata = {
  title: "Fisrt blog website",
  description: "This is first Blog website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable}`}>
        <AppContextProvider>
          <div>
            <NavBar />
          </div>
          <div className="children_wrapper">{children}</div>
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
