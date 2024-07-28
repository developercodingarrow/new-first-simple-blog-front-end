import { inter, roboto } from "../../lib/fonts";
import "../globals.css";

export const metadata = {
  title: "Fisrt blog website",
  description: "This is first Blog website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable}`}>{children}</body>
    </html>
  );
}
