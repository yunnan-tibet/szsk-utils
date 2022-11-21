/**
 * 监听条码扫描抢
 */

let timer: any = null;
let code = '';
export function onListenBarCodeScnner(key: string, callback: (code: string) => void) {
  code += key;
  clearTimeout(timer);
  timer = setTimeout(() => {
    if (code.length > 1) {
      callback(code);
    }
    code = '';
    clearTimeout(timer);
  }, 40);
}