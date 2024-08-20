import React from "react";
import styles from "./css/actionDropDown.module.css";
import { GoBlocked, FaPlus } from "../../ApplicationIcons";

export default function ActionDropDown(props) {
  const { actionList = [], actionId, slug } = props;

  return (
    <div className={styles.com_container}>
      <div className={styles.action_list_wrapper}>
        {actionList.map((action, index) => (
          <div
            key={index}
            className={styles.action_item}
            onClick={() => action.handler(actionId, slug)} // Pass actionId to handler
          >
            {/* <div className={styles.icon_wrapper}>{action.icon}</div> */}
            <div className={styles.text_wrapper}>{action.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
