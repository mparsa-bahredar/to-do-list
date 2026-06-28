import moment from "jalali-moment";

export const FormatDate = (date: string | number | undefined, lng: "fa" | "en") => {
  if (!date) return "-";
  const jsDate = new Date(date);
  if (isNaN(jsDate.getTime())) return "-";
  
  if (lng === "fa") {
    let result = moment(jsDate).locale("fa").format("jYYYY/jMM/jDD");
    result = result.replaceAll("0", "۰");
    result = result.replaceAll("1", "۱");
    result = result.replaceAll("2", "۲");
    result = result.replaceAll("3", "۳");
    result = result.replaceAll("4", "۴");
    result = result.replaceAll("5", "۵");
    result = result.replaceAll("6", "۶");
    result = result.replaceAll("7", "۷");
    result = result.replaceAll("8", "۸");
    result = result.replaceAll("9", "۹");
    return result;
  } else {
    return moment(jsDate).locale("en").format("YYYY/MM/DD");
  }
};