import axios from 'axios';
import Config from 'react-native-config';

import { getToken } from 'src/utils';

const provider = axios.create({
  baseURL: Config.API_URL
});

provider.interceptors.request.use(async ({ headers, ...config }) => {
  const token = await getToken();

  return {
    ...config,
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ''
    }
  };
});

provider.interceptors.response.use(
  response => response?.data,
  err => Promise.reject(err?.response?.data)
);

export default provider;
