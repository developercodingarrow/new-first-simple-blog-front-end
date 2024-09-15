"use client";
import { createContext, useEffect, useRef, useState } from "react";
import { genericDataHandler } from "../_generichandler/generichandler";
import { updateUserProfile } from "../_actions/userApi";
export const UserContext = createContext();
export default function UserContextProvider({ children }) {
  const [authUser, setauthUser] = useState();

  const [isLoading, setisLoading] = useState(false);
  const [editModelData, seteditModelData] = useState(null);
  const [modelInputData, setmodelInputData] = useState([]);
  const [actionHandler, setActionHandler] = useState(null);
  const [isOpenInputModel, setisOpenInputModel] = useState(false);
  const [id, setid] = useState("");

  //HANDLE  INPUT MODEL OPEN
  const handelOpenInputModel = (data, id, fields, handler) => {
    console.log("data---", data, "id--", id);
    seteditModelData(data);
    setid(id);
    setmodelInputData(fields);
    setActionHandler(() => handler);
    setisOpenInputModel(true);
  };

  // HANDEL INPUT MODEL CLOSE
  const handelcloseInputModal = () => {
    setisOpenInputModel(false);
  };

  // UPDATE USER PROFILE
  const handelUpdateUserProfile = genericDataHandler(updateUserProfile);

  return (
    <UserContext.Provider
      value={{
        isLoading,
        setisLoading,
        handelUpdateUserProfile,
        handelOpenInputModel,
        handelcloseInputModal,
        editModelData,
        modelInputData,
        actionHandler,
        isOpenInputModel,
        id,
        //
        authUser,
        setauthUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
