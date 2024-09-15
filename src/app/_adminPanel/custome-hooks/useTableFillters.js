"use client";
import React, { useState, useEffect, useContext, useRef } from "react";
import { FillterContext } from "../context_api/FillterContextApi";
import { filterByDateRange } from "../components/logicalFunctions/dateRangeFilter";
import {
  sortByNumber,
  sortByDate,
} from "../components/logicalFunctions/sortingFillter";

export default function useTableFillters(initialRows, initialRowsPerPage = 20) {
  const { visibalRows, setvisibalRows } = useContext(FillterContext);
  const totalRows = initialRows?.length ?? 0;
  const [currentPage, setcurrentPage] = useState(1);
  const [rowsPerPage, setrowsPerPage] = useState(initialRowsPerPage);
  const [sortOrder, setSortOrder] = useState(true); // true for ascending, false for descending
  const [visibleRange, setVisibleRange] = useState({
    start: 1,
    end: rowsPerPage,
  });

  useEffect(() => {
    // Update visible rows when page or rowsPerPage changes
    updateVisibleRows();
  }, [currentPage, rowsPerPage]);
  const handleRowsPerPageChange = (e) => {
    const selectedRowsPerPage = Number(e.target.value);
    console.log(selectedRowsPerPage);
    setrowsPerPage(selectedRowsPerPage);
    setcurrentPage(1); // Reset to first page when changing rows per page
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(totalRows / rowsPerPage)) {
      setcurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };

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
    setVisibleRange({
      start: startpageIndex + 1,
      end: Math.min(endPageIndex, totalRows), // Ensure end is within total rows
    });
  };

  const handleSortClick = (key) => {
    const sortedData = sortByNumber(visibalRows, key, sortOrder);
    setSortOrder(!sortOrder); // Toggle sort order
    updateVisibleRows(sortedData); // Update table with sorted data
  };
  return {
    updateVisibleRows,
    searchByTableFiled,
    filterByDate,
    handleSortClick,
    handleRowsPerPageChange,
    totalRows,
    visibleRange,
    nextPage,
    prevPage,
    currentPage,
    sortOrder,
  };
}
