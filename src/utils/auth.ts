import { ASYNC_STORAGE_TOKEN } from 'src/constants';
import { storeData, retrieveData, removeData } from 'src/helpers';

export const getToken = <T>(): Promise<T | undefined> =>
  retrieveData(ASYNC_STORAGE_TOKEN);

export const setToken = (token: string): Promise<void> =>
  storeData(ASYNC_STORAGE_TOKEN, token);

export const clearToken = (): Promise<void> => removeData(ASYNC_STORAGE_TOKEN);
