import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    quotations: [],
    loading: false,
    error: null
  },
  mutations: {
    setLoadedQuote (state, payload) {
      state.quotations = payload
    },
    createQuote (state, payload) {
      console.log("quotations : ", state.quotations, payload)
      // state.quotations.push(payload)
    }
  },
  actions: {
    createQuote ({commit}, payload) {
      firebase.database().ref('quotations').push(payload)
        .then(() => {
          commit('createQuote', payload)
        })
    },
    loadQuotations ({commit}) {
      firebase.database().ref('quotations').once('value')
      .then((data) => {
        let tmp = []
        let fetcheddata = data.val()
        for(let key in fetcheddata){
          tmp.push(fetcheddata[key])
          console.log(fetcheddata[key])
        }
        commit('setLoadedQuote', tmp)
      })
    }
  },
  getters: {
    getQoutes (state) {
      return state.quotations
    }
  }
})
