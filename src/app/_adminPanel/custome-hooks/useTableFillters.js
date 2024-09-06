"use client";
import React, { useState, useEffect, useContext, useRef } from "react";
import { FillterContext } from "../context_api/FillterContextApi";
import { filterByDateRange } from "../components/logicalFunctions/dateRangeFilter";
import {
  sortByNumber,
  sortByDate,
} from "../components/logicalFunctions/sortingFillter";

export default function useTableFillters(initialRows, initialRowsPerPage = 50) {
  const { visibalRows, setvisibalRows } = useContext(FillterContext);
  const [currentPage, setcurrentPage] = useState(1);
  const [rowsPerPage, setrowsPerPage] = useState(initialRowsPerPage);
  const [sortOrder, setSortOrder] = useState(true); // true for ascending, false for descending

  const searchByTableFiled = (searchTerm, field) => {
    if (!searchTerm) {
      updateVisibleRows(initialRows);
    }
    let filteredData;
    filteredData = initialRows.filter((item) => {
      if (
        item[field] &&
        item[field].toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return true;
      }
      return false;
    });

    updateVisibleRows(filteredData);
  };

  const filterByDate = (startDate, endDate) => {
    console.log(startDate);
    console.log(endDate);
    const filteredData = filterByDateRange(initialRows, startDate, endDate);
    console.log(filteredData);
    updateVisibleRows(filteredData);
  };

  const updateVisibleRows = (data) => {
    let rowsToDisplay = data || initialRows; // Use sorted data if available
    let startpageIndex = (currentPage - 1) * rowsPerPage;
    const endPageIndex = currentPage * rowsPerPage;
    const updatedVisibleRows = rowsToDisplay.slice(
      startpageIndex,
      endPageIndex
    );
    setvisibalRows(updatedVisibleRows);
  };

  const handleSortClick = (key) => {
    const sortedData = sortByNumber(initialRows, key, sortOrder);
    setSortOrder(!sortOrder); // Toggle sort order
    console.log("sortedData--", sortedData);
    updateVisibleRows(sortedData); // Update table with sorted data
  };
  return {
    updateVisibleRows,
    searchByTableFiled,
    filterByDate,
    handleSortClick,
  };
}
