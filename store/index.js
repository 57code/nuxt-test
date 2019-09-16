export const actions = {
    // 参数1是action上下文
    // 参数2是nuxt上下文
    nuxtServerInit({commit}, {app}) {
        const token = app.$cookies.get('token')
        // 填充store中user模块
        if (token) {
            commit('user/init', token);
        }
    }
}