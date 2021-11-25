class StringUtils {

  // 对Date的扩展，将 Date 转化为指定格式的String
  // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
  // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
  // 例子：
  // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
  // (new Date()).Format("yyyy-M-d h:m:s.S")   ==> 2006-7-2 8:9:4.18
  // static format(date,fmt){
  //   const d = new Date(date);
  //   var o = {
  //     "M+": d.getMonth() + 1, //月份
  //     "d+": d.getDate(), //日
  //     "h+": d.getHours(), //小时
  //     "m+": d.getMinutes(), //分
  //     "s+": d.getSeconds(), //秒
  //     "q+": Math.floor((d.getMonth() + 3) / 3),
  //     "S": d.getMilliseconds() //毫秒
  //   };
  //   if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
  //   for (var k in o)
  //     if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  //   return fmt;
  // }

  static ms2hhmmss(ms){
    let h = Math.floor(ms / 1000 / 60 / 60);
    let m = Math.floor(ms / 1000 / 60 - h * 60);
    let s = Math.floor(ms / 1000 - h * 60 * 60 - m * 60);
    if (h < 10) h = `0${h}`;
    if (m < 10) m = `0${m}`;
    if (s < 10) s = `0${s}`;
    return `${h}:${m}:${s}`;
  }
}


export default StringUtils;