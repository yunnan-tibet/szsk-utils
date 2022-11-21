/**
 * 基本类型数组去重
 * @param arr1 
 * @param arr2 
 */
export const getArrDiff = (arr1: any[], arr2: any[]) => arr1.concat(arr2).filter((v, i, arr) => arr.indexOf(v) === arr.lastIndexOf(v))

/**
 * 数组对象去重
 * @param arr1 
 * @param arr2 
 */
export const arrDeDuplication = (arr1: any[], arr2: any[]) => {
  if (!arr1 || !arr1.length) {
    return arr2;
  }
  if (!arr2 || !arr2.length) {
    return arr1;
  }
  let _arr = [...arr1];
  arr2.forEach((item2) => {
    if (!arr1.filter(item1 => item1.id === item2.id).length) {
      _arr.push(item2);
    }
  });
  return _arr;
}

/**
 *
 * @export 交换数组元素
 * @param {any[]} arr
 * @param {number} index1
 * @param {number} index2
 * @returns
 */
export function swapItems(arr: any[], index1: number, index2: number) {
  arr[index1] = arr.splice(index2, 1, arr[index1])[0];
  return arr;
}

/**
 *
 * @export 上移
 * @param {any[]} arr
 * @param {number} index
 * @returns
 */
export function arrUpRecord(arr: any[], index: number) {
  if (!index) {
    return;
  }
  swapItems(arr, index, index - 1);
}

/**
 *
 *
 * @export 下移
 * @param {any[]} arr
 * @param {number} index
 * @returns
 */
export function arrDownRecord(arr: any[], index: number) {
  if (index >= arr.length - 1) {
    return;
  }
  swapItems(arr, index, index + 1);
}