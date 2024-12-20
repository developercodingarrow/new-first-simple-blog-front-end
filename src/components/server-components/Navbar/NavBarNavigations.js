import React from "react";
import styles from "./css/navBarNavigation.module.css";
import {
  HiOutlineHome,
  MdOutlineAutoGraph,
  FaPlus,
  BiTag,
} from "../../ApplicationIcons";
import Link from "next/link";
import NavApiActionIcon from "../../client-components/navbar/NavApiActionIcon";

export default function NavBarNavigations() {
  return (
    <div className={styles.comp_container}>
      <div className={styles.inner_container}>
        <Link href={"/"} className={styles.navigation_tab} aria-label="Home">
          <div className="large_iconWrapper">
            <HiOutlineHome />
          </div>
        </Link>
        <Link
          href={"/"}
          className={styles.navigation_tab}
          aria-label="website traffic boost"
        >
          <div className="large_iconWrapper">
            {" "}
            <MdOutlineAutoGraph />
          </div>
        </Link>
        <Link
          href={"/tags"}
          className={styles.navigation_tab}
          aria-label="Tags"
        >
          <div className="large_iconWrapper">
            {" "}
            <BiTag />
          </div>
        </Link>
        <div className={styles.navigation_tab} aria-label="Create new post">
          <div className="large_iconWrapper">
            <NavApiActionIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
