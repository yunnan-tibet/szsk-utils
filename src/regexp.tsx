

/**
* 检测手机号
* @param v
*/
export function phone() {
  return /^(1[3-9][0-9])\d{8}$/
  //return /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
}
/**
* 检测邮箱
*/
export function mail() {
  return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
}
/**
* 检测长度
*/
export function length(max: number, min: number = 0) {
  return new RegExp(`^.{${min},${max}}$`);
}

// 检测是否图片格式
export const isPic = (k: string) => (k || '').search(/(gif|jpg|jpeg|png|GIF|JPG|PNG|JPEG|BMP|bmp)$/) !== -1;
// 检测是否video格式
export const isVideo = (k: string) => (k || '').search(/(mp4|m4v|avi|dat|mkv|flv|vob|mov|3gp|mpg|mpeg|mpe|rmvp|rm|wmv|asf|asx|MP4|M4V|AVI|DAT|MKV|FLV|VOB|MOV|3GP|MPG|MPEG|MPE|RMVP|RM|WMV|ASF|ASX)$/) !== -1;
