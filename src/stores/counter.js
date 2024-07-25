// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0
  }),
  getters: {
    doubled: (state) => state.count * 2
  },
  actions: {
    increaseNumber() {
      this.count++
    },
    decreaseNumber() {
      this.count--
    }
  }
})


// ('counter', () => {
//   const count = ref(0)
  
//   const increaseNumber = () =>{
//     count.value++
//   }
//   const decreaseNumber = () =>{
//     count.value--
//   }

//   const doubled = computed(() => {
//     return count.value * 2
//   })


//   return { count, increaseNumber, decreaseNumber, doubled }
// })
