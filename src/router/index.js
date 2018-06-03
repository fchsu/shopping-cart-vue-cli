import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/content'
import shoppingCart from '@/components/shoppingCart'
import Phone from '@/components/Phone'
import Notebook from '@/components/Notebook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'content',
      component: Content,
      children: [
        {
          path: '/Home/Phone',
          name: 'Phone',
          component: Phone
        },
        {
          path: '/Home/Notebook',
          name: 'Notebook',
          component: Notebook
        }
      ]
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: shoppingCart
    }
  ]
})
