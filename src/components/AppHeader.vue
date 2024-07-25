<template>
  <div class="nav">
    <router-link to="/">Homepage</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/store">Store</router-link>
    <router-link to="/mart">Mart</router-link>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
};
</script>

<style lang="sass" scoped>
.nav 
  background: pink
  overflow: hidden
  display: flex
  justify-content: center
  width: 100%
  margin-left: 500px
  
  a 
    padding: 30px
    font-size: 30px
    text-decoration: none
    
    &:active 
      color: green

</style>
