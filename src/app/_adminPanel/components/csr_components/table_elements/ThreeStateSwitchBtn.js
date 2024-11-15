"use client";
import React, { useEffect, useState } from "react";
import styles from "./css/threeStateSwitchBtn.module.css";

export default function ThreeStateSwitchBtn(props) {
  const { data, completeData, handler } = props;

  // Define the three states as an array
  const states = ["no-action", "moderation_review", "suspension"];

  // Set the initial state based on the passed `data`
  const [currentState, setCurrentState] = useState(data);

  const toggleSwitch = () => {
    // Determine the next state in the cycle
    const nextIndex = (states.indexOf(currentState) + 1) % states.length;
    const nextState = states[nextIndex];

    // Pass the id and the next state to the handler
    handler(completeData._id, nextState);

    // Update the local state
    setCurrentState(nextState);
  };

  useEffect(() => {
    // Update the switch state when `data` changes
    setCurrentState(data);
  }, [data]);

  // Function to get the appropriate CSS class based on the current state
  const getClassName = () => {
    switch (currentState) {
      case "moderation_review":
        return `${styles.switch} ${styles["switch-moderation"]}`;
      case "suspension":
        return `${styles.switch} ${styles["switch-suspension"]}`;
      default:
        return `${styles.switch} ${styles["switch-no-action"]}`;
    }
  };

  return (
    <div
      className={getClassName()}
      onClick={toggleSwitch}
      title={currentState} // Optional: display the current state on hover
    >
      <div className={styles["switch-circle"]}></div>
    </div>
  );
}
