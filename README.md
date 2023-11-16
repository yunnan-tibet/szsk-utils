# szsk前端公共函数库
    + 各种类型下的工具方法，目前最常用是对树形结构的方法（若只考虑树形方法，可使用@szsk/tree-utils减少包体积）

## 使用范围
通用

## 已有工具类型
### tree
[树形方法文档](https://www.npmjs.com/package/@szsk/tree-utils?activeTab=readme)

### arr
```
/**
 * 两个基本数据类型的数组去重，基本是数字或者字符串
 * @param {Array<string | number>} arr1 
 * @param {Array<string | number>} arr2
 * @returns {Array<string | number>} 去重后的基本数据类型数组
 */
export const getArrDiff = (arr1: any[], arr2: any[])

/**
 * 两个对象类型数组去重
 * @param {any[]} arr1 
 * @param {any[]} arr2 
 * @param {string} key 使用什么属性进行去重
 * @returns {any[]} 去重后的对象类型数组
 */
export const arrDeDuplication = (arr1: any[], arr2: any[], key?: string)

/**
 * 交换数组元素位置
 * @param {any[]} arr
 * @param {number} index1
 * @param {number} index2
 * @returns {any[]} 交换后的数组
 */
export function swapItems(arr: any[], index1: number, index2: number)

/**
 * 数组上移某个idx
 * @param {any[]} arr
 * @param {number} index
 * @returns {any[]} 上移后的数组
 */
export function arrUpRecord(arr: any[], index: number)

/**
 * 数组下移某个idx
 * @param {any[]} arr
 * @param {number} index
 * @returns {any[]} 下移后的数组
 */
export function arrDownRecord(arr: any[], index: number)
```
### cookie
```
/**
 * 设置cookie
 * @param {string} key key
 * @param {string} val key对应的value
 * @param {number} time 这里单位是天
 * @returns {void}
 */
export function setCookie(key: string, val: string, time?: number)

/**
 * 获取cookie的value
 * @param {string} key cookie key
 * @returns {string}
 */
export function getCookie(key: string)

/**
 * 删除cookie
 * @param {string} key cookie key
 * @returns {void}
 */
export function delCookie(key: string)
```
### url
```
/**
 * 根据qeury对象生成结构为?name=value&name1=value1
 * @param {Object} params 对象参数列表
 * @returns {string} 结构为?name=value&name1=value1
 */
export function genQuery(params?: IRequestParams)

/**
 * 获取url中的query项，不传url默认是拿window.location.search做处理
 * @param name query的key
 * @param url 处理的url
 * @returns {string} 获取到name对应的value
 */
export function getQueryString(name: string, url?: string)

/**
 * 给url加后面的query
 * @param {string} _url 
 * @param {Object} params key -> value形式
 * @returns {string} 加入Object params之后的url
 */
export const addQueryParams = (_url: string, params: any)
```
### number
```
/**
 * 返回给定小数位数的数字字符串
 * 注：
 *  这里使用的是四舍五入
 * @param {string | number} v 要转换的数字/数字字符串
 * @param {number} n 小数点后几位
 * @returns {string}
 */
export const toFixedN =  (v: string|number, n: number = 2)

/**
 * 大数字增加逗号分隔，使用英文逗号,,,,
 * @param {string | number} num 待转换数字/数字字符串
 * @param {number} n 保留位数
 * @returns {string}
 */
export const addNumComma = (num: string | number, n?: number)

/**
 * 四舍五入保留2位小数（不够位数，则用0替补）
 * @param {number} num 
 * @returns {string}
 */
export function keepTwoDecimalFull(num: any)

/**
 * 用来计算数值，基本原理是取得小数位数，进行power提升为整数计算。
 */
export const CMX = {
  /**
   ** 加
   **/
  add: function (arg1: number, arg2: number)
    /**
   ** 减
   **/
  sub: function (arg1: number, arg2: number)
    /**
   ** 乘
   **/
  mul: function (arg1: number, arg2: number)
    /**
   ** 除
   **/
  div: function (arg1: number, arg2: number)
```
### func
```
/**
 * 节流函数，一个时间段只执行一次
 * @param {Function} fn 
 * @param {number} delay 毫秒
 * @param {boolean} atLast 限流阶段最后执行
 * @returns {Function} 返回的节流函数
 */
export const useThrottle = (fn: Function, delay: number, atLast?: boolean)

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
)
```

### obj
```
/**
 * 对象中的值trim操作，对象引用操作
 * @param data 
 * @returns {void}
 */
export const trimAll: (data?: { [key: string]: any })

/**
 * 去掉对象中的空值，对象引用操作
 * @param data 现在的数据
 * @returns {void}
 */
export const removeNull: (data: { [key: string]: any })

/**
 * 深拷贝
 * @param {any} obj
 * @returns {any} 深拷贝的对象
 */
export const deepClone = (obj: any)
```
### regexp
```
export const phone // 检测手机号
export const idCard // 第二代身份证
export const car // 车牌号
export const website // 网址
export const email // e - mail邮箱
export const ip // ip
export const port // 端口
export const domain // 域名
export const telephone // 电话
export const picture // 图片格式
export const video // 视频格式
/**
* 返回检测长度的regexp
*/
export function length(max: number, min: number = 0)

// 检测是否图片格式
export const isPic = (k: string)
// 检测是否video格式
export const isVideo = (k: string)
```
### time
```
/**
 * 时间段，一个时间的开始，一个时间的结束，专门用于搜索filter
 * @param dates [any, any]
 * @returns {{startTime: number, endTime: number}} {startTime, endTime}返回了时间戳
 */
export const formatDatePicker = (dates: any[])

/**
 * 用来获取时间的年月日
 * @param {number | string} timestamp 
 * @returns {{year, month, day}} 年月日返回
 */
export const getYMD: (timestamp: number | string)

/**
 * 设置该天的时分秒
 * @param {any} time
 * @param {string} dayTime 时间点 例：00:00:00
 * @returns {UTCTime} 返回utctime，但是现在感觉不是很适合
 */
export const toUTCTime = (time: any, dayTime: string)

/**
 * 给日期加天数，如2022-10-30 + 3 = 2022-11-2
 * @param {any} nowTime 日期
 * @param {number} days 要加的天数
 * @returns {string} 2022-11-2的形式
 */
export const addDay = (nowTime: string, days: number)

/**
 * 获取范围内的日期列表
 * @param startTime 开始时间
 * @param endTime 结束时间
 * @param format 格式，默认为YYYY-MM-DD
 * @returns {string[]} 
 */
export const getDatesInRange = (
  startTime: any,
  endTime: any,
  format?: string,
)
```
