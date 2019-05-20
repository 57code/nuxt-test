<template>
  <div>
    <nav>
      <nuxt-link to="/admin">管理</nuxt-link>
      <n-link to="/cart">
        购物车
        <span class="badge">{{count}}</span>
      </n-link>
    </nav>
    <nuxt />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters('cart', ['count'])
  },
}
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
