import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router-routes/routes'
import App from './App.vue'
import store from './store'
Vue.use(VueRouter)


const router = new VueRouter({
  routes
})
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
