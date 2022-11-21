/**
 * 设置cookie
 * @param key
 * @param val
 * @param time
 */
export function setCookie(key: string, val: string, time?: number) {
  const date = new Date();
  const expiresDays = time || 1;
  date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000);
  document.cookie = `${key}=${val};expires=${(date as any).toGMTString()}`;
}

/**
 * 获取cookie的value
 * @param key cookie key
 */
export function getCookie(key: string) {
  let arr,reg=new RegExp("(^| )"+key+"=([^;]*)(;|$)"); 
  return (arr=document.cookie.match(reg)) ? unescape(arr[2]) : null;
}

/**
 * 删除cookie
 * @param key cookie key
 */
export function delCookie(key: string) { 
    const exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    const cval=getCookie(key); 
    if(cval != null) 
    document.cookie= key + "="+cval+";expires="+(exp as any).toGMTString(); 
}