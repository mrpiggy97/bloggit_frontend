import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Authentication from './views/Authentication'
import CreatePost from './views/CreatePost'
import CommunityView from './views/CommunityView'

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
      path: '/auth/:action',
      name: 'authentication',
      component: Authentication
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/create-post',
      name: 'CreatePost',
      component: CreatePost
    },
    {
      path: '/community/:community',
      name: 'community',
      component: CommunityView
    }
  ]
})
