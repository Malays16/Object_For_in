import { orderByProps } from '../app';

describe('orderByProps', () => {
  test('should sort the object keys and return an array of objects with key-value pairs', () => {
    const obj = { b: 2, a: 1, c: 3 };
    const preventKeysArr = ['a'];
    const expected = [{ key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 }];
    expect(orderByProps(obj, preventKeysArr)).toEqual(expected);
  });

  test('should return an empty array if the object is empty', () => {
    const obj = {};
    const preventKeysArr = [];
    const expected = [];
    expect(orderByProps(obj, preventKeysArr)).toEqual(expected);
  });

  test('should return an array with only the preventKeysArr keys if they are the only keys in the object', () => {
    const obj = { a: 1, b: 2 };
    const preventKeysArr = ['a', 'b'];
    const expected = [{ key: 'a', value: 1 }, { key: 'b', value: 2 }];
    expect(orderByProps(obj, preventKeysArr)).toEqual(expected);
  });
});