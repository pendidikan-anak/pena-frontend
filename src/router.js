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
    },
    {
      path: '/list-of-vendor',
      name: 'listOfVendor',
      component: () => import( /* webpackChunkName: "about" */ './views/Product/List')
    },
    {
      path: '/detail-of-vendor',
      name: 'detailOfVendor',
      component: () => import( /* webpackChunkName: "about" */ './views/Product/Detail')
    },
    {
      path: '/user-profile',
      name: 'userProfile',
      component: () => import( /* webpackChunkName: "about" */ './views/User/Profile')
    },
    {
      path: '/vendor-profile',
      name: 'vendorProfile',
      component: () => import( /* webpackChunkName: "about" */ './views/Vendor/Profile')
    },
    {
      path: '/sign-up',
      name: 'userRegistration',
      component: () => import( /* webpackChunkName: "vendor" */ './views/User/Register')
    },
    {
      path: '/vendor',
      name: 'vendor',
      component: () => import( /* webpackChunkName: "vendor" */ './views/Dashboard/Vendor'),
      children: [
        {
          path: 'siswabaru',
          name: 'siswabaru',
          component: () => import( /* webpackChunkName: "vendor" */ './views/Dashboard/Vendor/SiswaBaru'),
        },
        {
          path: 'profile',
          name: 'vendorprofile',
          component: () => import( /* webpackChunkName: "vendor" */ './views/Dashboard/Vendor/Profile'),
        },
        {
          path: 'siswabaru/detail',
          name: 'siswabarudetail',
          component: () => import( /* webpackChunkName: "vendor" */ './views/Dashboard/Vendor/SiswaBaru/Detail'),
        }
      ]
    }
  ]
})
