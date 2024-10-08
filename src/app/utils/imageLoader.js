"use client";

export default function myImageLoader({ src, width, quality }) {
  const isProduction = process.env.NEXT_PUBLIC_PRODUCTION === "true";
  const baseUrl = isProduction ? "http://3.143.124.47" : "";

  // Determine if the source is a public path or an external URL
  const isPublicPath = src.startsWith("/");

  // Construct the final image URL
  const finalUrl = isPublicPath ? `${baseUrl}${src}` : src; // Use baseUrl only if it's a public path

  // Return the image URL with query parameters
  return `${finalUrl}?w=${width}&q=${quality || 75}`;
}
