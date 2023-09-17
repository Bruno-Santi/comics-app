export const dateFormatter = (dates) => {
  const onSaleDate = `${dates[0].date}`;
  const dateParts = onSaleDate.split("T")[0].split("-");
  const formattedDate = `${dateParts[0]}/${dateParts[1]}/${dateParts[2]}`;

  return formattedDate;
};
