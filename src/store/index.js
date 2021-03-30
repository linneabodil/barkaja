import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foods: [
      {'name': 'Hamburgare',
      'ingredients': 'Bröd, kött, sallad',
      'price': 250
      }
    ],
    drinks: [
      {'name': 'Tail of the Whale',
      'type': 'Veteöl',
      'price': 79
      },
      {'name': 'Brooklyn Defender',
      'type': 'IPA',
      'price': 89
      }
    ]
  },
  getters: {
    getFoods: state => state.foods,
    getDrinks: state => state.drinks
  },
  mutations: {
  },
  actions: {
  }
})
