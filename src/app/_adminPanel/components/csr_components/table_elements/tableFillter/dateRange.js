"use client";
import React, { useState } from "react";
import styles from "./css/daterange.module.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

export default function DateRange(props) {
  const { handelDateRange } = props;
  const [toggleClender, settoggleClender] = useState(false);
  const [date, setdate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handelChnage = (ranges) => {
    const startDate = ranges.selection.startDate;
    const endDate = ranges.selection.endDate;
    setdate(ranges.selection);
    handelDateRange(startDate, endDate);
  };
  const handelToggleCender = () => {
    settoggleClender(!toggleClender);
  };
  return (
    <div className={styles.date_range_container}>
      <span className={styles.calender_btn} onClick={handelToggleCender}>
        start date - End date
      </span>
      {toggleClender && (
        <div className={styles.date_rangeBox}>
          <DateRangePicker onChange={handelChnage} ranges={[date]} />{" "}
        </div>
      )}
    </div>
  );
}
