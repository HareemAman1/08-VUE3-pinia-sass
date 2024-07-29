<template>
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          {{ item.name }} - {{ item.quantity }} x Rs.{{ item.price }}
          <button class="btns" @click="incrementItem(item.id)">+</button>
          <button class="btns"  @click="decrementItem(item.id)">-</button>
          <button @click="removeItem(item.id)">Remove</button>
        </li>
      </ul>
      <p>Total Items: {{ totalItems }}</p>
      <p>Total Price: Rs.{{ totalPrice }}</p>
      <button @click="clearCart">Clear Cart</button>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '../stores/mart';
  import { computed } from 'vue';
  
  export default {
    setup() {
      const cartStore = useCartStore();
      
      return {
        cartItems: computed(() => cartStore.items),
        totalItems: computed(() => cartStore.totalItems),
        totalPrice: computed(() => cartStore.totalPrice),
        incrementItem: cartStore.incrementItem,
        decrementItem: cartStore.decrementItem,
        removeItem: cartStore.removeItem,
        clearCart: cartStore.clearCart,
      };
    },
  };
  </script>
  
  <style lang="sass" scoped>
  .btns
    background: silver
    border: 1px solid silver
    border-radius: 8px
    color: black
    font-weight: 900

  button
    padding: 8px 12px 
    margin: 10px
    color: white
    background: red
    border: 1px solid red
    font-weight: bold
    border-radius: 5px
    letter-spacing: 1px

  p
    font-weight: bold
  </style>