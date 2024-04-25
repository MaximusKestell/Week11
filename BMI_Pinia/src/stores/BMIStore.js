import { defineStore } from 'pinia'

import { ref, computed } from 'vue'

export const useBMIStore = defineStore('bmi', () => {

    const height = ref(1)

    const weight = ref(0)

    const calculatedBMI = computed( () => {

        const bmi = weight.value / height.value

        return bmi // this is the effective value of the calculateBMI property
    })

    return {
        height,
        calculatedBMI,
        weight
    }


})