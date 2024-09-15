
// config.js
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_PRODUCTION === "true"
    ? process.env.NEXT_PUBLIC_API_PRODUCTION
    : process.env.NEXT_PUBLIC_API_DEVELOPMENT;
