// This GENERIC HANDLER FOR Update SINGLE IMAGE BY ID
export const genericSingleImageHandler = (uploadFunction) => {
  return async (selectedFile, formData, imageFor, id = null) => {
    // console.log(selectedFile, formData, imageFor, id);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append(imageFor, selectedFile);
      // Append additional fields from formData
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });
      const result = await uploadFunction(formDataToSend, id);
      console.log("genrichandler-----", result);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
};

export const genericSingleImageWithOtherData = (handler) => {
  return async (
    selectedFile,
    formData,
    imageFor,
    additionalData = {},
    id = null
  ) => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append(imageFor, selectedFile);

      // Append additional fields from formData
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      // Append additional fields from additionalData
      Object.keys(additionalData).forEach((key) => {
        formDataToSend.append(key, additionalData[key]);
      });

      const result = await handler(formDataToSend, id);
      console.log("genericImageWithMetadataHandler-----", result);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
};
