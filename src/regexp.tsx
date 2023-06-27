// 检测手机号
export const phone = /^(1[3-9][0-9])\d{8}$/;
// 第二代身份证
export const idCard = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9X]$/;
// 车牌号
export const car = /(^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$)/;
// 网址
export const website = /^((ht|f)tps?):\/\/[\w-]+(\.[\w-]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?$/
// e - mail邮箱
export const email =  /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
// ip
export const ip = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
// 端口
export const port = /^[0-9]{1,5}$/;
// 域名
export const domain = /^(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
// 电话
export const telephone = /(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/;
// 图片格式
export const picture = /(gif|jpg|jpeg|png|GIF|JPG|PNG|JPEG|BMP|bmp)$/;
// 视频格式
export const video = /(mp4|m4v|avi|dat|mkv|flv|vob|mov|3gp|mpg|mpeg|mpe|rmvp|rm|wmv|asf|asx|MP4|M4V|AVI|DAT|MKV|FLV|VOB|MOV|3GP|MPG|MPEG|MPE|RMVP|RM|WMV|ASF|ASX)$/;
/**
* 返回检测长度的regexp
*/
export function length(max: number, min: number = 0) {
  return new RegExp(`^.{${min},${max}}$`);
}

// 检测是否图片格式
export const isPic = (k: string) => (k || '').search(/(gif|jpg|jpeg|png|GIF|JPG|PNG|JPEG|BMP|bmp)$/) !== -1;
// 检测是否video格式
export const isVideo = (k: string) => (k || '').search(/(mp4|m4v|avi|dat|mkv|flv|vob|mov|3gp|mpg|mpeg|mpe|rmvp|rm|wmv|asf|asx|MP4|M4V|AVI|DAT|MKV|FLV|VOB|MOV|3GP|MPG|MPEG|MPE|RMVP|RM|WMV|ASF|ASX)$/) !== -1;
