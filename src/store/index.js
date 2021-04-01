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
      'price': 79,
      'description': 'Öl som smakar väldigt gott'
      },
      {'name': 'Brooklyn Defender',
      'type': 'IPA',
      'price': 89,
      'description': 'Öl som smakar gott'
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
