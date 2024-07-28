// src/lib/fonts.js
import { Inter, Roboto } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Optional: CSS variable for Inter
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Include multiple weights if needed
  variable: "--font-roboto", // Optional: CSS variable for Roboto
});
