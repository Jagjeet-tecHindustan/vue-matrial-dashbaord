import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main/Main'
import Dashboard from '@/components/admin/pages/dashboard/Dashboard'
import Signin from '@/components/admin/pages/auth/Signin'
import Signup from '@/components/admin/pages/auth/Signup'
import Tables from '@/components/admin/pages/Tables'
import Forms from '@/components/admin/pages/forms/Forms'
import Modal from '@/components/admin/pages/modals/Modal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect: '/admin/dashboard'
    },
    {
      path: '/admin/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/admin/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/admin/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/admin/tables',
      name: 'Tables',
      component: Tables
    },
    {
      path: '/admin/forms',
      name: 'Forms',
      component: Forms
    },
    {
      path: '/admin/modal',
      name: 'Modal',
      component: Modal
    }
  ]
})
