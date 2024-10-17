import React from "react";
import styles from "./css/mainbanner.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import defaultBanner from "../../../../public/web-static-img/main page banner.png";
import { cookies } from "next/headers"; // Import the cookies function
const DynamicImage = dynamic(() => import("next/image"), { ssr: false });

export default function HomePageMainBanner() {
  const cookieStore = cookies();
  const banner = cookieStore.get("mainBanner")?.value;
  // Parse the banner details from the cookie if it exists
  let bannerDetails = null;
  if (banner) {
    try {
      bannerDetails = JSON.parse(banner);
    } catch (error) {
      console.error("Error parsing banner JSON:", error);
    }
  }

  return (
    <div className={styles.com_compoanent}>
      <DynamicImage
        src={
          bannerDetails
            ? `/mainbanner/${bannerDetails.bannerImg.url}`
            : defaultBanner
        }
        width={900} // You can adjust this width as per your layout requirements
        height={900} // Adjust accordingly
        alt={bannerDetails ? bannerDetails.bannerImg.altText : "Place you add"}
        className={styles.banner_imgStyle}
        loading="lazy" // This ensures images are lazy-loaded
        placeholder="blur" // This shows a blurred image as a placeholder until the image is fully loaded
        blurDataURL={
          bannerDetails
            ? `/mainbanner/${bannerDetails.bannerImg.url}?w=10&q=10`
            : defaultBanner
        }
      />
    </div>
  );
}
