"use client";
import React, { useContext, useEffect, useState } from "react";
import { ImgModelContext } from "../app/_contextApi/ImgModelContextApi";

export default function useImageUpload() {
  const {
    previewImage,
    setPreviewImage,
    image,
    setImage,
    imageName,
    setImageName,
    imgData,
    setimgData,
  } = useContext(ImgModelContext);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const validateInputs = () => {
      if (
        imgData.title &&
        imgData.altText &&
        imgData.caption &&
        imgData.description &&
        previewImage
      ) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    };
    validateInputs();
  }, [imgData, previewImage]);

  // Upload Image
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setImageName(file.name);
      };
      reader.readAsDataURL(file);
      setImage(file);
    }
  };

  const removeImg = () => {
    setPreviewImage(null);
  };

  const handelChange = (e) => {
    setimgData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    console.log(imgData);
  };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("title", imgData.title);
    formData.append("altText", imgData.altText);
    formData.append("caption", imgData.caption);
    formData.append("description", imgData.description);
    if (image) {
      formData.append("blogThumblin", image);
    }
  };
  return {
    previewImage,
    image,
    imgData,
    handleImageUpload,
    removeImg,
    handelChange,
    handleSave,
    imageName,
    isValid,
  };
}
