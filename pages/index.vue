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
export default {
  head() {
    return {
      title: "课程列表",
      meta: [
        { name: "description", hid: "description", content: "set page meta" }
      ],
      link: [{ rel: "favicon", href: "favicon.ico" }]
    };
  },
  async asyncData({ $axios, error }) {
    // 页面上下文
    const { ok, goods } = await $axios.$get("/api/goods");
    if (ok) {
      return { goods };
    }
    // 错误处理
    error({ statusCode: 400, message: "数据查询失败" });
  }
  // data() {
  //   return { goods: [
  //     {id:1, text:'Web全栈架构师',price:8999},
  //     {id:2, text:'Python全栈架构师',price:8999},
  //   ] }
  // }
};
</script>