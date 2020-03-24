import { API_BASE_URL } from "./constants";
import { number } from "yup";

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


export const fatalityRate = (deaths, confirmed) => {
  const result = parseFloat(((deaths / confirmed) * 100).toFixed(2))

  return typeof result === 'number' ? result : '-';
}

export const capitalizeFirstLetter = (s) => {
  if (typeof s !== 'string') return s;
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const addFatalityRate = data => {
  let mutatedData = data;
  mutatedData['Fatality Rate'] = fatalityRate(data.deaths, data.confirmed);
  return mutatedData;
}