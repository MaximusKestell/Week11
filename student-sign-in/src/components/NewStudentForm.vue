<script setup>

import { ref } from 'vue'

import { useStudentStore } from "../stores/StudentStore.js";

const studentStore = useStudentStore()

const newStudentName = ref('')
const newStarID = ref('')

const formErrors = ref([])

const addStudent = () => {
          formErrors.value = [] // reset form errors

          // check if newStudentName is invalid
          if (!newStudentName.value) {
            formErrors.value.push('Student name must be entered')
          }

          if (!newStarID.value) {
            formErrors.value.push('StarID must be entered')
          }

          // if there aren't errors -- is the form valid
          if (formErrors.value.length == 0) {
            let student = {
              name: newStudentName.value,
              starID: newStarID.value,
              present: false
            }

            //   how to add student?
            studentStore.addNewStudent(student)

            newStudentName.value = '' // clears forms input
            newStarID.value = ''
          }
}

</script>

<template>

  <div id="new-student-form-errors" class="m-2">
    <!--  show errors from form validation -->
    <div v-if="formErrors.length > 0" class="alert alert-danger">
      <li v-for="error in formErrors">
        {{ error }}
      </li>
    </div>
  </div>


  <div id="new-student-form" class="card add-student m-2 p-2">
    <h4 class="card-title">Add new student</h4>

    <div class="form-group mb-3">
      <label for="name">Name</label>
      <!--  v-model newStudentName -->
      <input v-model.trim="newStudentName" id="name" class="form-control">
    </div>

    <div class="form-group mb-3">
      <label for="starID">Star ID</label>
      <!--  v-model newStarID, .trim makes it not take the empty spaces as data -->
      <input v-model.trim="newStarID" id="starID" class="form-control">
    </div>

    <button v-on:click="addStudent" class="btn btn-primary">Add</button>
  </div>

</template>

<style scoped>

/* CSS for this component here */

</style>