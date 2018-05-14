import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyCGxeLscIU0YA2nQl1KlLqw_sdCgrMkgHg",
      authDomain: "offreservice-d6de5.firebaseapp.com",
      databaseURL: "https://offreservice-d6de5.firebaseio.com",
      projectId: "offreservice-d6de5",
      storageBucket: "offreservice-d6de5.appspot.com",
      messagingSenderId: "614840726188"
    })
    this.$store.dispatch('loadQuotations')
  }
})
