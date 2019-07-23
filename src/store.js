import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'


import * as types from '@/vuex/types'

Vue.use(Vuex)

const getters = {
  account: state => state.account
}

export default new Vuex.Store({
  getters,
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
    account: ''
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.account = ''
    },
    [types.GET_ACCOUNT](state, response) {
      state.account = response.data
    },
    [types.REMOVE_ACCOUNT](state, response) {
      state.account = ''
    },
  },
  actions: {
    async login({ commit }, payload) {
      const response = axios
        .post("api/rest-auth/login/", payload)
        .then(response => {
          // axios.get(`/api/users/profile/${response.data.user.pk}`, {
          //   headers: {
          //     'Authentication': `JWT ${response.data.token}`
          //   }
          // }).then(response => {
          //   console.log(response);
          // });
          commit(types.GET_ACCOUNT, response)
        })
        .catch(error => {
          const fieldError = Object.keys(error.response.data);
          return this.$alert(
            error.response.data[fieldError].join(""),
            Object.keys(error.response.data).join(""),
            {
              confirmButtonText: "OK"
            }
          );
        });
    },
    async logout({ commit }, payload) {
      commit(types.REMOVE_ACCOUNT)
    },

  },
  plugins: [createPersistedState({
    reducer: state => ({
      account: state.account
    })
  })],
})
