export default function({ $axios, req }) {
  // 利用$axios模块帮助方法setToken设置全局请求头
  // 此处省略token截取逻辑
  console.log('axios plugin');
  
  if (process.server) {
    console.log(req.ctx.cookies.get('token'));
    
    $axios.setToken(req.ctx.cookies.get('token'), "Bearer");
  } else {
    console.log(document.cookie);
    
    $axios.setToken(document.cookie, "Bearer");
  }
}
