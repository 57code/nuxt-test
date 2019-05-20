<template>
  <div>
    <h1>购物车</h1>
    <Cart></Cart>
    <el-button @click="pay">付款</el-button>
  </div>
</template>

<script>
import Cart from "@/components/Cart.vue";
import { mapGetters } from "vuex";
export default {
  components: { Cart },
  computed: {
    ...mapGetters({ isLogin: "user/isLogin" })
  },
  methods: {
    pay() {
      if (this.isLogin) {
        alert("支付中...");
      } else {
        this.$router.push("/login");
        alert("请先登录");
      }
    }
  }
};
</script>

<style scoped>
</style>