"use client";
import { createContext, useState } from "react";
import { genericDataHandler } from "../_generichandler/generichandler";
import { updateUser } from "../utils/useraction";

export const AuthContext = createContext();

export default function AuthContextProvider({ children, authData }) {
  const [authUser, setauthUser] = useState(authData);

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
