<template>
  <div>
    <h1>用户管理</h1>
    <!-- 用户输入 -->
    <div>
      <input type="text" v-model="text">
      <button @click="addGood">添加商品</button>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {
      text: ""
    };
  },
  methods: {
    addGood() {
      if (this.text) {
        this.$addGood(this.text).then(({ ok }) => {
          if (ok) {
            this.$router.push("/");
          } else {
            alert("添加失败");
          }
        });
      }
    }
  }
};
</script>

<style scoped>
</style>