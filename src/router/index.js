import Vue from 'vue'
import Router from 'vue-router'
import CreationSiteWeb from '@/components/CreationSiteWeb'
import ApplicationsMobiles from '@/components/ApplicationsMobiles'
import RefencementWeb from '@/components/ReferencementWeb'
import Graphiste from '@/components/Graphiste'
import Home from '@/components/home.vue'
import Price from '@/components/Price.vue'


Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/creation-site-web',
    name: 'Creation de site web',
    component: CreationSiteWeb
  },
  {
    path: '/applications-mobiles',
    name: 'Applications mobiles',
    component: ApplicationsMobiles
  },
  {
    path: '/referencement-web',
    name: 'Référencement web naturel / payant',
    component: RefencementWeb
  },
  {
    path: '/graphiste',
    name: 'Graphiste',
    component: Graphiste
  },
  {
    path: '/price',
    name: 'Price',
    component: Price
  }
  ],
  mode: 'history'
})
