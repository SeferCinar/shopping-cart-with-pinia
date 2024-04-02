<script>
import {useCartState} from "../store.js"

export default{
    name:"Cart",
    data:()=>{
        return{      
        }
    },
    setup(){
        const cartStore = useCartState()
        return {cartStore}
    },
}
</script>
<template>
<div>
    <h1>Sepetiniz</h1>

    <div class="cart">
        <div v-for="(product) in cartStore.cart" :key="cartStore.cart.id">
        <img :src=product.image alt="product.name">
        <h3>{{ product.name }}</h3>
        <h4>{{ product.price }}$</h4>
        <div class="countSection">
            <button class = "decrement" v-on:click="cartStore.decrease(product)">azalt</button>
            <h4>{{ product.quantity }} Adet</h4>
            <button class="increment" v-on:click="cartStore.increase(product)">arttır</button>
        </div>
        <button v-on:click="cartStore.removeFromCart(product)">Sepetten Kaldır</button>
        </div>
    </div>
</div>
</template>
<style scoped>
.cart{
    display: grid;
    grid-template-columns: 300px 300px 300px 300px;
    grid-template-rows: auto;
    row-gap: 50px;
}
.countSection{
    display: flex;
    justify-content: center;
}
.decrement,.increment {
    height: 50px;
    margin: 10px;
}
</style>