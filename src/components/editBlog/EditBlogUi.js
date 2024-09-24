"use client";
import React, { useContext, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./css/editBlogUi.module.css";
import ClickBtn from "../client-components/elements/buttons/ClickBtn";
import SingleImgModel from "../client-components/models/imgModel/SingleImgModel";
import { handelUploadThumblin } from "@/src/utils/handlers/imageHandlers";
import { upadteBlogContent } from "@/src/app/utils/blogactions";
import BlogImgPreUploder from "./BlogImgPreUploder";
import AddTagChip from "./AddTagChip";

export default function EditBlogUI(props) {
  const { apiData, slug } = props;

  const [blogData, setBlogData] = useState({
    blogTitle: apiData?.blogTitle || "",
    metaDescription: apiData?.metaDescription || "",
    blogDescreption: apiData?.blogDescreption || "",
  });

  console.log("apiData---", apiData);

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

  const handelChange = (e) => {
    setBlogData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    console.log(blogData);
  };

  const handleQuillChange = (content) => {
    setBlogData((prevData) => ({
      ...prevData,
      blogDescreption: content,
    }));
    console.log(blogData);
  };

  const handelUpdateContent = async () => {
    try {
      const res = await upadteBlogContent(blogData, slug);
      console.log(res);
      if (res.status === "success") {
        toast.success(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.main_container}>
      <Toaster />
      <SingleImgModel updateHandler={handelUploadThumblin} id={slug} />
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
                onChange={(e) => handelChange(e)}
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
                onChange={(e) => handelChange(e)}
              />
            </div>
          </div>

          <div className={styles.input_filed_wrapper}>
            <div className={styles.lable_wrapper}>
              <label>Content</label>
            </div>
            <div className={styles.editor_wrapper}>
              <ReactQuill
                theme="snow"
                value={blogData.blogDescreption}
                onChange={handleQuillChange}
                className={styles.editor_style}
                style={{ minHeight: "500px", height: "auto" }}
              />
            </div>
          </div>
        </div>
        <div className={styles.editor_sideBard}>
          <div className={styles.thumblin_upload}>
            <BlogImgPreUploder apiData={apiData} slug={slug} />
          </div>
          <div>
            <AddTagChip blogSlug={slug} apiTags={apiData.blogTags} />
          </div>
        </div>
      </div>
      <div className={styles.submit_topBar}>
        <div>
          <ClickBtn btnText="Publish" btnHandel={handelUpdateContent} />
        </div>
      </div>
    </div>
  );
}
