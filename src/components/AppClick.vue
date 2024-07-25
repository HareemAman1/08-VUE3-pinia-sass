<template>
<div class="click"> 
  <h2>Click Counter</h2><br>
  <button @click="counter.inc"> Click</button> <br>
  <p> counts: {{counter.count}}</p>

  </div>
</template>

<script>
import useCounter from '../composables/count'
export default {
    name: 'AppClick',

    setup(){
        const counter = useCounter()
        return {counter}
    }
}
</script>

<style lang=sass scoped>
/* .click
    margin-top: 50px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center */
button
    background: salmon
    padding: 5px 10px
    width: 20%

</style>