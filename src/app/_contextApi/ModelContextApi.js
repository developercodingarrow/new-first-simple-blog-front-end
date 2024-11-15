"use client";
import { createContext, useEffect, useRef, useState } from "react";
export const ModelsContext = createContext();

export default function ModelContextProvider({ children }) {
  const [isUserDrawer, setisUserDrawer] = useState(false);

  const [isReportModel, setisReportModel] = useState(false);
  const [modelID, setmodelID] = useState("");
  const [singleImgModel, setsingleImgModel] = useState(false);

  // UserImage Model start
  const [imgUrl, setimgUrl] = useState("");
  const [imgModelId, setimgModelId] = useState("");
  const [userImgModel, setuserImgModel] = useState(false);
  // User Image Modle end

  // Input Model start
  const [modelInputData, setmodelInputData] = useState([]);
  const [editModelData, seteditModelData] = useState(null);
  const [id, setid] = useState("");
  const [actionHandler, setActionHandler] = useState(null);
  const [isOpenInputModel, setisOpenInputModel] = useState(false);
  const [modelHeading, setmodelHeading] = useState("");
  // Input Model End
  const [isAuthModel, setisAuthModel] = useState(false);
  const [isDeleteModel, setisDeleteModel] = useState(false);

  const [isOpenCommentModel, setisOpenCommentModel] = useState(false);
  const [searchModel, setsearchModel] = useState(false);

  // 1) HANDEL CLOSE MODEL
  const handelCloseModel = (setModalState) => {
    setModalState(false);
    setmodelID(null);
  };

  // 2) Handel OPEN MODEL
  const handelOpenModel = (setModalState, id = null) => {
    setModalState(true);
    setmodelID(id);
  };

  // user Image model start
  const handelOpenUserImgModel = (imageUrl, id) => {
    setimgUrl(imageUrl);
    setimgModelId(id);
    setuserImgModel(true);
  };

  const handelCloseUserImgModel = () => {
    setuserImgModel(false);
  };
  //-----------User Image model end--------

  // Input Modle Open start
  const handelOpenInputModel = (data, id, heading, fields, handler) => {
    seteditModelData(data);
    setid(id);
    setmodelInputData(fields);
    setmodelHeading(heading);
    setActionHandler(() => handler);
    setisOpenInputModel(true);
  };
  // Input Model Close
  const handelcloseInputModal = () => {
    setisOpenInputModel(false);
  };
  // input model end-----------

  const handelOpenAuthModel = () => {
    setisAuthModel(true);
  };

  const handelCloseAuthModel = () => {
    setisAuthModel(false);
  };

  const handelOpenDeleteModel = (data, handler) => {
    console.log(data);
    console.log(handler);
    setid(data);
    setActionHandler(() => handler);
    setisDeleteModel(true);
  };

  const handelCloseDeleteModel = () => {
    setisDeleteModel(false);
  };

  const handelOpenCommentModel = () => {
    setisOpenCommentModel(true);
  };

  const handelCloseCommentModel = () => {
    setisOpenCommentModel(false);
  };

  const handelOpenUserDrawer = () => {
    setisUserDrawer(true);
  };
  const handelCloseUserDrawer = () => {
    setisUserDrawer(false);
  };

  const handelOpenSearchModel = () => {
    setsearchModel(true);
  };

  const handelCloseSearchModel = () => {
    setsearchModel(false);
  };

  return (
    <ModelsContext.Provider
      value={{
        isReportModel,
        setisReportModel,
        modelID,
        handelCloseModel,
        handelOpenModel,
        singleImgModel,
        setsingleImgModel,
        // Input Model Start
        handelOpenInputModel,
        handelcloseInputModal,
        modelInputData,
        editModelData,
        id,
        actionHandler,
        isOpenInputModel,
        modelHeading,
        // Input Model End
        // userImageModel start
        handelOpenUserImgModel,
        userImgModel,
        imgUrl,
        imgModelId,
        handelCloseUserImgModel,
        // userImage model End
        handelOpenAuthModel,
        handelCloseAuthModel,
        isAuthModel,
        // Delete Model
        isDeleteModel,
        setisDeleteModel,
        handelOpenDeleteModel,
        handelCloseDeleteModel,
        // Comment Model
        isOpenCommentModel,
        handelCloseCommentModel,
        handelOpenCommentModel,
        // User Drawer
        isUserDrawer,
        handelOpenUserDrawer,
        handelCloseUserDrawer,
        // search model
        searchModel,
        setsearchModel,
        handelOpenSearchModel,
        handelCloseSearchModel,
      }}
    >
      {" "}
      {children}{" "}
    </ModelsContext.Provider>
  );
}
