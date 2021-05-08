<template>
<div class="foodmenu">
    <h2>Smårätter</h2>
    <ul class="foodmenu__list centered">
        <li v-for="food in foods" :key="food.name" class="menu__item">
            <div class="menu__item--name">{{ food.name }}</div>
            <div class="dots"></div>
            <div class="menu__item--price">{{ food.price }}</div>
            <!-- <p class="menu__item--description">{{ food.description }}</p> -->
        </li>
    </ul>

    <h2>Pizza</h2>
    <ul class="foodmenu__list centered">
        <li v-for="pizza in pizzas" :key="pizza.name" class="menu__item">
            <div class="menu__item--name">{{ pizza.name }}</div>
            <div class="dots"></div>
            <div class="menu__item--price">{{ pizza.price }}</div>
            <!-- <p class="menu__item--description">{{ pizza.description }}</p> -->
        </li>
    </ul>

    <h2>Dessert</h2>
    <ul class="foodmenu__list centered">
        <li v-for="dessert in desserts" :key="dessert.name" class="menu__item">
            <div class="menu__item--name">{{ dessert.name }}</div>
            <div class="dots"></div>
            <div class="menu__item--price">{{ dessert.price }}</div>
            <!-- <p class="menu__item--description">{{ dessert.description }}</p> -->
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            foods: [],
            pizzas: [],
            desserts: []
        }
    },
    methods: {
        loadMenu() {
            this.foods = this.$store.getters.getFoods,
            this.pizzas = this.$store.getters.getPizza,
            this.desserts = this.$store.getters.getDesserts
        }
    },
    mounted() {
        this.loadMenu()
    },
    updated() {
        window.addEventListener('load', () => {
            this.loadMenu()
        })
    }
}
</script>
