"use client";
import React, { useContext, useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./css/editBlogUi.module.css";
import BlogImgUplod from "@/src/components/client-components/img-upload/blogImguplod/BlogImgUplod";
import { BlogContext } from "@/src/contextApi/BlogContextApi";
import AddTagChip from "@/src/components/client-components/chip/AddTagChip";

export default function EditBlogUI(props) {
  const { apiData, slug } = props;
  const [blogData, setBlogData] = useState({
    blogTitle: apiData?.blogTitle || "",
    metaDescription: apiData?.metaDescription || "",
    blogDescreption: apiData?.blogDescreption || "",
  });

  // Update state when apiData changes
  useEffect(() => {
    if (apiData) {
      setBlogData({
        blogTitle: apiData.blogTitle || "",
        metaDescription: apiData.metaDescription || "",
        blogDescreption: apiData.blogDescreption || "",
      });
    }
  }, [apiData]);

  const handleQuillChange = (content) => {
    setBlogData((prevData) => ({
      ...prevData,
      blogDescreption: content,
    }));
    console.log(blogData);
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.inner_conatiner}>
        <div className={styles.editor_side}>
          <div className={styles.input_filed_wrapper}>
            <div className={styles.lable_wrapper}>
              <label>Blog Title</label>
            </div>
            <div className={styles.input_wrapper}>
              <input
                type="text"
                placeholder="Enter Blog Title"
                className={styles.title_input}
                value={blogData.blogTitle}
                name="blogTitle" // Make sure to set the name attribute
              />
            </div>
          </div>
          <div className={styles.input_filed_wrapper}>
            <div className={styles.lable_wrapper}>
              <label>Meta Descreption</label>
            </div>
            <div className={styles.input_wrapper}>
              <textarea
                placeholder="Enter Blog Title"
                className={styles.meta_textArea}
                rows={3}
                name="metaDescription"
                value={blogData.metaDescription}
              />
            </div>
          </div>

          <div className={styles.input_filed_wrapper}>
            <div className={styles.lable_wrapper}>
              <label>Content</label>
            </div>
            <div className={styles.input_wrapper}>
              <ReactQuill
                theme="snow"
                value={blogData.blogDescreption}
                onChange={handleQuillChange}
              />
            </div>
          </div>
        </div>
        <div className={styles.editor_sideBard}>
          <div className={styles.thumblin_upload}>
            <BlogImgUplod apiData={apiData} slug={slug} />
          </div>
          <div>
            <AddTagChip blogSlug={slug} />
          </div>
        </div>
      </div>
      <button className={styles.submit_button}>Submit Blog</button>
    </div>
  );
}
