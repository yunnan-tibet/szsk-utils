import dayjs from "dayjs";
/**
 * 时间段，一个时间的开始，一个时间的结束，专门用于搜索filter
 * @param dates [any, any]
 * @returns {{startTime: number, endTime: number}} {startTime, endTime}返回了时间戳
 */
export const formatDatePicker = (dates: any[]) => {
  if (!dates) {
    return { startTime: null, endTime: null };
  }
  const startTime = dayjs(dates[0]).startOf('day').valueOf()
  const endTime = dayjs(dates[1]).endOf('day').valueOf()
  return { startTime, endTime }
}

interface IYMD {
  year: number;
  month: number;
  day: number;
}

/**
 * 用来获取时间的年月日
 * @param {number | string} timestamp 
 * @returns {{year, month, day}} 年月日返回
 */
export const getYMD: (timestamp: number | string) => IYMD = (timestamp) => {
  const date = new Date(timestamp);
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  }
};

/**
 * 设置该天的时分秒
 * @param {any} time
 * @param {string} dayTime 时间点 例：00:00:00
 */
export const toUTCTime = (time: any, dayTime: string) => {
  return JSON.parse(JSON.stringify(dayjs(`${dayjs(time).format('YYYY-MM-DD')} ${dayTime}`)));
};

/**
 * 给日期加天数，如2022-10-30 + 3 = 2022-11-2
 * @param {any} nowTime 日期
 * @param {number} days 要加的天数
 */
export const addDay = (nowTime: string, days: number) => {
  return dayjs(new Date(new Date(nowTime).getTime() + days * 24 * 60 * 60 * 1000 )).format('YYYY-MM-DD');
}