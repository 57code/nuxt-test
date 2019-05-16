export default function({ $axios }) {
  // 利用$axios模块帮助方法setToken设置全局请求头
  // 此处省略token截取逻辑
  $axios.setToken(document.cookie, "Bearer");
}
