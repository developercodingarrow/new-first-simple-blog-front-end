import React, { Suspense } from "react";
import Webstats from "./webstats";
import Loading from "./loading";

export default async function DashBordpage() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Webstats />
      </Suspense>
    </div>
  );
}
