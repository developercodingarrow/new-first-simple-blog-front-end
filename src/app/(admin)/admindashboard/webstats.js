import React from "react";
import styles from "./dashbordpagestyle.module.css";

import StatsBox from "./statsBox";

export default async function Webstats({ data }) {
  if (!data) {
    return <div>No data available</div>; // Display a message if no data is available
  }

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
  } = data;

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
