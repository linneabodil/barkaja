<template>
<div class="menu">

    <ul class="menu__food">
        <h2>Matmeny</h2>
        <li v-for="food in foods" :key="food.name" class="menu__item">
            <div class="menu__item--name">{{ food.name }}</div>
            <div class="menu__item--price">{{ food.price }}</div>
            <p class="menu__item--description">{{ food.ingredients }}</p>
        </li>
    </ul>

    <ul class="menu__drinks">
        <h2>Ölmeny</h2>
        <li v-for="drink in drinks" :key="drink.name" class="menu__item">
            <div class="menu__item--name">{{ drink.name }}</div>
            <div class="menu__item--type">{{ drink.type }}</div>
            <div class="menu__item--price">{{ drink.price }}</div>
            <p class="menu__item--description">{{ drink.description }}</p>
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
