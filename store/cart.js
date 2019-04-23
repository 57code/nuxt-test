export const state = () => ({
  list: []
});
export const mutations = {
  init(state, list) {
    state.list = list;
  },
  addCart(state, good) {
    const idx = state.list.findIndex(v => v.id === good.id);
    if (idx >= 0) {
      // 购物车里已有该商品
      state.list[idx].count += 1;
    } else {
      state.list.push({ ...good, active: true, count: 1 });
    }
  },
  add(state, item) {
    const idx = state.list.findIndex(v => v.id === item.id);
    state.list[idx].count += 1;
  },
  minus(state, item) {
    const idx = state.list.findIndex(v => v.id === item.id);
    state.list[idx].count -= 1;
  },
  toggle(state, item) {
    const idx = state.list.findIndex(v => v.id === item.id);
    state.list[idx].active = !state.list[idx].active;
  }
};
export const getters = {
  total(state) {
    //计算激活项总价
    return state.list.reduce((sum, c) => {
      if (c.active) {
        sum += c.price * c.count;
      }
      return sum;
    }, 0);
  },
  count(state) {
    return state.list.reduce((count, item) => {
      if (item.active) {
        count += item.count;
      }
      return count;
    }, 0);
  }
};

