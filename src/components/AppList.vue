<template>
    <div>
      <h1>Product List</h1>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }} - Rs.{{ product.price }}
          <button @click="addItem(product)">Add to Cart</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '../stores/mart';
  export default {
    setup() {
      const cartStore = useCartStore();
      const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
      ];
  
      return {
        products,
        addItem: cartStore.addItem,
      };
    },
  };
  </script>
  
  
  <style lang="sass" scoped>
  button
    padding: 8px 12px 
    margin: 10px
    color: white
    background: green
    border: 1px solid green
    font-weight: bold
    border-radius: 5px
  </style>