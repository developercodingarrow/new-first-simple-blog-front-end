import React from "react";
import styles from "./login.module.css";

import { getSession } from "../../lib/authentication";
import Login from "@/src/components/userAuth/Login";

export default async function page() {
  const userDetails = await getSession();
  return (
    <div>
      <Login userData={userDetails} />
    </div>
  );
}
