import React from "react";
import styles from "./css/navlogo.module.css";
import Image from "next/image";
import logo from "../../../../public/web-static-img/dummy-logo.png";
export default function NavLogo() {
  const logoUrl = "/web-static-img/dummy-logo.png"; // Relative URL to the logo image
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://www.example.com", // Replace with your website URL
    logo: `https://www.example.com${logoUrl}`, // Replace with your absolute logo URL
  };

  return (
    <div className={styles.main_container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Image src={logo} width={50} alt="website logo" />
    </div>
  );
}
