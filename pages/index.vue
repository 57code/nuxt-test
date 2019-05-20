<template>
  <div>
    <h1>
      商品列表
    </h1>

    <ul>
      <li v-for="good in goods" :key="good.id">
        <span>{{good.text}}</span>
        <span>￥{{good.price}}</span>
        <button @click="addCart(good)">加购物车</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  async asyncData({ $axios, error }) {
    const data = await $axios.$get(`/api/goods`);
    if (data.ok) {
      return { goods: data.goods };
    }
    error({ statusCode: 400, message: "数据查询失败" });
  },
  
  methods: {
    ...mapMutations({ addCart: "cart/addCart" })
  }
};
</script>


