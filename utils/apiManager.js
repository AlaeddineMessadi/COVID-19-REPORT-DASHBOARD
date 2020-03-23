import { endpoint } from '.';
import Axios from 'axios';

class ApiManager {
  static async readBrief() {
    return await Axios.get(endpoint.getBriefUrl())
  }

  static async readLatest() {
    return await Axios.get(endpoint.getLatestUrl())
  }

  static async readTimeseries() {
    return await Axios.get(endpoint.getTimeseriesUrl())
  }
}

export default ApiManager;
