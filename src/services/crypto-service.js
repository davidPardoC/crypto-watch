import axios from 'axios';
import {urlApi} from '../env/server';
axios.defaults.baseURL = urlApi;
export const CryptoService = {
  async getCryptoList(page = 1) {
    const data = await axios.get(
      `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=${page}&sparkline=true`,
    );
    return data.data;
  },
};
