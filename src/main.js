import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'
import VueAxios from 'vue-axios'

//Third Party
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = 'http://localhost:8000/';
// Vue.axios.defaults.baseURL = 'http://sahabatpena.co.id:8000';
Vue.use(ElementUI, { locale });

Vue.config.productionTip = false

// Vue.prototype.$http = Axios;
// const token = localStorage.getItem('token')
// if (token) {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
