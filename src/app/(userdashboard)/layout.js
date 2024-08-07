import React from "react";
import { inter, roboto } from "../../lib/fonts";
import "../globals.css";

export default function layout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable}`}>
        <div className="children_wrapper">{children}</div>
      </body>
    </html>
  );
}
