<script>
import { useCounterStore } from '../stores/counter'

export default {
  setup() {
    const counterStore = useCounterStore()

    return {
      counterStore
    }
  }
}
</script>


<template>
  <main>
    <div class="counter">
      <h1>{{ counterStore.count }}</h1><br>
      <div class="btns">
        <button @click="counterStore.increaseNumber">+</button>
        <button @click="counterStore.decreaseNumber">-</button>
      </div>
      <br><hr>
      <h1>Number doubled</h1> <br>
      <h1>{{ counterStore.doubled }}</h1>
      <br><hr><br>
      <input type="number" v-model="counterStore.count">
    </div>
  </main>
</template>

<style lang="sass" scoped>
button
    padding: 15px 20px
    margin: 10px 30px
    background: plum
    border: 1px solid plum
    border-radius: 45%
    font-size: 1rem
    font-weight: 900

input
    width: 300px
    height: 40px
    padding-left: 20px
    display: block
    margin-bottom: 30px
    margin-left: auto
    margin-right: auto
    border: 1px solid pink
    font-weight: 900

</style>
