import moment from 'moment';

/**
 * 时间范围从开始时间的0点到结束时间的24点
 * @param dates [Moment, Moment]
 * @returns obj {startTime, endTime}
 */
export const formatDatePicker = (dates: string) => {
  if (!dates) {
    return { startTime: null, endTime: null };
  }
  const startTime = moment(dates[0]).startOf('day').valueOf()
  const endTime = moment(dates[1]).endOf('day').valueOf()
  return { startTime, endTime }
}

interface IYMD {
  year: number;
  month: number;
  day: number;
}

/**
 * 用来获取时间的年月日
 * @param timestamp 
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
 * 设置该天时间
 * @param dayTime 时间点 例：00:00:00
 */
export const toUTCTime = (time: any, dayTime: string) => {
  return JSON.parse(JSON.stringify(moment(`${moment(time).format('YYYY-MM-DD')} ${dayTime}`)));
};

/**
 * 给日期加天数2022-10-30 + 3 = 2022-11-2
 * @param nowTime 日期
 * @param days 要加的天数
 */
export const addDay = (nowTime: string, days: number) => {
  return moment(new Date(new Date(nowTime).getTime() + days * 24 * 60 * 60 * 1000 )).format('YYYY-MM-DD');
}