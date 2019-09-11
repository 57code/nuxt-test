<template>
  <div>
    <h2>商品列表</h2>
    <ul>
      <li v-for="good in goods" :key="good.id">
        <nuxt-link :to="`/detail/${good.id}`">
          <span>{{good.text}}</span>
          <span>￥{{good.price}}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import axios from 'axios'
export default {
  head() {
    return {
      title: '商品列表',
      meta: [
        {name:'description', hid: 'description', content: 'vue ssr'}
      ]
    }
  },
  async asyncData({$axios, error}) {
    // 时间点及早，组件还不存在，this没有
    const {ok, goods} = await $axios.$get('/api/goods')
    if (ok) {
      // 返回内容会和data合并
      return {goods}
    }
    error({statusCode:400, message: '数据查询失败'})
  },
  components: {
    Logo
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
