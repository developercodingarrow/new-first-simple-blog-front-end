import React from "react";
import styles from "./css/singleBlogPage.module.css";
import BlogActionBar from "./BlogActionBar";
import Image from "next/image";
import sampleImg from "../../../../public/web-static-img/larg-img.jpg";
import CommentComponent from "@/src/components/client-components/comments/CommentComponent";
import SideBanner from "@/src/components/server-components/banners/SideBanner";
import CommentModel from "@/src/components/client-components/models/CommentModel";

export default function SingleBlogPageUI(props) {
  const { ssrData } = props;
  // blogthumblin ssrData blogThumblin url
  return (
    <div className={styles.main_container}>
      <CommentModel data={ssrData} />
      <section className={styles.content_main_container}>
        <div className={styles.banner_section}>
          <div className={styles.banner_wrapper}>
            <SideBanner />
          </div>
        </div>
        {/* center section start */}
        <div className={styles.contnet_section}>
          <div className={styles.top_section}>
            <div className={styles.title_meta_wrapper}>
              <div className={styles.title_wrapper}>
                <h1> {ssrData.blogTitle}</h1>
              </div>
              <div className={styles.meta_wrapper}>
                <h3>{ssrData.metaDescription}</h3>
              </div>
            </div>
            <div className={styles.actios_wrapper}>
              <BlogActionBar data={ssrData} />
            </div>
          </div>
          <div className={styles.ssr_img_wrapper}>
            <Image
              src={`/blogthumblin/${ssrData.blogThumblin.url}`}
              className={styles.img_style}
              alt={ssrData.blogThumblin.altText}
              width={500}
              height={500}
            />
          </div>

          <div className={styles.ssr_content_wrapper}>
            <p
              dangerouslySetInnerHTML={{
                __html: ssrData.blogDescreption || "",
              }}
              className={styles.content}
            ></p>
          </div>
        </div>
        {/* center section end */}
        <div className={styles.comment_section}>
          <CommentComponent
            blogComments={ssrData.comments}
            blogId={ssrData._id}
            blogBy={ssrData.user}
          />
        </div>
      </section>
    </div>
  );
}
