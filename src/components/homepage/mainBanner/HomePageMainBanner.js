import React from "react";
import styles from "./css/mainbanner.module.css";
import Image from "next/image";
import defaultBanner from "../../../../public/web-static-img/main page banner.png";
import { cookies } from "next/headers"; // Import the cookies function
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
      {bannerDetails ? (
        <Image
          src={`/mainbanner/${bannerDetails.bannerImg.url}`} // Use the correct path to the image
          width={900}
          height={900}
          alt={bannerDetails.bannerImg.altText} // Use the alt text from the banner details
          className={styles.banner_imgStyle}
        />
      ) : (
        <Image
          src={defaultBanner} // Use the correct path to the image
          width={900}
          height={900}
          alt="Place you add "
          className={styles.banner_imgStyle}
        />
      )}
    </div>
  );
}
