import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foods: [],
    drinks: []
  },
  getters: {
    getFoods: state => state.foods,
    getDrinks: state => state.drinks
  },
  mutations: {
    setFoods(state, foods) {
      console.log(foods)
      state.foods = foods;
    },
    setDrinks(state, drinks) {
      console.log(drinks)
      state.drinks = drinks;
    }
  },
  actions: {
    async getMenu(data) {
      let menu = await axios.get('http://gsx2json.com/api?id=ID&sheet=1&columns=false');

      // Sort out food
      let foods = menu.data.rows.filter(menu => menu.item == "food")
      data.commit('setFoods', foods);
      
      // Sort out drinks
      let drinks = menu.data.rows.filter(menu => menu.item == "drink")
      data.commit('setDrinks', drinks);
    }
  }
})