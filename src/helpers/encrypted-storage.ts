import EncryptedStorage from 'react-native-encrypted-storage';

export const storeData = async (key: string, value: any) =>
  EncryptedStorage.setItem(key, JSON.stringify(value));

export const retrieveData = async <T>(key: string): Promise<T | undefined> => {
  const data = await EncryptedStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  }
};

export const removeData = async (key: string) =>
  EncryptedStorage.removeItem(key);

export const clearStorage = async () => EncryptedStorage.clear();
