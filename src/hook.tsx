import { useRef } from "react";

/**
 * 节流，hook写法
 * @param fn 
 * @param delay 
 */
export const useThrottle = (fn: any, delay: number) => {
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