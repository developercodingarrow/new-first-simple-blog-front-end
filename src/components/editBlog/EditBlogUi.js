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
import {
  CreateEditorModules,
  CreateEditorformats,
} from "@/src/jsonData/reactQuillTextEditor";

export default function EditBlogUI(props) {
  const { apiData, slug } = props;

  const [blogData, setBlogData] = useState({
    blogTitle: apiData?.blogTitle || "",
    metaDescription: apiData?.metaDescription || "",
    blogDescreption: apiData?.blogDescreption || "",
  });

  const [errors, setErrors] = useState({
    blogTitle: "",
    metaDescription: "",
    blogDescreption: "",
  });

  const [formIsValid, setFormIsValid] = useState(false);
  const validateForm = () => {
    const isTitleValid = blogData.blogTitle.length >= 10;
    const isMetaDescriptionValid =
      blogData.metaDescription.length <= 160 &&
      blogData.metaDescription.trim() !== "";
    const isBlogDescriptionValid = blogData.blogDescreption.length > 50;

    setFormIsValid(
      isTitleValid && isMetaDescriptionValid && isBlogDescriptionValid
    );
  };

  useEffect(() => {
    validateForm();
  }, [blogData, blogData.blogDescreption, errors]);

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
    const { name, value } = e.target;
    setBlogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Validation for title
    if (name === "blogTitle") {
      if (value.trim() === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          blogTitle: "Title cannot be empty.",
        }));
      } else if (value.length < 10 || value.length > 100) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          blogTitle: "Title must be at least 10 characters long.",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, blogTitle: "" }));
      }
    }
    // Validation for metaDescription
    if (name === "metaDescription") {
      if (value.trim() === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          metaDescription: "Meta description cannot be empty.",
        }));
      } else if (value.length < 100 || value.length > 160) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          metaDescription: "Meta description between 100 to  160 characters.",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, metaDescription: "" }));
      }
    }
  };

  const handleQuillChange = (content) => {
    setBlogData((prevData) => ({
      ...prevData,
      blogDescreption: content,
    }));

    if (content.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        blogDescreption: "Content cannot be empty.",
      }));
    } else if (content.length < 50) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        blogDescreption: "Content must be at least 50 characters long.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        blogDescreption: "",
      }));
    }
  };

  const handelUpdateContent = async () => {
    try {
      const res = await upadteBlogContent(blogData, slug);

      if (res.status === "Fails") {
        toast.error(res.message);
      }
      if (res.status === "success") {
        toast.success(res.message);
      }
    } catch (error) {}
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
            <div className={"input_errors"}>{errors.blogTitle}</div>
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
            <div className={"input_errors"}>{errors.metaDescription}</div>
          </div>

          <div className={styles.input_filed_wrapper}>
            <div className={styles.lable_wrapper}>
              <label>Content</label>
            </div>
            <div className={styles.editor_wrapper}>
              <ReactQuill
                theme="snow"
                value={blogData.blogDescreption}
                modules={CreateEditorModules}
                formats={CreateEditorformats}
                onChange={handleQuillChange}
                className={styles.editor_style}
                style={{ minHeight: "500px", height: "auto" }}
              />
            </div>
            <div className={"input_errors"}>{errors.blogDescreption}</div>
          </div>
        </div>
        <div className={styles.editor_sideBard}>
          <div className={styles.thumblin_upload}>
            <BlogImgPreUploder apiData={apiData} slug={slug} />
          </div>
          <div>
            <AddTagChip blogSlug={slug} apiTags={apiData?.blogTags} />
          </div>
        </div>
      </div>
      <div className={styles.submit_topBar}>
        <div>
          <ClickBtn
            btnText="Publish.."
            btnHandel={handelUpdateContent}
            btndisable={formIsValid}
            btnClass="write_blogBtn"
          />
        </div>
      </div>
    </div>
  );
}
