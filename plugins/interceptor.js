export default function({$axios, store}) {
    // 监听请求
    $axios.onRequest(config => {
        if (store.state.user.token) {
            config.headers.Authorization = store.state.user.token
        }
        return config;
    })
}