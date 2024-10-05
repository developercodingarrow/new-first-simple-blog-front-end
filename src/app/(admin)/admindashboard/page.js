import React, { Suspense } from "react";
import Webstats from "./webstats";
import Loading from "./loading";
import { cookies } from "next/headers";
import { webStatsAction } from "./apiActions";
export default async function DashBordpage() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value; // Get the auth token from cookies

  let webStats; // Declare variable to hold web stats
  try {
    // Fetch the web stats using the auth token
    webStats = await webStatsAction(authToken); // Pass the token to the action
  } catch (error) {
    console.error("Error fetching data:", error);
    webStats = null; // Handle the case where fetching fails
  }
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Webstats data={webStats} />
      </Suspense>
    </div>
  );
}
