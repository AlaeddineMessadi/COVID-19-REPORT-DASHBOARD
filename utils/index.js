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
  const result = parseFloat(((deaths / confirmed) * 100).toFixed(2));

  if (typeof result === 'number' && !isNaN(result)) {
    return `${result} %`;
  }
  return '-';
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

export const camelize = str => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

export const returnLettersOnly = str => str.match(/[a-zA-Z]+/g).join(' ');


export const parseToDataCharts = source => {
  let result = []
  Object.keys(source).map(
    e => result.push({ name: e, ...source[e] })
  );
  return result;
}