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
  confirmed: "#3298dc",
  confirmedLight: "rgba(52, 151, 220, 0.59)",
  deaths: "#d9534f",
  deathsLight: "rgba(217, 83, 79, 0.5)",
  recovered: "#5cb85c",
  recoveredLight: "rgba(92, 184, 92, 0.5)",
  fatalityRate: "#dee5ed",
  fatalityRateLight: "rgba(222, 229, 237, 0.5)",
}

export const ICONS = {
  confirmed: <span><i className="fas fa-hospital-alt is-size-3 is-pulled-right has-text-info"></i></span>,
  deaths: <span><i className="fas fa-biohazard is-size-3 is-pulled-right has-text-danger"></i></span>,
  recovered: <span><i className="fas fa-first-aid is-size-3 is-pulled-right has-text-success"></i></span>,
  percentage: <span><i className="fas fa-percent is-size-3 is-pulled-right has-text-gray"></i></span>
}