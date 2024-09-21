"use client";
import { createContext, useEffect, useRef, useState } from "react";
import { genericDataHandler } from "../_generichandler/generichandler";
import { updateUserProfile } from "../utils/userAuthaction";
import { updateUser } from "../utils/useraction";

export const AuthContext = createContext();

export default function AuthContextProvider({ children, authData }) {
  const [authUser, setauthUser] = useState(authData);
  // console.log("authUser---", authUser);
  // UPDATE USER PROFILE
  const handelUpdateUserProfile = genericDataHandler(updateUser);

  return (
    <AuthContext.Provider
      value={{
        authUser,
        setauthUser,
        handelUpdateUserProfile,
        // input model
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
