import React from "react";
import styles from "./css/userLayoutSideBar.module.css";
import SideBanner from "@/src/components/server-components/banners/SideBanner";
import Link from "next/link";
export default function UserLayoutSideBar() {
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <section className={styles.side_barbanner_wrapper}>
          <SideBanner />
        </section>

        <section className={styles.sideBar_notes_wrapper}>
          <div className={styles.note_paper}>
            <h3>Note</h3>
            <div>
              {[1, 2, 3, 4, 5].map((el, index) => {
                return (
                  <Link href={"/"} className={styles.tips_points}>
                    SEO Tips to improve your content for more trffic
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
