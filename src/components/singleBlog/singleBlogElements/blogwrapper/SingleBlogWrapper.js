import React from "react";
import styles from "./css/singleBlog.module.css";
import Image from "next/image";

import BlogActionBar from "../BlogActionBar/BlogActionBar";
import CommentComponent from "../../blogComments/CommentComponent";
import ReagisterAuthModel from "@/src/components/client-components/models/ReagisterAuthModel";
import CommentModel from "@/src/components/client-components/models/CommentModel";

export default function SingleBlogWrapper(props) {
  const { data } = props;
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

          <div className={styles.ssr_img_wrapper}>
            <Image
              src={`/blogthumblin/${data.blogThumblin.url}`}
              className={styles.img_style}
              alt={data.blogThumblin.altText}
              width={500}
              height={500}
            />
          </div>

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
