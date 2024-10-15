import React from "react";
import styles from "./appDrawer.module.css";
import Link from "next/link";
export default function HeaderLogin() {
  return (
    <div className={styles.header_loginContainer}>
      <div className={styles.headerLogin_innerContainer}>
        <div className={styles.header_login_info}>
          <h2> Register / Login</h2>{" "}
        </div>
        <div>
          <Link href={"/login"} className={styles.login_link}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
