/**
 * 空操作
 */
export const noop = () => {};

/**
 * 普通节流函数，一个时间段只执行一次
 * @param {Function} fn 
 * @param {number} delay 毫秒
 * @returns {Function} 返回的节流函数
 */
export const useThrottle = (fn: Function, delay: number) => {
  let timer: any = null;
  // @ts-ignore
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
      }, delay);
      fn(...args);
    }
  }
}

/**
 * 防抖函数，一定时间间隔后执行一次
 * @param {Function} func 
 * @param {number} wait 毫秒
 * @param {boolean} immediate 是否立即执行，true 立即 false 等待wait时间后执行
 * @returns {Function} 防抖作用后函数
 */
export const debounce = (
  func: Function,
  wait: number,
  immediate: boolean = false
) => {
  let timeout: any;
  let result: any;

  return function (...args: any) {
    // @ts-ignore
    const context = this;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      // 如果已经执行过，不再执行
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) result = func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
    return result;
  };
};