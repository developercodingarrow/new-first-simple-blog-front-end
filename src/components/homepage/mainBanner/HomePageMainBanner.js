"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { API_BASE_URL } from "../../../../config";
import styles from "./css/mainbanner.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import defaultBanner from "../../../../public/web-static-img/main page banner.png";

// Dynamic import for Image component
const DynamicImage = dynamic(() => import("next/image"), { ssr: false });

export default function HomePageMainBanner() {
  const [bannerDetails, setBannerDetails] = useState(null);

  useEffect(() => {
    // First, load the banner details from cookies for fast display
    const loadBannerFromCookies = () => {
      const banner = Cookies.get("mainBanner");
      if (banner) {
        try {
          setBannerDetails(JSON.parse(banner));
          setIsLoadedFromCookies(true); // Mark as loaded from cookies
        } catch (error) {
          console.error("Error parsing banner JSON from cookies:", error);
        }
      }
    };

    loadBannerFromCookies(); // Load immediately on mount

    // Fetch updated banner data in the background
    const fetchUpdatedBanner = async () => {
      const bannerTimestamp = Cookies.get("bannerTimestamp");
      const now = new Date().getTime();
      const twelveHoursInMs = 12 * 60 * 60 * 1000;

      // Only fetch the banner if the timestamp is older than 12 hours
      if (
        !bannerTimestamp ||
        now - parseInt(bannerTimestamp, 10) > twelveHoursInMs
      ) {
        try {
          const res = await axios.get(
            `${API_BASE_URL}/admin-auth/main-banner/get-main-banner`
          );
          if (
            res.data &&
            res.data.status === "success" &&
            res.data.result.length > 0
          ) {
            const newBannerDetails = res.data.result[0];

            // Update cookies with the new banner data and timestamp
            Cookies.set("mainBanner", JSON.stringify(newBannerDetails), {
              expires: 1,
            }); // Expires in 1 day
            Cookies.set("bannerTimestamp", now.toString(), { expires: 1 });

            // Update the state with the new banner details
            setBannerDetails(newBannerDetails);
            setIsLoadedFromCookies(false); // Mark as updated from the API
          }
        } catch (error) {
          console.error("Error fetching updated banner:", error);
        }
      }
    };

    // Call the background fetch function
    fetchUpdatedBanner();
  }, []); // Run only once on mount

  return (
    <div className={styles.com_compoanent}>
      <DynamicImage
        src={
          bannerDetails
            ? `/mainbanner/${bannerDetails.bannerImg.url}`
            : defaultBanner
        }
        width={900} // Adjust width as per your layout requirements
        height={900} // Adjust height accordingly
        alt={
          bannerDetails ? bannerDetails.bannerImg.altText : "Placeholder image"
        }
        className={styles.banner_imgStyle}
        loading="lazy" // Ensure lazy loading of images
        placeholder="blur" // Show blurred placeholder until image loads
        blurDataURL={
          bannerDetails
            ? `/mainbanner/${bannerDetails.bannerImg.url}?w=10&q=10`
            : defaultBanner
        }
      />
    </div>
  );
}
