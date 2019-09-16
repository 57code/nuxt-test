// 将接口暴露给上下文
export default function({$axios}, inject) {
    inject('login', user => {
        return $axios.$post('/api/login', user);
    })
}