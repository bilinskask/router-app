import axios from '@/packages/axios'

export default {
  state: () => ({
    isLoading: false,
    products: []
  }),
  getters: {
    isLoading: state => state.isLoading,
    products: state => state.products,
    categories: state => {
      const categoriesList = []
      if (!state.isLoading) {
        state.products.map(product => {
          if (!categoriesList.includes(product.product_type)) {
            categoriesList.push(product.product_type)
          }
        })
      }
      return categoriesList
    }
  },
  mutations: {
    setLoadingState (state, payload) {
      state.isLoading = payload
    },
    setAxiosProducts (state, payload) {
      state.products = payload
    }
  },
  actions: {
    async loadProductData ({ state, commit }) {
      commit('setLoadingState', true)
      try {
        // const { data } = await axios.get('?product_type=nail_polish')
        const { data } = await axios.get()
        commit('setAxiosProducts', data)
        commit('setLoadingState', false)
      } catch {
        commit('setLoadingState', true)
      }
    }
  },
  modules: {
  }
}
