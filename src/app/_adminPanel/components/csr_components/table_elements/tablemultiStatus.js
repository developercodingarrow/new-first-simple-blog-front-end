import React from "react";
import styles from "./css/tableMultiStatus.module.css";
export default function TablemultiStatus(props) {
  const { data } = props;

  const getStatusClass = (status) => {
    switch (status) {
      case "span":
        return styles.draft;
      case "Rules Violation":
        return styles.draft;
      case "no-action":
        return styles.published;
      case "pending":
        return styles.pending;
      case "active":
        return styles.active;
      case "moderation_review":
        return styles.moderation_review;
      case "suspension":
        return styles.suspension;

      default:
        return "";
    }
  };
  // Rules Violation
  return <div className={getStatusClass(data)}>{data}</div>;
}
