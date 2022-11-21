/**
 * 返回给定小数位数的数字字符串
 *
 * @param v 要转换的数字/数字字符串
 * @param n 小数点后几位
 * 注：
 *  这里使用的是四舍五入
 */
export const toFixedN =  (v: string|number, n: number = 2) => {
  if (typeof v === 'object') { return ''; }; // 去除null，object，function， array等
  if (isNaN(+v)) { return ''; } // 去除异常的数字字符串
  return (Math.round(+v * Math.pow(10, n)) / Math.pow(10, n)).toFixed(n) + '';
};

/**
 * 大数字增加逗号分隔，使用英文逗号,,,,
 * @param num 待转换数字/数字字符串
 * @param n 保留位数
 */
export const addNumComma = (num: string | number, n?: number) => {
    const originNum = +num;
    if (Number.isNaN(originNum) || originNum === 0) {
      return 0;
    }
    const numL = `${toFixedN(+num, n)}`.split('.');
    // 整数部分
    const integer = numL[0].split('').reverse().join('');
    // 小数部分
    const decimal = numL[1];
    let newInteger = '';
    const len = integer.length;
    for (let i = 0; i < len; i++) {
      if (i % 3 === 0 && i !== 0) {
        newInteger += `,${integer[i]}`;
      } else {
        newInteger += integer[i];
      }
    }
    return `${newInteger.split('').reverse().join('')}${decimal ? '.' + decimal : ''}`;
  };

/**
 *
 * 四舍五入保留2位小数（不够位数，则用0替补）
 *
 */
export function keepTwoDecimalFull(num: any) {
  let result = parseFloat(num);
  if (isNaN(result)) {
    return false;
  }
  result = Math.round(num * 100) / 100;
  let sx = result.toString();
  let posDecimal = sx.indexOf('.');
  if (posDecimal < 0) {
    posDecimal = sx.length;
    sx += '.';
  }
  while (sx.length <= posDecimal + 2) {
    sx += '0';
  }
  return sx;
}

/**
 * 用来计算数值
 */
export const CMX = {
  /**
   ** 加
   **/
  add: function (arg1: number, arg2: number) {
      var r1, r2, m, c;
      try {
          r1 = arg1.toString().split(".")[1].length;
      } catch (e) {
          r1 = 0;
      }
      try {
          r2 = arg2.toString().split(".")[1].length;
      } catch (e) {
          r2 = 0;
      }
      c = Math.abs(r1 - r2);
      m = Math.pow(10, Math.max(r1, r2));
      if (c > 0) {
          var cm = Math.pow(10, c);
          if (r1 > r2) {
              arg1 = Number(arg1.toString().replace(".", ""));
              arg2 = Number(arg2.toString().replace(".", "")) * cm;
          } else {
              arg1 = Number(arg1.toString().replace(".", "")) * cm;
              arg2 = Number(arg2.toString().replace(".", ""));
          }
      } else {
          arg1 = Number(arg1.toString().replace(".", ""));
          arg2 = Number(arg2.toString().replace(".", ""));
      }
      return (arg1 + arg2) / m;
  },
  /**
   ** 减
   **/
  sub: function (arg1: number, arg2: number) {
      var r1, r2, m, n;
      try {
          r1 = arg1.toString().split(".")[1].length;
      } catch (e) {
          r1 = 0;
      }
      try {
          r2 = arg2.toString().split(".")[1].length;
      } catch (e) {
          r2 = 0;
      }
      m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
      n = r1 >= r2 ? r1 : r2;
      return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
  },

  /**
   ** 乘
   **/
  mul: function (arg1: number, arg2: number) {
      var m = 0,
          s1 = arg1.toString(),
          s2 = arg2.toString();
      try {
          m += s1.split(".")[1].length;
      } catch (e) { }
      try {
          m += s2.split(".")[1].length;
      } catch (e) { }
      return (
          (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
          Math.pow(10, m)
      );
  },

  /**
   ** 除
   **/
  div: function (arg1: number, arg2: number) {
      var t1 = 0,
          t2 = 0,
          r1,
          r2;
      try {
          t1 = arg1.toString().split(".")[1].length;
      } catch (e) { }
      try {
          t2 = arg2.toString().split(".")[1].length;
      } catch (e) { }
      r1 = Number(arg1.toString().replace(".", ""));
      r2 = Number(arg2.toString().replace(".", ""));
      return (r1 / r2) * Math.pow(10, t2 - t1);
  }
}

