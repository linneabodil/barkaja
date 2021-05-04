<template>
<div class="drinkmenu">
    <h2>I baren</h2>
    <ul class="drinkmenu__list centered">
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
            drinks: []
        }
    },
    methods: {
        loadMenu() {
            this.drinks = this.$store.getters.getDrinks
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
