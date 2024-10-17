"use client";
import React, { useContext, useEffect, useRef } from "react";
import styles from "./css/userDrawer.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  SlUser,
  TiDocumentText,
  FaPlus,
  SlLogout,
} from "../../ApplicationIcons";
import { LogOutAction } from "@/src/app/utils/userAuthaction";
import { ModelsContext } from "@/src/app/_contextApi/ModelContextApi";

export default function UserDrawer() {
  const router = useRouter();
  const { isUserDrawer, handelCloseUserDrawer } = useContext(ModelsContext);

  const drawerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        handelCloseUserDrawer();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drawerRef, handelCloseUserDrawer]);

  const handellogOut = async () => {
    try {
      const res = await LogOutAction();

      if (res.status === "success") {
        router.refresh();
      }
    } catch (error) {}
  };

  return (
    <div ref={drawerRef} className={styles.drawer_container}>
      <ul className={styles.inner_container}>
        <li>
          <Link
            href={"/userdashboard/profile"}
            className={styles.text_icon_link}
          >
            <div className="medium_icon_wrapper">
              <SlUser />
            </div>
            <div className="medium_text_wrapper">view profile</div>
          </Link>
        </li>
        <li>
          <Link
            href={"/userdashboard/published"}
            className={styles.text_icon_link}
          >
            <div className="medium_icon_wrapper">
              <TiDocumentText />
            </div>
            <div className="medium_text_wrapper">Your Blogs</div>
          </Link>
        </li>
        <li>
          <div className={styles.text_icon_link} onClick={handellogOut}>
            <div className="medium_icon_wrapper">
              <SlLogout />
            </div>
            <div className="medium_text_wrapper">Log Out</div>
          </div>
        </li>
      </ul>
    </div>
  );
}
