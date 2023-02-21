import AsyncStorage from '@react-native-async-storage/async-storage';

export const prsStoreSetItem = (key: string, value: any): void => {
  AsyncStorage.setItem(key, JSON.stringify(value));
};

export const prsStoreGetItem = (key: string): Promise<any> => {
  return AsyncStorage.getItem(key);
};

export const prsStoreRemoveItem = (key: string): void => {
  AsyncStorage.removeItem(key);
};
