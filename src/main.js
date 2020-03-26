import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app');
