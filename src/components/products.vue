<script>
import { storeToRefs } from "pinia";
import {useCartState} from "../store.js"

export default{
    data: () => {
        return{
            products:[
                {
                    name:"Redbull Classic",
                    price: 3.49,
                    image:"https://www.redbull.com/energydrink/v1/resources/contentful/images/lcr8qbvxj7mh/41mzMDBG51otZRIZMDtGT5/e296e39343d66d28294dde847fc77fe9/TR_RBED_250_Single-Unit_close_ambient_ORIGINAL_canwidth528px.png?h=453&fm=webp&q=90",
                    
                },
                {
                    name:"Redbull Winter Edition",
                    price:3.99,
                    image:"https://www.redbull.com/energydrink/v1/resources/contentful/images/lcr8qbvxj7mh/Utg8tA3QOnPjTr5IVwhm1/9013260ad9ab8d06714ff70ffce877ca/DRES_TR_WINTER-Pear-Cinnamon-250ml_ambient_front_redbullcom.png?h=453&fm=webp&q=90",
                    
                },
                
                {
                    name:"Redbull Peach",
                    price:3.99,
                    image:"https://www.redbull.com/energydrink/v1/resources/contentful/images/lcr8qbvxj7mh/2BqkOydGN5DSD6rGF3smR6/7453dc85fd1eba015e4039b27d7ae924/TR_RBPEA_250_Single_Unit_close_ambient_ORIGINAL_LRES_2.png?h=453&fm=webp&q=90",
                    
                },
                {
                    name:"Redbull Yellow Edition",
                    price:3.29,
                    image:"https://www.redbull.com/energydrink/v1/resources/contentful/images/lcr8qbvxj7mh/4IZM3p7R3FZ6hTFRbYhALO/f6108777e28154ab2ad2e1635cdfa288/TR_RBYE_250_Single-Unit_close_ambient_ORIGINAL_canwidth528px.png?h=453&fm=webp&q=90",
                    
                },
                {
                    name:"Redbull White Edition",
                    price:3.99,
                    image:"https://www.redbull.com/energydrink/v1/resources/contentful/images/lcr8qbvxj7mh/2e1hM6MiiqGqsvtRxG2u6b/91aa35fbbe1b21748388332c016230ce/TR_RBWH_250_Single-Unit_close_ambient_ORIGINAL_canwidth528px.png?h=453&fm=webp&q=90",
                    
                },
                {
                    name:"Redbull Sugar Free",
                    price:3.99,
                    image:"https://www.redbull.com/energydrink/v1/resources/contentful/images/lcr8qbvxj7mh/2CJlmkrjuPijzX0rouCvTl/87b3c4e27bde9bb8026bd98b987f4808/TR_RBSF_250_Single-Unit_close_ambient_ORIGINAL_canwidth528px.png?h=453&fm=webp&q=90",
                    
                },
                {
                    name:"Redbull Blue Edition",
                    price:3.99,
                    image:"https://www.redbull.com/energydrink/v1/resources/contentful/images/lcr8qbvxj7mh/7GyBZjhedBFHB08XsBit3u/725e64d32f88c0b73d343d5bf7f4cee8/TR_RBBE_250_Single-Unit_close_ambient_ORIGINAL_canwidth528px.png?h=453&fm=webp&q=90",
                    
                }
            ],
        
            
        };
    },
    setup(){
        const cartStore = useCartState()
        return {cartStore}
    },
    methods:{
        addItemToCart(product,quantityProp){       
            product.quantity = quantityProp 
            let cartIndex = this.cartStore.cart.findIndex(item => item.name == product.name)
            if(cartIndex !== -1){
                this.cartStore.cart[cartIndex].quantity = this.cartStore.cart[cartIndex].quantity + product.quantity
            }
            else{
                this.cartStore.cart.push(product)
            }  
        }
    }
}

</script>
<template>
<div>
    <h1>Ürünler</h1>
    <div class="products">
        <div v-for="(product) in products" :key="product.id">
         <img :src=product.image alt="product.name">
         <h3>{{ product.name }}</h3>
         <h4>{{ product.price }}</h4>
         <label for="quantity">Adet:</label>
         <input type="number" :id=product.id v-model="sayi" min="1"value="1" /> 
         <button v-on:click="addItemToCart(product,sayi)">Sepete Ekle</button>
        </div>
    </div>
</div>
</template>
<style scoped>
.products{
    display: grid;
    grid-template-columns: 300px 300px 300px 300px;
    grid-template-rows: auto;
    row-gap:50px
}
/* Input alanı ve arttırma/azaltma düğmeleri için stil */
input[type="number"] {
  width: 60px; /* Input alanının genişliği */
  font-size: 30px;
  padding: 5px; /* Input alanının iç kenar boşluğu */
  border: 1px solid #ccc; /* Input alanının kenarlık rengi */
  border-radius: 4px; /* Input alanının köşe yuvarlaklığı */
}
/* Input alanı odaklandığında kenarlık rengini değiştir */
input[type="number"]:focus {
  border-color: #007bff; /* Kenarlık rengi: mavi */
}
</style>