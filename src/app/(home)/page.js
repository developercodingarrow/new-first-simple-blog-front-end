import Image from "next/image";
import styles from "./page.module.css";
import MainBanner from "@/src/components/server-components/banners/MainBanner";
import TagTab from "@/src/components/client-components/tab/TagTab";
import LayoutSideBar from "@/src/components/client-components/sideBar/LayoutSideBar";
import LandscapeCard from "@/src/components/server-components/cards/LandscapeCard";
import { tabData } from "@/src/jsonData/navigationData";

export default function Home() {
  return (
    <main>
      <div className={styles.page_banner_wrapper}>
        <MainBanner />
      </div>
      <div className={styles.layout_wrapper}>
        <div className={styles.content_side}>
          <div className={styles.sticky_tab_wrapper}>
            <TagTab tabData={tabData} redirectType="query" />
          </div>
          <div className={styles.cards_wraper}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((el, index) => {
              return <LandscapeCard />;
            })}
          </div>
        </div>
        <div className={styles.layout_side_bar}>
          <LayoutSideBar />
        </div>
      </div>
    </main>
  );
}
