import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
  state: {
    getEmpolyee:[]
  },
  getters: {
  },
  mutations: {
    increment (state,data) {
      state.getEmpolyee = data
    }
  },
  actions: {
     getAPIEMpolsdlsd ( context ) {
     axios.get('https://jsonplaceholder.typicode.com/posts') 
  .then(res => {
    context.commit('increment',res)
  }) 
  .catch(error => {
    console.log(error);
  });
    }
    // increment ({ commit }) {
    //   console.log("sdsddsdsd")
    // }
  },
  modules: {
   
  }
})
