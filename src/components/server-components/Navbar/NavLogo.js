import React from "react";
import styles from "./css/navlogo.module.css";
import Image from "next/image";
import logo from "../../../../public/web-static-img/white_text-croped.png";
import Link from "next/link";

export default function NavLogo() {
  const logoUrl = "http://3.143.124.47/web-static-img/white_text-croped.png";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "http://3.143.124.47", // Your website URL
    logo: logoUrl, // Full URL for the logo
    name: "Digital Blog", // Optionally add the organization name
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      url: "http://3.143.124.47/contact", // Add contact URL if applicable
    },
  };

  return (
    <Link href={"/"} className={styles.main_container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Image
        src={logo}
        width={500}
        height={500}
        alt="website logo"
        className={styles.logoStyle}
      />
    </Link>
  );
}
