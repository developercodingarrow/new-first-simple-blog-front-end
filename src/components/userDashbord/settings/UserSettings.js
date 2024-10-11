"use client";

import React, { useContext } from "react";
import { AuthContext } from "@/src/app/_contextApi/authContext";
import UpdatePassword from "./UpdatePassword";
import ByGoogle from "./ByGoogle";

export default function UserSettings() {
  const { authUser } = useContext(AuthContext);
  console.log("authUser---", authUser);
  return (
    <div>
      {authUser.authBy === "form" && (
        <div>
          <UpdatePassword />
        </div>
      )}

      {authUser.authBy === "googleAuth" && (
        <div>
          {" "}
          <ByGoogle />{" "}
        </div>
      )}
    </div>
  );
}
