<template>
<div class="foodmenu">
    <h2>Från köket</h2>
    <ul class="foodmenu__list centered">
        <li v-for="food in foods" :key="food.name" class="menu__item">
            <div class="menu__item--name">{{ food.name }}</div>
            <div class="menu__item--price">{{ food.price }}</div>
            <p class="menu__item--description">{{ food.description }}</p>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            foods: []
        }
    },
    methods: {
        loadMenu() {
            this.foods = this.$store.getters.getFoods
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
