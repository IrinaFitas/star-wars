import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import { routes } from './routes'
import './styles/main.css'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.config.productionTip = false
axios.defaults.baseURL = "https://swapi.co/api/"

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
