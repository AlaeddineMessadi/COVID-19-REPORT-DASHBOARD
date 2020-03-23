export const convertISODate = isoDate => {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();

  if (dt < 10) { dt = '0' + dt; }
  if (month < 10) { month = '0' + month; }

  const result = `${year} - ${month} - ${dt} |  ${date.getUTCHours()}:${date.getUTCMinutes()}`;

  return result;
}