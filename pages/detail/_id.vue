<template>
  <div>
    <pre v-if="goodInfo">{{goodInfo}}</pre>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, error, params }) {
    if (params.id) {
      const { data: goodInfo } = await $axios.$get("/api/detail", { params });
      if (goodInfo) {
        return { goodInfo };
      }
      error({ statusCode: 400, message: "商品查询失败" });
    } else {
      return { goodInfo: null };
    }
  }
};
</script>

<style lang="scss" scoped>
</style>