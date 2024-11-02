"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./uplodedimage.module.css";
import mainBannerImg from "../../../../../public/web-static-img/main-banner.png";
import Image from "next/image";
import { getMainBanner } from "@/src/app/utils/mainBannerAction";
import { AppContext } from "@/src/app/_contextApi/AppContext";

export default function UplodedImage() {
  const [mainBanner, setmainBanner] = useState(null);
  const { isBtnLoadin, setisBtnLoadin } = useContext(AppContext);

  const handelgetBanner = async () => {
    try {
      const res = await getMainBanner();
      console.log("res uploaded image get ---", res);

      setmainBanner(res.bannerImg?.url);
    } catch (error) {}
  };

  useEffect(() => {
    handelgetBanner();
  }, [isBtnLoadin, mainBanner]);
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
