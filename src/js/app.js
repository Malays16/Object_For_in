// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

export function orderByProps(object, preventKeysArr) {
  const filterObj = Object.fromEntries(Object.entries(object).filter(([key]) => !preventKeysArr.includes(key)));

  const sortedArr = [];
  preventKeysArr.forEach(item => {
    sortedArr.push({key: item, value: object[item]});
  });

  const keys = Object.keys(filterObj);
  keys.sort();

  for (let i = 0; i < keys.length; i++) {
    sortedArr.push({key: keys[i], value: filterObj[keys[i]]});
  }

  return sortedArr;
}

orderByProps(obj, ["name", "level"]);