"use client";
import { createContext, useEffect, useRef, useState } from "react";
import { isAuth } from "../Actions/authAction";
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const longined = isAuth();
  const [isUserDrawer, setisUserDrawer] = useState(false);
  const [isLogined, setisLogined] = useState(null);
  const [isOpenInputModel, setisOpenInputModel] = useState(false);
  const [editModelData, seteditModelData] = useState({});
  const [modelInputData, setmodelInputData] = useState([]);
  const [actionHandler, setActionHandler] = useState(null);
  const [singleImgModel, setsingleImgModel] = useState(false);

  console.log(isLogined);
  const handelOpenUserDrawer = () => {
    setisUserDrawer(true);
  };

  const handelCloseUserDrawer = () => {
    setisUserDrawer(false);
  };

  const handelOpenInputModel = (data, fields, handler) => {
    seteditModelData(data);
    setmodelInputData(fields);
    setActionHandler(() => handler);
    setisOpenInputModel(true);
  };

  console.log(actionHandler);

  const handelcloseInputModal = () => {
    setisOpenInputModel(false);
  };

  const handelSingImgModelOpen = () => {
    setsingleImgModel(true);
  };

  const handelSingImgModelClose = () => {
    setsingleImgModel(false);
  };

  useEffect(() => {
    const loggedIn = isAuth();
    setisLogined(loggedIn);
    if (loggedIn) {
      console.log("useEffect run");
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLogined,
        isUserDrawer,
        handelOpenUserDrawer,
        handelCloseUserDrawer,
        isOpenInputModel,
        handelOpenInputModel,
        editModelData,
        seteditModelData,
        setisOpenInputModel,
        modelInputData,
        setmodelInputData,
        handelcloseInputModal,
        longined,
        actionHandler,
        setActionHandler,
        singleImgModel,
        setsingleImgModel,
        handelSingImgModelOpen,
        handelSingImgModelClose,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
