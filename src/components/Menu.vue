<template>
<div class="menu fullwidth">

    <ul class="menu__food">
        <h2>Matmeny</h2>
        <li v-for="food in foods" :key="food.name">
            {{ food.name }}
            {{ food.ingredients }}
            {{ food.price }}
        </li>
    </ul>

    <ul class="menu__drinks">
        <h2>Ölmeny</h2>
        <li v-for="drink in drinks" :key="drink.name">
            {{ drink.name }}
            {{ drink.type }}
            {{ drink.price }}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            foods: [],
            drinks: []
        }
    },
    mounted() {
        this.foods = this.$store.getters.getFoods
        this.drinks = this.$store.getters.getDrinks
    }
}
</script>
