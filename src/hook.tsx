import { useRef } from "react";

/**
 * 节流，hook下写法（因为作用域变更导致普通节流失效）
 * @param {Function} fn 
 * @param {number} delay 毫秒
 * @returns {Function} 
 */
export const useThrottle = (fn: Function, delay: number) => {
  const { current } = useRef<any>({});// 用于防止其他hook导致的重新渲染
  // @ts-ignore
  return (...args) => {
    if (!current.timer) {
      current.timer = setTimeout(() => {
        current.timer = null;
      }, delay);
      fn(...args);
    }
  }
}