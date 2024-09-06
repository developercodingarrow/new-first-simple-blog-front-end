"use client";
import { createContext, useEffect, useRef, useState } from "react";
import { isAuth } from "../Actions/authAction";
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const longined = isAuth();
  const auth = true;
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
  const [isBtnLoading, setisBtnLoading] = useState(false);
  const [userImgModel, setuserImgModel] = useState(false);
  const [imgUrl, setimgUrl] = useState("");
  const [modelActionId, setmodelActionId] = useState("");
  const [isunAuthModel, setisunAuthModel] = useState(false);
  const [id, setid] = useState("");

  console.log("---", longined);
  const handelOpenUserDrawer = () => {
    setisUserDrawer(true);
  };

  const handelCloseUserDrawer = () => {
    setisUserDrawer(false);
  };

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

  // ----
  const handelSingImgModelOpen = () => {
    setsingleImgModel(true);
  };

  // ----
  const handelSingImgModelClose = () => {
    setsingleImgModel(false);
  };
  //  ---
  const handelCloseReportModel = () => {
    setisOpenReportModel(false);
  };

  // ---
  const handelOpenReportModel = (id) => {
    console.log("id---", id);
    setisOpenReportModel(true);
    setreportModelActionId(id);
  };

  // ----
  const handelOpenCommentModel = () => {
    setisOpenCommentModel(true);
  };

  const handelCloseCommentModel = () => {
    setisOpenCommentModel(false);
  };

  const handelOpenImgModel = (imageUrl, id) => {
    setimgUrl(imageUrl);
    setmodelActionId(id);
    setuserImgModel(true);
  };

  const handelCloseImgModel = () => {
    setuserImgModel(false);
  };

  const handelOpenIsunAuthModel = () => {
    setisunAuthModel(true);
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
        auth,
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
        isBtnLoading,
        setisBtnLoading,
        userImgModel,
        setuserImgModel,
        handelOpenImgModel,
        imgUrl,
        setimgUrl,
        modelActionId,
        setmodelActionId,
        handelCloseImgModel,
        isunAuthModel,
        setisunAuthModel,
        handelOpenIsunAuthModel,
        id,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
