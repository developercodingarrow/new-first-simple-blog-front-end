"use client";

import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./css/addTagChip.module.css";
import ClickBtn from "../client-components/elements/buttons/ClickBtn";
import { upadteBlogTags } from "@/src/app/utils/blogactions";
import { TagContext } from "@/src/app/_contextApi/TagContextApi";

export default function AddTagChip(props) {
  const { blogSlug, apiTags } = props;
  const { allTags } = useContext(TagContext); // Assuming you need this context for other operations
  const [newTag, setNewTag] = useState("");
  const [tags, setTags] = useState([]);
  const [filteredTags, setFilteredTags] = useState([]);

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (apiTags && apiTags.length > 0) {
      const initialTags = apiTags.map((tag) => tag.tagName);
      setTags(initialTags);
    }
  }, [apiTags]);

  useEffect(() => {
    if (tags.length > 5) {
      setFormIsValid(false);
    } else if (tags.length > 0) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [tags]);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && newTag.trim()) {
      event.preventDefault();
      if (!tags.includes(newTag.trim())) {
        setTags([...tags, newTag.trim()]);
      }
      setNewTag("");
      setFilteredTags([]);
    }
  };
  const handleInputChange = (event) => {
    const value = event.target.value;
    setNewTag(value);

    if (value.length >= 3) {
      const filtered = allTags.filter((tag) =>
        tag.tagName.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredTags(filtered);
    } else {
      setFilteredTags([]);
    }
  };

  const handleTagClick = (tag) => {
    if (!tags.includes(tag.tagName)) {
      setTags([...tags, tag.tagName]);
    }
    setNewTag("");
    setFilteredTags([]);
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = async () => {
    try {
      const formData = { tagName: tags };
      const res = await upadteBlogTags(formData, blogSlug);
      if (res.status === "success") {
        toast.success(res.message);
      }
    } catch (err) {
      setError(err.message);
      setSuccess(null);
    }
  };
  return (
    <div className={styles.main_conatiner}>
      <Toaster />
      <div className={styles.container}>
        <div className={styles.tagContainer}>
          {tags.map((tag, index) => (
            <div key={index} className={styles.chip}>
              {tag}
              <span
                className={styles.removeChip}
                onClick={() => removeTag(tag)}
              >
                &times;
              </span>
            </div>
          ))}

          <div className={styles.input_wrapper}>
            <input
              type="text"
              value={newTag}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Enter Tag Name"
              className={styles.input}
            />
            <div className={styles.search_result_box}>
              {filteredTags.length > 0 && (
                <ul>
                  {filteredTags.map((tag, index) => (
                    <li
                      key={index}
                      className={styles.searchResult}
                      onClick={() => handleTagClick(tag)}
                    >
                      {tag.tagName}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.btn_wrapper}>
        <ClickBtn
          btnText="Update"
          btnHandel={handleSubmit}
          btndisable={formIsValid}
          btnClass="write_blogBtn"
        />
      </div>

      {error && <div className={styles.error}>{error}</div>}
      {success && <div className={styles.success}>{success}</div>}
    </div>
  );
}
