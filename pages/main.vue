<template>
  <div>
    <nav>
      <nuxt-link to="/main">首页</nuxt-link>
      <!-- 别名 -->
      <n-link to="/main/admin" no-prefetch>管理</n-link>
      <NLink to="/main/cart">购物车</NLink>
    </nav>

    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>