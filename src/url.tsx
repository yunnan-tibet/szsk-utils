
interface IRequestParams {
  [key: string]: any;
}

/**
 * 根据qeury对象生成结构为?name=value&name1=value1
 * @param {Object} params 对象参数列表
 * @returns {string} 结构为?name=value&name1=value1
 */
export function genQuery(params?: IRequestParams) {
  if (!params) {
    return '';
  }
  let index = 0;
  let query = '';
  Object.keys(params).forEach((name) => {
    if (params[name] !== undefined && params[name] !== null) {
      query += index === 0 ? '?' : '&';
      const value = encodeURIComponent(params[name]);
      query += `${name}=${value}`;
      index += 1;
    }
  });
  return query;
}

/**
 * 获取url中的query项，不传url默认是拿window.location.search做处理
 * @param name query的key
 * @param url 处理的url
 * @returns {string} 获取到name对应的value
 */
export function getQueryString(name: string, url?: string) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const r = ((url || window.location.href).split('?')[1] || '').match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}

/**
 * 给url加后面的query
 * @param {string} _url 
 * @param {Object} params key -> value形式
 * @returns {string} 加入Object params之后的url
 */
export const addQueryParams = (_url: string, params: any) => {
  if (!params || !_url || !Object.keys(params).length) {
    return _url || '';
  }
  const [host, queryStr] = _url.split('?');
  return `${host}${genQuery(params)}&${queryStr}`;
};
