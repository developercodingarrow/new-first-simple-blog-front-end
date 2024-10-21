import React from "react";
import styles from "../page.module.css";
import ContactSupportForm from "@/src/components/contactSupport/ContactSupportForm";
import ContactDetails from "@/src/components/contactSupport/ContactDetails";
export default function ContactSupportpage() {
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <div className={styles.page_heading_wrapper}>
          <h1>Contact Support</h1>
        </div>
        <div className={styles.page_sub_heading_wrapper}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu
            nulla fermentum, faucibus est ac, mattis eros. Nunc id eleifend
            arcu, at tincidunt est. Donec lacus tellus, maximus nec pretium at,{" "}
          </p>
        </div>
        <div className={styles.contact_us_form_wrapper}>
          <div className={styles.contact_from}>
            <ContactSupportForm />
          </div>
          <div className={styles.contact_details}>
            <ContactDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
