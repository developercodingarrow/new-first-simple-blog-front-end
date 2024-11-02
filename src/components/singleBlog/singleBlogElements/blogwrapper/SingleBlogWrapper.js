import React from "react";
import styles from "./css/singleBlog.module.css";
import Image from "next/image";
import BlogActionBar from "../BlogActionBar/BlogActionBar";
import CommentComponent from "../../blogComments/CommentComponent";
import CommentModel from "@/src/components/client-components/models/CommentModel";
import myImageLoader from "@/src/app/utils/imageLoader";

export default function SingleBlogWrapper(props) {
  const { data } = props;

  // Cache-busting parameter (optional)
  const timestamp = new Date().getTime();

  // Handle dynamic blog thumbnail URL
  const blogThumbnailUrl =
    data?.blogThumblin?.url || "/blogthumblin/default-image.webp"; // Fallback image

  return (
    <div className={styles.main_conatiner}>
      <CommentModel data={data} />
      <div className={styles.inner_conatiner}>
        <div className={styles.contnet_section}>
          <div className={styles.top_section}>
            <div className={styles.title_meta_wrapper}>
              <div className={styles.title_wrapper}>
                <h1> {data.blogTitle}</h1>
              </div>
              <div className={styles.meta_wrapper}>
                <h3>{data.metaDescription}</h3>
              </div>
            </div>
            <div className={styles.actios_wrapper}>
              <BlogActionBar data={data} />
            </div>
          </div>

          {data.blogThumblin.url && (
            <div className={styles.ssr_img_wrapper}>
              <Image
                loader={myImageLoader} // Use your custom image loader
                src={blogThumbnailUrl} // Dynamic source for the blog thumbnail
                className={styles.img_style}
                alt={data.blogThumblin?.altText || "Blog Thumbnail"}
                width={900}
                height={900}
                placeholder="blur" // Optional: Add blur placeholder effect while loading
                blurDataURL="/path-to-placeholder-image.webp" // Placeholder image
                key={timestamp} // Ensure cache busting when the image changes
              />
            </div>
          )}

          <div className={styles.ssr_content_wrapper}>
            <p
              dangerouslySetInnerHTML={{
                __html: data.blogDescreption || "",
              }}
              className={styles.content}
            ></p>
          </div>
        </div>
        <div className={styles.comment_section}>
          <CommentComponent
            blogComments={data.comments}
            blogId={data._id}
            blogBy={data.user}
          />
        </div>
      </div>
    </div>
  );
}
