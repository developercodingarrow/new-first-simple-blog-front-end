import React from "react";
import styles from "./css/userDashbordLayout.module.css";
import UserDashBordHeader from "../elements/layoutHeader/UserDashBordHeader";
import TagTab from "../../client-components/tab/TagTab";

import { userDashBordTab } from "@/src/jsonData/navigationData";
import UserLayoutSideBar from "./UserLayoutSidebar";

export default function UserDashbordLayout({ children }) {
  return (
    <div>
      <div className={styles.main_container}>
        <div className={styles.inner_container}>
          <div className={styles.content_side}>
            <section className={styles.header_wapper}>
              <UserDashBordHeader />
            </section>

            <div className={styles.sticky_tab_wrapper}>
              <TagTab tabData={userDashBordTab} redirectType="page" />
            </div>
            <div className={styles.tab_content_wrapper}>{children}</div>
          </div>

          <div className={styles.side_bar_container}>
            <UserLayoutSideBar />
          </div>
        </div>
      </div>
    </div>
  );
}
