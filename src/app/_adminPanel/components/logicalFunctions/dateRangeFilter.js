export const filterByDateRange = (data, startDate, endDate) => {
  console.log(data);
  console.log(startDate);
  console.log(endDate);
  const start = new Date(startDate);
  const end = new Date(endDate);
  console.log("start", start);
  console.log("End", end);
  const filteredData = data.filter((item) => {
    const itemDate = new Date(item.updatedAt);

    return itemDate >= start && itemDate <= end;
  });
  return filteredData;
};
