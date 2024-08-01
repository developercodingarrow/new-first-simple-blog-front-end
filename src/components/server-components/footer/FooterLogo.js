import React from "react";
import styles from "./css/footerlogo.module.css";
import Image from "next/image";
import footer_logo from "../../../../public/web-static-img/footer-black-logo.png";
export default function FooterLogo() {
  const logoUrl = "/web-static-img/footer-black-logo.png"; // Relative URL to the logo image
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://www.example.com", // Replace with your website URL
    logo: `https://www.example.com${logoUrl}`, // Replace with your absolute logo URL
  };
  return (
    <div className={styles.com_container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Image
        src={footer_logo}
        width={900}
        height={900}
        alt="Footer-logo"
        className={styles.footer_logoStyle}
      />
    </div>
  );
}
