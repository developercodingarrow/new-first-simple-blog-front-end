"use client";
import { createContext, useEffect, useRef, useState } from "react";
import { genericDataHandler } from "../_generichandler/generichandler";
import { updateUserProfile } from "../_action/user/userAction";
export const UserContext = createContext();
export default function UserContextProvider({ children }) {
  const [isLoading, setisLoading] = useState(false);
  const [editModelData, seteditModelData] = useState({});
  const [modelInputData, setmodelInputData] = useState([]);
  const [actionHandler, setActionHandler] = useState(null);
  const [isOpenInputModel, setisOpenInputModel] = useState(false);
  const [id, setid] = useState("");

  //HANDLE  INPUT MODEL OPEN
  const handelOpenInputModel = (data, id, fields, handler) => {
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
