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

const help = {
  confirmed: 'Number of confirmed infected cases',
  deaths: 'Number of deaths cause by COVID-19',
  recovered: 'Number of recovered cases',
  fatalityRate: '(CFR) proportion of deaths compared to the total number of people diagnosed with the disease'
}