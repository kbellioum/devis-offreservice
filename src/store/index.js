import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    quotations: [],
    usersData: [],
    loading: false,
    actualQuote: [],
    error: null
  },
  mutations: {
    setLoadedQuote (state, payload) {
      state.quotations = payload
    },
    createQuote (state, payload) {
      // console.log("quotations : ", state.quotations, payload)
      state.quotations.push(payload)
    },
    pushUserData (state, payload) {
      // console.log("users : ", state.usersData, payload)
      state.usersData.push(payload)
    },
    loadUsersData (state) {
      console.log(state.usersData)
    }
  },
  actions: {
    pushUserData ({commit}, payload) {
      firebase.database().ref('users').push(payload)
        .then(() => {
          commit('pushUserData', payload)
        })
    },
    createQuote ({commit}, payload) {
      firebase.database().ref('quotations').push(payload)
        .then(() => {
          commit('createQuote', payload)
        })
    },
    loadUsersData ({commit}) {
      firebase.database().ref('users').once('value')
        .then(() => {
          commit('loadUsersData')
        })
    },
    loadQuotations ({commit}) {
      firebase.database().ref('quotations').once('value')
      .then((data) => {
        let tmp = []
        let fetcheddata = data.val()
        for(let key in fetcheddata){
          tmp.push(fetcheddata[key])
          // console.log(fetcheddata[key])
        }
        commit('setLoadedQuote', tmp)
      })
    }
  },
  getters: {
    getQoutes (state) {
      return state.quotations
    },
    getUserdata (state) {
      return state.usersData
    }
  }
})
