import Vue from 'vue'
import Router from 'vue-router'
import Reverse from '@/components/Reverse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Reverse',
      component: Reverse
    }
  ]
})
