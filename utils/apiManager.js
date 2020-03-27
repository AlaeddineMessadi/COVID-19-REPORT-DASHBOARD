import Axios from 'axios';
import { endpoint } from './constants';
import { returnLettersOnly } from '.';

class ApiManager {
  static async readBrief() {
    const { data } = await Axios.get(endpoint.getBriefUrl());
    return data;
  }

  static async readBriefTimeseries() {
    const { data } = await Axios.get(endpoint.getBrieTimeseriesUrl());
    return data;
  }

  static async readCountries() {
    const { data } = await Axios.get(endpoint.getCountriesUrl());
    return data;
  }

  static async readLatest(iso, province, onlyCountries) {
    const { data } = await Axios.get(endpoint.getLatestUrl(), { params: { iso, province, onlyCountries } }
    );
    return data;
  }

  static async readTimeseries(iso, province) {
    const { data } = await Axios.get(endpoint.getTimeseriesUrl(), { params: { iso, province } });
    return data;
  }
}

export default ApiManager;


export const getIsoCode = async name => {
  const response = await Axios.get(
    `https://restcountries.eu/rest/v2/name/${returnLettersOnly(name)}?fullText=true`
  );

  return response.alpha2Code;
}