import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import cloneDeep from 'lodash/cloneDeep';
// import reduce from 'lodash/reduce';

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,

  state: {
    comments: null,
    loading: true,
    error: false
  },

  mutations: {
    SET_COMMENTS(state: any, comments: any) {
      state.comments = comments.data.comments
    },
    SET_LOADING(state: any, loading: boolean) {
      state.loading = loading
    },
    SET_ERROR(state: any, error: boolean) {
      state.error = error
    }
  },

  getters: {},

  actions: {
    async loadComments({ commit }): Promise<void> {
      try {
        const data: any[] = await axios.get(
          'https://cors-anywhere-ds.herokuapp.com/https://vue-class.ilmente.com/.netlify/functions/comments',
          {
            headers: { 'Access-Control-Allow-Origin': '*' }
          }
        )
        commit('SET_COMMENTS', data)
      } catch (err) {
        commit('SET_ERROR', true)
        console.log('🔴 ', err)
      } finally {
        commit('SET_LOADING', false)
      }
    }
  }
})
