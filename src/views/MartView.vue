<!-- src/App.vue -->
<template>
  <div>
    <h1>Mart</h1>
    <div class="mart">
      <AppList /> <br>
      <AppMart />
  </div>
  </div>
</template>

<script>
import AppMart from '../components/AppMart.vue';
import AppList from '../components/AppList.vue';

export default {
  components: {
    AppMart,
    AppList,
  },
};
</script>

<style lang="sass" scoped>

</style>
