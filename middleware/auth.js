export default function(context) {
  console.log(context.app.store.getters["user/isLogin"]);
  if (process.server) {
    // 通过session判断
    if (!context.req.ctx.session.user) {
      console.log("用户未登录");

      // 重定向至登录页面
      context.redirect("/login");
    }
  } else {
    if (!context.app.store.getters["user/isLogin"]) {
      context.redirect("/login");
    }
  }
}
