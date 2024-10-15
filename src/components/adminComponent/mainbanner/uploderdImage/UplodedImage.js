"use client";
import React, { useEffect, useState } from "react";
import styles from "./uplodedimage.module.css";
import mainBannerImg from "../../../../../public/web-static-img/main-banner.png";
import Image from "next/image";
import { getMainBanner } from "@/src/app/utils/mainBannerAction";

export default function UplodedImage() {
  const [mainBanner, setmainBanner] = useState(null);

  const handelgetBanner = async () => {
    try {
      const res = await getMainBanner();
      console.log("banner image res-----", res.bannerImg.url);
      setmainBanner(res.bannerImg?.url);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handelgetBanner();
  }, []);
  return (
    <div className={styles.main_container}>
      {mainBanner && (
        <div className={styles.banner_imageWrraper}>
          <Image
            src={`/mainbanner/${mainBanner}`}
            width={900}
            height={900}
            className={styles.img_style}
          />
        </div>
      )}
    </div>
  );
}
