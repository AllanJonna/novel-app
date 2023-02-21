import 'react-native';
import {prsStoreGetItem, prsStoreRemoveItem, prsStoreSetItem} from '.';

jest.mock('@react-native-async-storage/async-storage', () => {
  return {
    setItem: (key: string, value: any): void => {
      key;
      value;
    },
    getItem: (key: string): Promise<any> => {
      key;
      return Promise.resolve('somevalue');
    },
    removeItem: (key: string): void => {
      key;
    },
  };
});

it('prsStoreSetItem works well', () => {
  prsStoreSetItem('someKey', 'someValue');
});

it('fcStoreGetItem works well', () => {
  expect(prsStoreGetItem('key')).resolves.toBe('somevalue');
});

it('prsStoreRemoveItem works well', () => {
  prsStoreRemoveItem('key');
});
