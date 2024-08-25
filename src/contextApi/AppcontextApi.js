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
  const [isOpenReportModel, setisOpenReportModel] = useState(false);
  const [reportModelActionId, setreportModelActionId] = useState("");
  const [isOpenCommentModel, setisOpenCommentModel] = useState(false);

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

  const handelcloseInputModal = () => {
    setisOpenInputModel(false);
  };

  const handelSingImgModelOpen = () => {
    setsingleImgModel(true);
  };

  const handelSingImgModelClose = () => {
    setsingleImgModel(false);
  };

  const handelCloseReportModel = () => {
    setisOpenReportModel(false);
  };

  const handelOpenReportModel = (id) => {
    console.log("id---", id);
    setisOpenReportModel(true);
    setreportModelActionId(id);
  };

  const handelOpenCommentModel = () => {
    setisOpenCommentModel(true);
  };

  const handelCloseCommentModel = () => {
    setisOpenCommentModel(false);
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
        setisLogined,
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
        isOpenReportModel,
        setisOpenReportModel,
        handelCloseReportModel,
        handelOpenReportModel,
        reportModelActionId,
        isOpenCommentModel,
        setisOpenCommentModel,
        handelOpenCommentModel,
        handelCloseCommentModel,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
