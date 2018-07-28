import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import CreationSiteWeb from '@/components/CreationSiteWeb'
import ApplicationsMobiles from '@/components/ApplicationsMobiles'
import RefencementWeb from '@/components/ReferencementWeb'
import Graphisme from '@/components/Graphisme'
import Home from '@/components/home.vue'
import Price from '@/components/Price.vue'


Vue.use(Router)
Vue.use(Meta)

export default new Router({
  routes: [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/creation-site-web',
    name: 'Création de site web',
    component: CreationSiteWeb
  },
  {
    path: '/applications-mobiles',
    name: 'Applications mobiles',
    component: ApplicationsMobiles
  },
  {
    path: '/referencement-web',
    name: 'Référencement naturel & payant',
    component: RefencementWeb
  },
  {
    path: '/graphisme',
    name: 'Graphisme',
    component: Graphisme
  },
  {
    path: '/price',
    name: 'Price',
    component: Price
  }
  ],
  mode: 'history'
})
