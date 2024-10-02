"use client";
import React, { useContext, useState } from "react";
import styles from "./tagSerachClient.module.css";
import { HiMagnifyingGlass } from "../../../ApplicationIcons";
import { TagContext } from "@/src/app/_contextApi/TagContextApi";
import SearchResult from "./SearchResult";

export default function TagSearchClient(props) {
  const { searchResults, search_containerStyle } = props;
  const [searchQuery, setSearchQuery] = useState("");
  const { handelfilterTags } = useContext(TagContext);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    handelfilterTags(query);
  };
  return (
    <div className={styles[search_containerStyle]}>
      <div className={styles.search_iconBox}>
        <HiMagnifyingGlass />
      </div>
      <div>
        <input
          type="text"
          placeholder="Serach Your Topic"
          className={styles.search_input_style}
          value={searchQuery}
          onChange={handleSearch} //
        />
      </div>
      {searchResults && searchQuery.length >= 1 && (
        <div className={styles.search_result_wraper}>
          <SearchResult />
        </div>
      )}
    </div>
  );
}
