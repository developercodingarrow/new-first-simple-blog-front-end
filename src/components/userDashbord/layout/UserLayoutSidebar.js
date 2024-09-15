import React from "react";
import styles from "./css/userLayoutSideBar.module.css";
import Link from "next/link";
import SideBanner from "../../server-components/banners/SideBanner";
export default function UserLayoutSideBar() {
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <section className={styles.side_barbanner_wrapper}>
          <SideBanner />
        </section>

        <section className={styles.sideBar_notes_wrapper}>
          <div className={styles.note_paper}>
            <div className={styles.note_paper_heading}>
              <h3>Note</h3>
            </div>

            <div>
              {[1, 2, 3, 4, 5].map((el, index) => {
                return (
                  <Link href={"/"} className={"small_text"}>
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
