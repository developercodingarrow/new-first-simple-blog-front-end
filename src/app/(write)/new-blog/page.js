"use client";
import React, { useContext, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./newblog.module.css";
import BlogImgUplod from "@/src/components/client-components/img-upload/blogImguplod/BlogImgUplod";
import { createBlogWithImg } from "@/src/Actions/blogActions/blogAction";
import SingleImgModel from "@/src/components/client-components/models/imgModel/SingleImgModel";
import {
  handelUploadThumblin,
  handelImageWithAditionalData,
} from "@/src/utils/handlers/imageHandlers";
import { ImgModelContext } from "@/src/contextApi/ImgModelContextApi";

export default function page() {
  const { image, imgData } = useContext(ImgModelContext);
  const [blogData, setblogData] = useState({
    blogTitle: "",
    metaDescription: "",
    blogDescription: "",
  });

  const handelChange = (e) => {
    setblogData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    console.log(blogData);
  };

  const handleQuillChange = (content) => {
    setblogData((prevData) => ({
      ...prevData,
      blogDescription: content,
    }));
    console.log(blogData);
  };

  const handleImageUpload = (uploadedImage) => {
    setImage(uploadedImage);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("blogTitle", blogTitle);
    formData.append("metaDescription", metaDescription);
    formData.append("blogDescreption", blogDescreption);
    if (image) {
      formData.append("blogThumblin", image);
    }

    try {
      const res = await createBlogWithImg(formData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const additionalData = {
    blogTitle: "aditional bloga Title",
    blogDescreption: "aditional Your blog description",
    metaDescription: " Aditional Your meta description",
  };

  const handelCreateBlog = async () => {
    try {
      const res = await handelImageWithAditionalData(
        image,
        imgData,
        "blogThumblin",
        blogData
      );
    } catch (error) {
      console.log(error);
    }
  };

  const id = "66ba679b81eb7f9af8fee4b2";

  return (
    <div className={styles.main_container}>
      <SingleImgModel updateHandler={handelUploadThumblin} id={id} />
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
            <div className={styles.input_wrapper}>
              <ReactQuill
                theme="snow"
                value={blogData.blogDescription}
                onChange={handleQuillChange}
              />
            </div>
          </div>
        </div>
        <div className={styles.editor_sideBard}>
          <div className={styles.thumblin_upload}>
            <BlogImgUplod onImageUpload={handleImageUpload} />
          </div>
        </div>
      </div>
      <button onClick={handelCreateBlog} className={styles.submit_button}>
        Submit Blog
      </button>
    </div>
  );
}
