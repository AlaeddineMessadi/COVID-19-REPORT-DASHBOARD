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

export const HELP = {
  confirmed: 'Number of confirmed infected cases',
  deaths: 'Number of deaths cause by COVID-19',
  recovered: 'Number of recovered cases',
  fatalityRate: 'proportion of deaths compared to the total of confirmed'
}

export const COLORS = {
  confirmed: "#8884d8",
  deaths: "#d9534f",
  recovered: "#4bbf73",
  fatalityRate: "",
}

export const ICONS = {
  confirmed: <i className="fas fa-hospital-alt is-size-3 is-pulled-right has-text-info"></i>,
  deaths: <i className="fas fa-biohazard is-size-3 is-pulled-right has-text-danger"></i>,
  recovered: <i className="fas fa-first-aid is-size-3 is-pulled-right has-text-success"></i>,
  percentage: <i className="fas fa-percent is-size-3 is-pulled-right has-text-primary"></i>
}