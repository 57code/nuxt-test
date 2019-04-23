<template>
  <div>
    <h1>登录</h1>
    <p>
      用户名：
      <input type="text" v-model="user.username">
    </p>
    <p>
      密码：
      <input type="password" v-model="user.password">
    </p>
    <p>
      <el-button @click="submit">登录</el-button>
    </p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions({ login: "user/login" }),
    submit() {
      this.login(this.user).then(ok => {
        if (ok) {
          this.$router.push("/");
        } else {
          alert("用户名或密码错误");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>