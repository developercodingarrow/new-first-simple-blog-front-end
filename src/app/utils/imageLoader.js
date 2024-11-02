"use client";

export default function myImageLoader({ src, width, quality }) {
  // Fallback for missing or undefined `src`
  if (!src) {
    return "/usersProfileImg/profile-pic.webp"; // Default fallback image path
  }

  // Determine if we're in production mode
  const isProduction = process.env.NEXT_PUBLIC_PRODUCTION === "true";

  // If `src` starts with "http", it's an external URL (e.g., Google profile picture)
  if (src.startsWith("http")) {
    return src; // Return the external URL as is
  }

  // If it's a local path, append the base URL in production
  const baseUrl = isProduction ? "https://pinbuzzers.com" : ""; // Adjust the base URL as necessary
  return `${baseUrl}${src}`; // Return the full path for internal images
}
