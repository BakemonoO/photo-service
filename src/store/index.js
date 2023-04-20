import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state() {
    return {
      acсessApiKey: 'QzUF98BjIwFxr2-jHfKSR0o8dAlAXawg5s83M9j4tI0',
      picData: [],
      headerPic: null,
      favorites: [],
      loader: false,
      shortInput: false,
      queryData: [],
      perPage: 10,
      page: 1,
      query: null
    }
  },
    
  getters: {

  },

  mutations: {
    createPicData(state, data) {
      state.picData = state.picData.concat(data)
    },

    updatePicData(state, data) {
      state.picData = state.picData.concat(data)
    },

    createHeaderPic(state, data) {
      state.headerPic = data
    },

    changeLoader(state, data) {
      state.loader = data
    },

    addToFavorite(state, data) {
      state.favorites.push(data)
    },

    deleteFromFavorite(state, data) {
      state.favorites = state.favorites.filter(x => x.id !== data.id)
    },

    changeShortInput(state) {
      state.shortInput = !state.shortInput
    },

    changeFirstQueryData(state, data) {
      state.queryData = data
    },

    changeQueryData(state, data) {
      state.queryData = state.queryData.concat(data)
    },

    pageUp(state) {
      state.page += 1
    },

    changeQuery(state, data) {
      state.query = data
    },

    clearPage(state) {
      state.page = 1
    }

  },

  actions: {
    async getSomePics({state, commit}) {
      try {
        commit('changeLoader', true)
        const response = await axios.get('https://api.unsplash.com/photos/random', {
        params: {
          client_id: state.acсessApiKey,
          count: 8,
          orientation: 'landscape'
        }})
        commit('createPicData', response.data)
      } catch (error) {
        console.log(error)
      } finally {
        commit('changeLoader', false)
      }
      
    },

    async getHeaderPic({state, commit}) {
      try {
        commit('changeLoader', true)
        const response = await axios.get('https://api.unsplash.com/photos/random', {
        params: {
          orientation: 'landscape',
          client_id: state.acсessApiKey
        }})
        commit('createHeaderPic', response.data)
      } catch (error) {
        console.log(error)
      } finally {
        commit('changeLoader', false)
      }
    },

    async getPicWithId({ state, commit }, id) {
      try {
        commit('changeLoader', true)
        const response = await axios.get(`https://api.unsplash.com/photos/${id}`, {
          params: {
            client_id: state.acсessApiKey,
          }
        })
        return response.data
      } catch (error) {
      console.log(error)
      } finally {
      commit('changeLoader', false)
      }
    },

    async getQueryPics({state, commit}, data) {
      try {
        commit('changeLoader', true)
        const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          client_id: state.acсessApiKey,
          per_page: state.perPage,
          page: state.page,
          orientation: 'landscape',
          query: state.query
        }})
        commit('changeQueryData', response.data.results)
        commit('pageUp')
      } catch (error) {
        console.log(error)
      } finally {
        commit('changeLoader', false)
      }
    },

    async getFirstQueryPics({state, commit}, data) {
      try {
        commit('changeLoader', true)
        const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          client_id: state.acсessApiKey,
          per_page: state.perPage,
          page: state.page,
          orientation: 'landscape',
          query: state.query
        }})
        commit('changeFirstQueryData', response.data.results)
        commit('clearPage')
      } catch (error) {
        console.log(error)
      } finally {
        commit('changeLoader', false)
      }
      
    },
  }
})
