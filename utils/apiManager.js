import Axios from 'axios';
import { endpoint } from './constants';

class ApiManager {
  static async readBrief() {
    const { data } = await Axios.get(endpoint.getBriefUrl());
    return data;
  }

  static async readCountries() {
    const { data } = await Axios.get(endpoint.getCountriesUrl());
    return data;
  }

  static async readLatest() {
    const { data } = await Axios.get(endpoint.getLatestUrl());
    return data;
  }

  static async readTimeseries() {
    const { data } = await Axios.get(endpoint.getTimeseriesUrl());
    return data;
  }
}

export default ApiManager;
