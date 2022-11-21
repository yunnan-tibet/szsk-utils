/**
 * 空操作
 */
export const noop = () => { };

/**
 * 节流，hook方法写法在hook包里
 * @param fn 
 * @param delay 
 */
export const useThrottle = (fn: any, delay: number) => {
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

// 防抖函数
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