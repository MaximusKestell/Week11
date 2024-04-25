<!--http://localhost:5174/-->
<script setup>
import { ref } from 'vue'

import { useBMIStore } from "../stores/BMIStore.js";
import { storeToRefs } from 'pinia';

const BMIStore = useBMIStore()

// allows access to the height reactive data from store
const { height } = storeToRefs(BMIStore)

</script>

<template>

  <h2>This is Body Mass Index
    Form to enter your data</h2>

  <label>Enter height in meters </label>
  <input v-model="height">

  <br>

  <label>Enter Weight in kilograms </label>
  <input v-model="weight">

<!--  hello from BodyMassIndexForm!-->

</template>

<style scoped>

</style>
