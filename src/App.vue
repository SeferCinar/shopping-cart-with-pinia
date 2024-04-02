<script>
import Products from './components/products.vue'
import Cart from './components/cart.vue'

export default {
  data() {
    return {
      page: "products"
    }
  },
  components: {
    Products,
    Cart
  },
  methods: {
    navigateTo(page) {
      this.page = page
    }
  }
}
</script>

<template>
 <div>
  <div class="navbar">
    <button class="navbarBtn" @click="navigateTo('products')">Alışverişe devam et</button> 
    <button class="navbarBtn" @click="navigateTo('cart')">Sepete git</button>
  </div>

  <div v-if="page === 'products'">
    <Products/>
  </div>
  <div v-else-if="page === 'cart'">
    <Cart/>
  </div>
 </div>
</template>

<style scoped>
.navbarBtn{
  margin-left: 200px;
  margin-right: 200px;
}
</style>
