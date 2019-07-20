import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DetailPage from './views/DetailPage.vue'
import News from './views/News.vue'
import Fruit from './views/Fruit.vue'
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
      path: '/detail/:mno',
      name: 'detail',
      component: DetailPage
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },


    {
      path: '/fruit',
      name: 'fruit',
      component: Fruit
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
