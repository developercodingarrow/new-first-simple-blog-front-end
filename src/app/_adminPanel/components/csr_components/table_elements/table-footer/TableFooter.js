import React, { useEffect, useState } from "react";
import styles from "./css/tableFooter.module.css";
import useTableFillters from "@/src/app/_adminPanel/custome-hooks/useTableFillters";
import {
  IoMdArrowDropdown,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "../../../../ApplicationIcons";
export default function TableFooter(props) {
  const { data, setIsActionLoading } = props;

  const {
    updateVisibleRows,
    handleRowsPerPageChange,
    totalRows,
    visibleRange,
    nextPage,
    prevPage,
    currentPage,
  } = useTableFillters(data);

  const [rowsPerPage, setRowsPerPage] = useState(2);
  const handleChange = (e) => {
    const value = e.target.value;
    setRowsPerPage(value); // Update state
    handleRowsPerPageChange(e); // Call the handler from useTableFilters
  };

  useEffect(() => {
    updateVisibleRows(data);
  }, [rowsPerPage]);

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.row_per_pageBox}>
          <div>Rows per page:</div>
          <div className={styles.dropdown_container}>
            <select
              value={rowsPerPage}
              onChange={handleChange}
              className={styles.dropdown}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <IoMdArrowDropdown className={styles.dropdown_icon} />{" "}
            {/* Adding the icon */}
          </div>
        </div>
        <div className={styles.page_stats}>
          <span> {visibleRange.start}</span> - <span> {visibleRange.end}</span>{" "}
          of <span>{totalRows} </span>
        </div>
        <div className={styles.prv_next_icon_wrapper}>
          <div>
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={styles.arrow_btn}
            >
              <MdOutlineKeyboardArrowLeft />{" "}
            </button>
          </div>
          <div>
            <button
              onClick={nextPage}
              disabled={currentPage >= Math.ceil(totalRows / rowsPerPage)}
              className={styles.arrow_btn}
            >
              <MdOutlineKeyboardArrowRight />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
