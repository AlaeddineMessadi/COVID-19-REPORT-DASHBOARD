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

  static async readLatest(iso) {
    const { data } = await Axios.get(endpoint.getLatestUrl(), { params: { iso } }
    );
    return data;
  }

  static async readTimeseries(iso) {
    const { data } = await Axios.get(endpoint.getTimeseriesUrl(), { params: { iso } });
    return data;
  }
}

export default ApiManager;
