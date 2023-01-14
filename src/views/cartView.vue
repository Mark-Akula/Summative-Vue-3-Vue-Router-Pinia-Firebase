<script setup>
import { useStore } from '../store/index.js'

const store = useStore();
</script>

<template>
    <h1>Shopping Cart</h1>
    <div class="poster" v-for="data in Array.from(store.cart.values())">
        <p>{{ data.title }}</p>
        <img src="data.poster"/>
    </div>
</template>