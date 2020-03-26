export default {
  namespaced: true,
  state: {
    count: 0
  },
  getters: {
    tenTimeCount(state, getters, rootState, rootGetters) {
      console.log(state, getters, rootState, rootGetters);
      return state.count * 10;
    }
  },
  mutations: {
    addCount(state, num) {
      state.count += num || 1;
    }
  },
  actions: {
    addCountAsync(context, num) {
      setInterval(() => {
        if (context.state.count < 2000) {
          context.commit('addCount', num || 100);
        }
      }, num || 100);
    }
  }
};
