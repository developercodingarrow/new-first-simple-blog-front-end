"use client";
import React, { useContext, useEffect } from "react";
import styles from "./css/circleUser.module.css";
import Image from "next/image";
import { SlUser } from "../../ApplicationIcons";
import { AppContext } from "@/src/contextApi/AppcontextApi";
import LinkBtn from "../../server-components/serverElements/LinkBtn";
import UserDrawer from "../../authComponents/userDrawer/UserDrawer";

export default function CircleUser(props) {
  const { userData } = props;

  const { isUserDrawer, handelOpenUserDrawer } = useContext(AppContext);

  return (
    <div className={styles.com_container}>
      <div className={styles.inner_container}>
        {userData ? (
          <div className="large_iconWrapper" onClick={handelOpenUserDrawer}>
            <SlUser />
            <div className={styles.user_drawer_Wrapper}>
              {isUserDrawer && <UserDrawer />}
            </div>
          </div>
        ) : (
          <div>
            <LinkBtn
              linkText="login"
              btnSize="larg_Link_Btn"
              hrfLink="/login"
            />
          </div>
        )}
      </div>
    </div>
  );
}
