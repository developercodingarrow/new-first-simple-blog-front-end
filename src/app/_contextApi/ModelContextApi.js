"use client";
import { createContext, useEffect, useRef, useState } from "react";
export const ModelsContext = createContext();

export default function ModelContextProvider({ children }) {
  const [isReportModel, setisReportModel] = useState(false);
  const [modelID, setmodelID] = useState("");
  const [singleImgModel, setsingleImgModel] = useState(false);

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
      }}
    >
      {" "}
      {children}{" "}
    </ModelsContext.Provider>
  );
}
