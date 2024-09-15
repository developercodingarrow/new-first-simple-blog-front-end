import React from "react";
import styles from "./login.module.css";
import Login from "@/src/layouts/server/userauth/Login";
import { getSession } from "../../lib/authentication";

export default async function page() {
  const userDetails = await getSession();
  return (
    <div>
      <Login userData={userDetails} />
    </div>
  );
}
