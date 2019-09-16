// 中间件是一个函数
// 参数是上下文
export default function({store, redirect, route}) {
    // 判断是否已登录
    // 通过store判断是可行的
    if (!store.state.user.token) {
        redirect('/login?redirect=' + route.path)
    }
}