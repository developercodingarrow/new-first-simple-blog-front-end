"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./css/sidebanner.module.css";
import sampleImg from "../../../../public/web-static-img/side-banner-img.jpg";
import { getSideBanner } from "@/src/app/utils/mainBannerAction";
import dynamic from "next/dynamic";
const DynamicImage = dynamic(() => import("next/image"), { ssr: false });

export default function SideBanner() {
  const [bannerUrl, setbannerUrl] = useState("");
  const [bannerAlt, setbannerAlt] = useState("");
  const [imgLink, setimgLink] = useState("");
  const handelget = async () => {
    try {
      const res = await getSideBanner();
      console.log("res-sidebanner", res);
      setbannerUrl(res.bannerImg.url);
      setbannerAlt(res.bannerImg.altText);
      setimgLink(res.bannerImg.bannerLink);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handelget();
  }, []);
  return (
    <Link href={`/${imgLink}`} className={styles.com_component}>
      <DynamicImage
        src={`/sideBanner/${bannerUrl}`}
        width={200}
        height={200}
        className={styles.img_style}
        alt={bannerAlt}
        loading="lazy"
      />
    </Link>
  );
}
