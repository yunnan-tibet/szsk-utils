/**
 * 两个基本数据类型的数组去重，基本是数字或者字符串
 * @param {Array<string | number>} arr1 
 * @param {Array<string | number>} arr2
 * @returns {Array<string | number>} 去重后的基本数据类型数组
 */
export const getArrDiff = (arr1: any[], arr2: any[]) => arr1.concat(arr2).filter((v, i, arr) => arr.indexOf(v) === arr.lastIndexOf(v))

/**
 * 两个对象类型数组去重
 * @param {any[]} arr1 
 * @param {any[]} arr2 
 * @param {string} key 使用什么属性进行去重
 * @returns {any[]} 去重后的对象类型数组
 */
export const arrDeDuplication = (arr1: any[], arr2: any[], key?: string) => {
  const _key = key || 'id';
  if (!arr1 || !arr1.length) {
    return arr2;
  }
  if (!arr2 || !arr2.length) {
    return arr1;
  }
  let _arr = [...arr1];
  arr2.forEach((item2) => {
    if (!arr1.filter(item1 => item1[_key] === item2[_key]).length) {
      _arr.push(item2);
    }
  });
  return _arr;
}

/**
 * 交换数组元素位置
 * @param {any[]} arr
 * @param {number} index1
 * @param {number} index2
 * @returns {any[]} 交换后的数组
 */
export function swapItems(arr: any[], index1: number, index2: number) {
  arr[index1] = arr.splice(index2, 1, arr[index1])[0];
  return arr;
}

/**
 * 数组上移某个idx
 * @param {any[]} arr
 * @param {number} index
 * @returns {any[]} 上移后的数组
 */
export function arrUpRecord(arr: any[], index: number) {
  if (!index) {
    return arr;
  }
  return swapItems(arr, index, index - 1);
}

/**
 * 数组下移某个idx
 * @param {any[]} arr
 * @param {number} index
 * @returns {any[]} 下移后的数组
 */
export function arrDownRecord(arr: any[], index: number) {
  if (index >= arr.length - 1) {
    return arr;
  }
  return swapItems(arr, index, index + 1);
}