"use client";
import { createContext, useEffect, useRef, useState } from "react";
export const ImgModelContext = createContext();

export default function ImgModelContextProvider({ children }) {
  const [previewImage, setPreviewImage] = useState(null);
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [imgData, setimgData] = useState({
    title: "",
    altText: "",
    caption: "",
    description: "",
  });
  return (
    <ImgModelContext.Provider
      value={{
        previewImage,
        setPreviewImage,
        image,
        setImage,
        imageName,
        setImageName,
        imgData,
        setimgData,
      }}
    >
      {children}
    </ImgModelContext.Provider>
  );
}
