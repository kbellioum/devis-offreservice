import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
import { store } from './store'

new Vue({
  el: '#app',
  store,
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
