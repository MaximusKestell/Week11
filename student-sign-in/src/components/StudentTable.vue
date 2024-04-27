<script setup>

import {useStudentStore} from "../stores/StudentStore.js";

import { storeToRefs } from "pinia";

const studentStore = useStudentStore()

const { studentList } = storeToRefs(studentStore)

</script>

<template>

  <div id="student-list-table" class="card m-2 p-2">
    <h4 class="card-title">Student List</h4>
    <div id="student-table">
      <table class="table">
        <thead>
        <tr>
          <th>Name</th>
          <th>StarID</th>
          <th>Present?</th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="student in studentList" v-bind:class="{ present: student.present, absent: !student.present }">

          <td>{{ student.name }}</td>
          <td>{{ student.starID }}</td>
          <td> <!--  checkbox for present/absent-->
            <input type="checkbox" v-model="student.present" v-on:change="arrivedOrLeft(student)">
            <span v-if="student.present" class="mx-3">Here!</span>
            <span v-else class="mx-3">Not present</span>
          </td>
          <td>
            <button v-on:click="deleteStudent(student)" class="btn btn-danger btn-sm">Delete</button>
          </td>

        </tr>

        </tbody>

      </table>
    </div>
  </div>

</template>

<style scoped>

/* CSS for this component here */

</style>