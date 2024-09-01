// GENERIC HANDLER FOR SEND ONLY DATA
export const genericDataHandler = (sendDataFunction) => {
  return async (data) => {
    try {
      const result = await sendDataFunction(data);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
};
