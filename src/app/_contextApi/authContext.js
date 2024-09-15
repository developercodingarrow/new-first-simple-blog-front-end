"use client";
import { createContext, useEffect, useRef, useState } from "react";
import { genericDataHandler } from "../_generichandler/generichandler";
import { updateUserProfile } from "../_actions/userApi";
export const AuthContext = createContext();

export default function AuthContextProvider({ children, authData }) {
  const [authUser, setauthUser] = useState(authData);

  // UPDATE USER PROFILE
  const handelUpdateUserProfile = genericDataHandler(updateUserProfile);

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
