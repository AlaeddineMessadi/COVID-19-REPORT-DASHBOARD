export const API_BASE_URL = 'https://covid-19-report-api.now.sh/api/v1/cases';
// export const API_BASE_URL = 'http://localhost:3001/api/v1/cases';

/**
 * Get API's URLs
 */
export const endpoint = {
  getBriefUrl: () => {
    return `${API_BASE_URL}/brief`;
  },

  getBrieTimeseriesUrl: () => {
    return `${API_BASE_URL}/brief/timeseries`;
  },

  getLatestUrl: () => {
    return `${API_BASE_URL}/latest`;
  },

  getCountriesUrl: () => {
    return `${API_BASE_URL}/countries`;
  },

  getTimeseriesUrl: () => {
    return `${API_BASE_URL}/timeseries`;
  },
}

export const help = {
  confirmed: 'Number of confirmed infected cases',
  deaths: 'Number of deaths cause by COVID-19',
  recovered: 'Number of recovered cases',
  fatalityRate: 'proportion of deaths compared to the total of confirmed'
}