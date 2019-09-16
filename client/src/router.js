import Vue from 'vue';
import Router from 'vue-router';
import Constants from './_services/Constants';

import Home from './views/Home.vue';
import Login from './views/Login.vue';
import UserAdd from './views/Users/Add';
import UserIndex from './views/Users/Index';
import UserUpdate from './views/Users/Update';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: Constants.ROUTES.HOME,
      component: Home
    },
    {
      path: '/login',
      name: Constants.ROUTES.LOGIN,
      component: Login
    },
    {
      path: '/users',
      name: Constants.ROUTES.USERS,
      component: UserIndex
    },
    {
      path: '/users/add',
      name: Constants.ROUTES.USER_ADD,
      component: UserAdd
    },
    {
      path: '/users/update/:id',
      name: Constants.ROUTES.USER_UPDATE,
      component: UserUpdate
    }
  ]
})
