import Image from "next/image";
import styles from "./page.module.css";
import MainBanner from "@/src/components/server-components/banners/MainBanner";
import TagTab from "@/src/components/client-components/tab/TagTab";
import LayoutSideBar from "@/src/components/client-components/sideBar/LayoutSideBar";
import LandscapeCard from "@/src/components/server-components/cards/LandscapeCard";
import { tabData } from "@/src/jsonData/navigationData";
import { tagfillterBlogs } from "@/src/Actions/blogActions/blogAction";
import HomePageBlogList from "@/src/components/client-components/BlogList/HomePageBlogList";

async function getData(tagquery, page = 1) {
  const res = await tagfillterBlogs(tagquery, page);

  return await res.data.result;
}
export default async function HomePage(pathname) {
  const tagquery = pathname.searchParams?.tag || "";
  const page = pathname.searchParams?.page || 1;
  const initialData = await getData(tagquery, page);

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
            <HomePageBlogList
              initialData={initialData}
              tagquery={tagquery}
              initialPage={page}
            />
          </div>
        </div>
        <div className={styles.layout_side_bar}>
          <LayoutSideBar />
        </div>
      </div>
    </main>
  );
}
