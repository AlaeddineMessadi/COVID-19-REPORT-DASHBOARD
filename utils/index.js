import { API_BASE_URL } from "./constants";

export const convertISODate = isoDate => {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();

  if (dt < 10) { dt = '0' + dt; }
  if (month < 10) { month = '0' + month; }

  const result = `${dt} - ${month} - ${year}  |  ${date.getUTCHours()}:${date.getUTCMinutes()}`;

  return result;
}

export const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
