export const API_BASE_URL = 'https://covid-19-report-api.now.sh/api/v1/cases';
// export const API_BASE_URL = 'http://localhost:3001/api/v1/cases';

/**
 * Get API's URLs
 */
export const endpoint = {
  getBriefUrl: () => {
    return `${API_BASE_URL}/brief`;
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