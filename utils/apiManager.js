import RestClient from './RestClient';
import UrlList from './UrlList';
import { endpoint } from '.';

class ApiManager {
  async readBrief() {
    return await axios.get(endpoint.getBriefUrl())
  }

  async readLatest() {
    return await axios.get(endpoint.getLatestUrl())
  }

  async readTimeseries() {
    return await axios.get(endpoint.getTimeseriesUrl())
  }
}

export default ApiManager;
