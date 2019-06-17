import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home')
    },
    {
      path: '/become-a-partner',
      name: 'becomeAPartner',
      component: () => import(/* webpackChunkName: "about" */ './views/Vendor/Register')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( /* webpackChunkName: "about" */ './views/Login')
    }
  ]
})
