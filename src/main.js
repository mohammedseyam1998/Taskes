import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./component"
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.use(BootstrapVue)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters:{
    addCount : (state) => {
      return state.count
    }

  },
  mutations: {
    increment :(state)=> {
       return state.count++ 
    }
  }

  
  
});

Vue.use(Vuex)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
