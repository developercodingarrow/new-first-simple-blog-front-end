import React from "react";
import styles from "./css/usercardfooter.module.css";
import FooterActionWrapper from "./FooterActionWrapper";

export default function UserCardFooter(props) {
  const { footerActions, actionId, slug } = props;
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className="small_text_wrapper">12-aug-2024</div>
        <div className={styles.action_wrapper}>
          <FooterActionWrapper
            footerActions={footerActions}
            actionId={actionId}
            slug={slug}
          />
        </div>
      </div>
    </div>
  );
}
