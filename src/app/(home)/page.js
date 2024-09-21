import styles from "./page.module.css";
import Loading from "./loading";
import { Suspense } from "react";
import Card from "./card";

export default async function HomePage(pathname) {
  const tagquery = pathname.searchParams?.tag || "";
  const page = pathname.searchParams?.page || 1;

  return (
    <div>
      <div className={styles.cards_wraper} key={Math.random()}>
        <Suspense fallback={<Loading />}>
          <Card tagquery={tagquery} page={page} />
        </Suspense>
      </div>
    </div>
  );
}
