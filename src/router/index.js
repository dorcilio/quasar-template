import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/components/layout/Full'
import Clean from '@/components/layout/Clean'

// Components routes
import Home from '../components/home/index'
import Chat from '../components/chat/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'Full',
      component: Full,
      children: [
        Home.route,
        Chat.route
      ]
    },
    {
      path: '/',
      name: 'Clean',
      component: Clean,
      children: []
    }
  ]
})
