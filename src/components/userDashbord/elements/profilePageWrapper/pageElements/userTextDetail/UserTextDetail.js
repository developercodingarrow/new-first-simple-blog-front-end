import React from "react";
import styles from "./css/usertextdetails.module.css";
import { IoIosArrowForward } from "../../../../../ApplicationIcons";
export default function UserTextDetail(props) {
  const {
    title,
    textdata,
    apiData,
    modelTitle,
    modelInputs,
    openModal,
    modelActionHandler,
    container_style,
    text_wrapper_style,
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
      <div className={styles[container_style]}>
        <div className={styles.title_wrapper}>
          <h5 className="capitalize_text"> {title}</h5>
        </div>

        <div className={styles[text_wrapper_style]} onClick={handleOpen}>
          {textdata === undefined || textdata === "undefined" ? (
            <>
              {" "}
              <div className={styles.Textdata_wrapper}>
                <div> click To Add... {title} </div>
                <div className={styles.forward_arrow}>
                  {" "}
                  <IoIosArrowForward />{" "}
                </div>{" "}
              </div>{" "}
            </>
          ) : (
            <>
              <div className={styles.Textdata_wrapper}>
                <div> {textdata} </div>
                <div className={styles.forward_arrow}>
                  {" "}
                  <IoIosArrowForward />{" "}
                </div>{" "}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
