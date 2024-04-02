import {defineStore} from 'pinia'


export const useCartState = defineStore({
    id: 'cart',
    state: () => ({
      cart:[
      ]
    }),
    getters:{
      getCartData(){
        return this.cart
      }
    },
    actions: {
      addToDoCart(product,quantityProp){
        product.quantity = quantityProp
        let cartIndex = this.cart.findIndex(item => item.name == product.name)
        if(cartIndex !== -1){
          this.cart[cartIndex].quantity = this.cart[cartIndex].quantity + product.quantity
        }
        else{
          this.cart.push(product)
        }
      },
      removeFromCart(product){
        this.cart.splice(this.cart.indexOf(product),1)
      },
      increase(product){
        product.quantity = product.quantity+1
      },
      decrease(product){
        if(product.quantity-1==0){
            this.removeFromCart(product)
        }
        else{
            product.quantity = product.quantity-1
        }
      }
    },
  });