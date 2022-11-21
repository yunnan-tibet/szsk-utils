/**
 * 对象中的值trim操作
 * @param data 
 */
export const trimAll: (data?: { [key: string]: any }) => void = (data) => {
  if (!data) {
    return;
  }
  Object.keys(data).forEach(k => {
    if (typeof data[k] === 'string') {
      data[k] = data[k].trim();
    }
  })
}

/**
 * 去掉对象中的空值，对象直接操作，请勿赋值
 * @param data 现在的数据
 * @returns 去空之后的对象
 */
export const removeNull: (data: { [key: string]: any }) => void = (data) => {
  trimAll(data);
  Object.keys(data).forEach(k => {
    if (data[k] === undefined
      || data[k] === null
      || data[k] === ''
      || (Array.isArray(data[k]) && data[k].length === 0)) {
      delete data[k];
    }
  })
}

// 这是个深拷贝的方法
export const deepClone = (obj: any) => {
  if (obj === null) return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (typeof obj !== 'object') return obj;
  const cloneObj = new obj.constructor();
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone(obj[key]);
    }
  }
  return cloneObj;
};