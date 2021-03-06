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
    },{
      path: '/register-vendor',
      name: 'registerVendor',
      component: () => import(/* webpackChunkName: "about" */ './views/Vendor/Register/Detail'),
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( /* webpackChunkName: "about" */ './views/Login')
    },
    {
      path: '/vendors',
      name: 'vendors',
      component: () => import( /* webpackChunkName: "about" */ './views/Product/List')
    },
    {
      path: '/detail-vendor',
      name: 'detailVendor',
      component: () => import( /* webpackChunkName: "about" */ './views/Product/Detail')
    },
    {
      path: '/registration-form',
      name: 'registrationForm',
      component: () => import( /* webpackChunkName: "about" */ './views/Product/Detail/RegistrationForm'),
      props: true
    },
    {
      path: '/user-profile',
      name: 'userProfile',
      component: () => import( /* webpackChunkName: "about" */ './views/Dashboard/User/Profile'),
    },
    {
      path: '/verify-data',
      name: 'verifyData',
      component: () => import( /* webpackChunkName: "vendor" */ './views/Dashboard/User/VerifyData'),
    },
    {
      path: '/add-child',
      name: 'addChild',
      component: () => import( /* webpackChunkName: "vendor" */ './views/Dashboard/User/Profile/Children/Child/Add'),
    },
    {
      path: '/sign-up',
      name: 'userRegistration',
      component: () => import( /* webpackChunkName: "vendor" */ './views/User/Register')
    },
    {
      path: '/forgot-password',
      name: 'forgotPassword',
      component: () => import( /* webpackChunkName: "vendor" */ './views/ForgotPassword')
    },
    {
      path: '/forgot-password-done',
      name: 'forgotPasswordDone',
      component: () => import( /* webpackChunkName: "vendor" */ './views/ForgotPassword/Done')
    },
    {
      path: '/reset-password',
      name: 'resetPassword',
      component: () => import( /* webpackChunkName: "vendor" */ './views/ResetPassword')
    },
    {
      path: '/vendor',
      name: 'vendor',
      component: () => import( /* webpackChunkName: "vendor" */ './views/Dashboard/Vendor'),
      children: [
        {
          path: 'siswaBaru',
          name: 'siswaBaru',
          component: () => import( /* webpackChunkName: "vendor" */ './views/Dashboard/Vendor/SiswaBaru'),
        },
        {
          path: 'profile',
          name: 'vendorProfile',
          component: () => import( /* webpackChunkName: "vendor" */ './views/Dashboard/Vendor/Profile'),
        },
        {
          path: 'editProfile',
          name: 'editVendorProfile',
          component: () => import( /* webpackChunkName: "vendor" */ './views/Dashboard/Vendor/Profile/Edit'),
        },
        {
          path: 'siswaBaru/detail',
          name: 'siswaBaruDetail',
          component: () => import( /* webpackChunkName: "vendor" */ './views/Dashboard/Vendor/SiswaBaru/Detail'),
        },
        {
          path: 'penjadwalan',
          name: 'penjadwalan',
          component: () => import( /* webpackChunkName: "vendor" */ './views/Dashboard/Vendor/Penjadwalan'),
        },
        {
          path: 'biayaKesiswaan',
          name: 'biayaKesiswaan',
          component: () => import( /* webpackChunkName: "vendor" */ './views/Dashboard/Vendor/BiayaKesiswaan'),
        }
      ]
    }
  ]
})
