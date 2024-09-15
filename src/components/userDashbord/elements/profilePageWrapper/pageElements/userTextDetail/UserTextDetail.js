import React from "react";
import styles from "./css/usertextdetails.module.css";

export default function UserTextDetail(props) {
  const {
    title,
    textdata,
    apiData,
    modelTitle,
    modelInputs,
    openModal,
    modelActionHandler,
  } = props;

  const handleOpen = () => {
    openModal(
      apiData,
      apiData._id,
      modelTitle,
      modelInputs,
      modelActionHandler
    );
  };

  return (
    <>
      <div className={styles.user_details_container}>
        <div className={styles.title_wrapper}>
          <h5 className="capitalize_text"> {title}</h5>
        </div>

        <div className={styles.text_data_wrapper} onClick={handleOpen}>
          {textdata === "undefined" ? <>add</> : <>{textdata}</>}
        </div>
      </div>
    </>
  );
}
