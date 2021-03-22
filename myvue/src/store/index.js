import { createStore } from 'vuex'

export default createStore({
  state: {
      list:[]
  },
  mutations: {
      addlist(state,goods){
          state.list.push(goods);
      }
  },
  actions: {
  },
  modules: {
  }
})
