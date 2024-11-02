import React from "react";
import styles from "./css/dropDownMenu.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOutAction } from "../../utils/userAuthaction";

export default function AdminDropDownMenu() {
  const router = useRouter();
  const handellogOut = async () => {
    try {
      const res = await LogOutAction();
      if (res.status === "success") {
        router.push("/admin-login");
      }
    } catch (error) {}
  };
  return (
    <div className={styles.profile_drop_down}>
      <Link href={"/"} aria-label="Home" className={styles.menu_options}>
        Home
      </Link>
      <div className={styles.menu_options} onClick={handellogOut}>
        Log Out
      </div>
    </div>
  );
}
