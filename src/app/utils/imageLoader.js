"use client";

export default function myImageLoader({ src, width, quality }) {
  if (!src) {
    return "../../../public/usersProfileImg/profile-pic.webp"; // Use a fallback image if src is undefined
  }
  const isProduction = process.env.NEXT_PUBLIC_PRODUCTION === "true";
  const baseUrl = isProduction ? "https://pinbuzzers.com" : "";

  // Determine if the source is a public path or an external URL
  const isPublicPath = src.startsWith("/");

  // Construct the final image URL
  const finalUrl = isPublicPath ? `${baseUrl}${src}` : src; // Use baseUrl only if it's a public path

  // Return the image URL with query parameters
  return `${finalUrl}?w=${width}&q=${quality || 75}`;
}
