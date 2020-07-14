import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Register from './views/Register.vue'
import RegisterSuccess from './views/signup/RegisterSuccess.vue'
import AccountType from './views/signup/AccountType'
import AccountSettings from './views/signup/AccountSettings'
import Feed from './views/Feed.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
   
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/register/account-type",
      name: "accountType",
      component: AccountType,
    },
    {
      path: "/register/success",
      name: "registerSuccess",
      component: RegisterSuccess,
    },
    {
      path:"/register/account-settings",
      name:"accountSettings",
      component: AccountSettings
    },
    {
      path:"/feed",
      name:"feed",
      component: Feed
    }
  ]
})
