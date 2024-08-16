"use client";

import React, { useContext, useState } from "react";
import styles from "./css/addTagChip.module.css";
import { TagContext } from "@/src/contextApi/TagContextApi";
import { upadteBlogTags } from "@/src/Actions/blogActions/blogAction";

export default function AddTagChip(props) {
  const { blogSlug } = props;
  const { allTags } = useContext(TagContext); // Assuming you need this context for other operations
  const [newTag, setNewTag] = useState("");
  const [tags, setTags] = useState([]);
  const [filteredTags, setFilteredTags] = useState([]);

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
      console.log(res);
    } catch (err) {
      setError(err.message);
      setSuccess(null);
    }
  };
  return (
    <div>
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
              placeholder="Enter tag and press Enter"
              className={styles.input}
            />
            <div className={styles.search_result_box}>
              {filteredTags.length > 0 && (
                <ul className={styles.searchResults}>
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

      <button onClick={handleSubmit} className={styles.submitButton}>
        Update Tags
      </button>

      {error && <div className={styles.error}>{error}</div>}
      {success && <div className={styles.success}>{success}</div>}
    </div>
  );
}
