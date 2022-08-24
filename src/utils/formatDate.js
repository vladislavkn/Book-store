export const formatDate = (date) => {
  if (!date) return "-";
  return new Date(date)?.toLocaleDateString("ru-ru");
};

export const formatDateForInput = (date) => {
  if (!date) date = new Date();
  return new Date(date)?.toISOString().split("T")[0].replaceAll(".", "-");
};
