import React from "react";
import styles from "./dashbordpagestyle.module.css";
import { webStatsAction } from "./apiActions";
import StatsBox from "./statsBox";

async function getData() {
  try {
    // Simulating data fetching for demo purposes
    const res = await webStatsAction();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return await res.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error(`Failed to fetch data: ${error}`);
  }
}

export default async function Webstats() {
  const {
    totalBlogs,
    publishedBlogs,
    draftBlogs,
    totalUsers,
    totalTags,
    verifiedTags,
    featuredTags,
    totalViewCount,
    totalComments,
    totalReplies,
    featuredBlogs,
  } = await getData();

  return (
    <div className={styles.container}>
      <div className={styles.statsBoxWrapper}>
        <div className={styles.statsBoxWrapper}>
          <StatsBox
            title="Total Blogs"
            number={totalBlogs}
            color="rgba(59, 130, 246, 0.1)"
          />
          <StatsBox
            title="Featured Blogs"
            number={featuredBlogs}
            color="rgba(16, 185, 129, 0.1)"
          />
          <StatsBox
            title="Published Blogs"
            number={publishedBlogs}
            color="rgba(236, 72, 153, 0.1)"
          />
          <StatsBox
            title="Draft Blogs"
            number={draftBlogs}
            color="rgba(250, 204, 21, 0.1)"
          />
          <StatsBox
            title="Total Tags"
            number={totalTags}
            color="rgba(59, 130, 246, 0.1)"
          />
          <StatsBox
            title="Verified Tags"
            number={verifiedTags}
            color="rgba(16, 185, 129, 0.1)"
          />
          <StatsBox
            title="Featured Tags"
            number={featuredTags}
            color="rgba(236, 72, 153, 0.1)"
          />
          <StatsBox
            title="Total Users"
            number={totalUsers}
            color="rgba(250, 204, 21, 0.1)"
          />
          <StatsBox
            title="Total Views"
            number={totalViewCount}
            color="rgba(59, 130, 246, 0.1)"
          />
          <StatsBox
            title="Total Comments"
            number={totalComments}
            color="rgba(16, 185, 129, 0.1)"
          />
          <StatsBox
            title="Total Replies"
            number={totalReplies}
            color="rgba(236, 72, 153, 0.1)"
          />
        </div>
      </div>
    </div>
  );
}
