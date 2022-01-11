import Vue from 'vue'
import Vuex from 'vuex'
import reactions from '../mocks/reactions.js'

Vue.use(Vuex)

const loadReactions = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(reactions)
        }, time)
    })
}

export const state = () => ({
    reactions: []
  })
  
  export const mutations = {
    SET_REACTIONS(state, payload) {
        state.reactions = payload
    }
  }
  
  export const actions = {
    async loadReactions({commit}, payload){
        try {
            const reactions = await loadReactions(payload)
            commit('SET_REACTIONS', reactions)

        } catch (error) {
            console.error(error)
        }
    }
  }
  
  export const getters = {
    getReactions(state) {
        return state.reactions
    }
  }