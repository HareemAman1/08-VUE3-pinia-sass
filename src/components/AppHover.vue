<template>
  <div class="hover"> 
  <h2>Hover Counter</h2><br>
  <div class="path" @mouseover="counter.inc">Hover</div><br>
  <p> counts: {{counter.count}}</p>

  </div>

</template>

<script>
import useCounter from '../composables/count'
export default {
    name: 'AppHover',

    setup(){
        const counter = useCounter()
        return {counter}
    }
}
</script>

<style lang=sass scoped>
.path
    background: yellow
    width: 50%
    text-align: center

</style>