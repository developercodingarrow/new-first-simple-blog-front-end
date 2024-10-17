// This GENERIC HANDLER FOR Update SINGLE IMAGE BY ID
export const genericSingleImageHandler = (uploadFunction) => {
  return async (selectedFile, formData, imageFor, id = null) => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append(imageFor, selectedFile);
      // Append additional fields from formData
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });
      const result = await uploadFunction(formDataToSend, id);

      return result;
    } catch (error) {}
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

      return result;
    } catch (error) {}
  };
};

// This GENERIC HANDLER FOR Update SINGLE IMAGE BY ID
export const genericImageUplodHandler = (uploadFunction) => {
  return async (selectedFile, imageFor, id = null) => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append(imageFor, selectedFile);

      // Add the id to the FormData
      if (id) {
        formDataToSend.append("id", id);
      }

      const result = await uploadFunction(formDataToSend);

      return result;
    } catch (error) {}
  };
};
