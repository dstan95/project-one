import Vue from 'vue';
import Router from 'vue-router';
import Constants from './_services/Constants';
import RestConstants from './_services/RestConstants';
import FormFactory from './_services/FormFactory';
import FormErrorFactory from './_services/FormErrorFactory';

import Home from './views/Dashboard/Home.vue';
import Login from './views/Authentication/Login.vue';
import itemAdd from './views/add.vue';
import UserIndex from './views/Users/Index';
import itemUpdate from './views/update.vue';

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
      component: itemAdd,
      meta: {
        title: 'Users - Add User',
        config: {
          url: RestConstants.USERS,
          listRoute: Constants.ROUTES.USERS,
          itemModel: {
            fname: null,
            lname: null,
            username: null,
            password: null,
            email: null
          },
          fields: FormFactory.getAddUserModel(),
          errorsItems: FormErrorFactory.getUserErrorModel(),
        },
      },
    },
    {
      path: '/users/update/:id',
      name: Constants.ROUTES.USER_UPDATE,
      component: itemUpdate,
      meta: {
        title: 'Users - Add User',
        config: {
          url: RestConstants.USERS,
          listRoute: Constants.ROUTES.USERS,
          itemModel: {
            fname: null,
            lname: null,
            username: null,
            password: null,
            email: null
          },
          fields: FormFactory.getUpdateUserModel(),
          errorsItems: FormErrorFactory.getUserErrorModel(),
        },
      },
    },
    {
      path: '/lists',
      name: Constants.ROUTES.LISTS
    },
    {
      path: '/lists/add',
      name: Constants.ROUTES.LIST_ADD,
      component: itemAdd,
      meta: {
        title: 'Lists - Add List',
        config: {
          url: RestConstants.LISTS,
          listRoute: Constants.ROUTES.LISTS,
          itemModel: {
            name: null,
            description: null,
            asignee: null,
            createdBy: null,
            tags: null,
            daysOpen: null,
            isActive: null
          },
          fields: FormFactory.getAddListModel(),
          errorsItems: FormErrorFactory.getListErrorModel(),
        },
      },
    },
  ]
})
