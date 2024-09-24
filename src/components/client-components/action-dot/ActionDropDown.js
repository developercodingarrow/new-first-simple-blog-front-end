import React from "react";
import styles from "./css/actionDropDown.module.css";

export default function ActionDropDown(props) {
  const { actionList = [], actionId, slug, closeHandel } = props;

  const handelAction = async (actionHandler, actionId, slug) => {
    // Wait for the action to complete if it's a promise
    actionHandler(actionId, slug);
    // Close the dropdown after the action is completed
    closeHandel();
  };

  return (
    <div className={styles.com_container}>
      <div className={styles.action_list_wrapper}>
        {actionList.map((action, index) => (
          <div
            key={index}
            className={styles.action_item}
            // onClick={() => action.handler(actionId, slug)} // Pass actionId to handler
            onClick={() => handelAction(action.handler, actionId, slug)}
          >
            {/* <div className={styles.icon_wrapper}>{action.icon}</div> */}
            <div className={styles.text_wrapper}>{action.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
