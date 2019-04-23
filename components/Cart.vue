<template>
  <table>
    <thead>
      <tr>
        <th></th>
        <th>课程名</th>
        <th>单价</th>
        <th>数量</th>
        <th>价格</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="c in list" :key="c.id" :class="{inactive: !c.active}">
        <td>
          <input type="checkbox" :checked="c.active" @change="toggle(c)">
        </td>
        <td>{{c.text}}</td>
        <td>￥{{c.price}}</td>
        <td>
          <button @click="minus(c)">-</button>
          {{c.count}}
          <button @click="add(c)">+</button>
        </td>
        <td>￥{{c.price * c.count}}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="5" align="right">总计：￥{{total}}</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import Cart from "@/components/Cart.vue";
export default {
  computed: {
    ...mapState({ list: state => state.cart.list }),
    ...mapGetters({ total: "cart/total" })
  },
  methods: {
    ...mapMutations({
      toggle: "cart/toggle",
      add: "cart/add",
      minus: "cart/minus"
    })
  }
};
</script>

<style scoped>
.inactive {
  color: gray;
}
</style>