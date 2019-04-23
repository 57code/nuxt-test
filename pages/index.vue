<template>
  <div>
    <h1>
      商品列表
      <router-link to="/admin">管理</router-link>
      <router-link to="/cart">
        购物车
        <span class="badge">{{count}}</span>
      </router-link>
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
  computed: {
    ...mapGetters({ count: "cart/count" })
  },
  methods: {
    ...mapMutations({ addCart: "cart/addCart" })
  }
};
</script>

<style>
a {
  text-decoration: none;
  font-size: 20px;
}
.badge {
  border-radius: 50%;
  background: red;
  color: white;
  font-size: 14px;
  padding: 0px 5px;
}
</style>
