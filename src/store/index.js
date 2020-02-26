import axios from '@/packages/axios'

export default {
  state: () => ({
    isLoading: false,
    products: [],
    cartItems: [],
    itemQuantity: []
  }),
  getters: {
    isLoading: state => state.isLoading,
    products: state => state.products,
    cartItems: state => state.cartItems,
    itemQuantity: state => state.itemQuantity,
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
    },
    setCartItems (state, payload) {
      state.cartItems = [...state.cartItems, payload]
    },
    setItemQuantity (state, payload) {
      state.itemQuantity = [...state.itemQuantity, payload]
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
    },
    addToCart ({ state, commit }, itemId) {
      commit('setCartItems', itemId)
      if (!state.itemQuantity.find(item => item === itemId)) {
        commit('setItemQuantity', { [itemId]: 0 })
      }
      commit('setItemQuantity', { [itemId]: itemId.value++ })
    }
  },
  modules: {
  }
}
