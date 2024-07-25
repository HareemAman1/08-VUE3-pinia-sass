import { ref } from "vue"

export default function useCounter() {
    const count = ref (0)

    function inc() {
        count.value++
    }

    return {count, inc}
}