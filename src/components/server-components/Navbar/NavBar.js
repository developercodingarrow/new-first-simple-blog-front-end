import React from "react";
import styles from "./css/navbar.module.css";
import NavLogo from "./NavLogo";
import NavBarNavigations from "./NavBarNavigations";
import CircleUser from "../../client-components/circleUser/CircleUser";
import HangBug from "../../client-components/cl_Navbar/HangBug";
import TagSearchClient from "../../tags/elements/searchTags/TagSearchClient";

export default async function NavBar(props) {
  const { userData } = props;

  return (
    <div className={styles.main_conatiner}>
      <div className={styles.dekstop_navBar_wrapper}>
        <div className={styles.nav_left_side}>
          <div className={styles.navBar_logo_wrapper}>
            <NavLogo />
          </div>
          <div className={styles.Nav_search_wrapper}>
            <TagSearchClient
              searchResults={true}
              search_containerStyle="nav_search_container"
            />
          </div>
        </div>

        <div className={styles.navBar_right_side}>
          <div>
            <NavBarNavigations />
          </div>

          <div>
            <CircleUser userData={userData} />
          </div>
        </div>
      </div>
      <div className={styles.mobile_navBar_wrapper}>
        <div>
          <HangBug />
        </div>
        <div>
          <NavLogo />
        </div>
      </div>
    </div>
  );
}
