import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useStudentStore = defineStore('students', () => {

    const studentList = ref([
        { name: 'A. Student', starID: 'aa1234aa', present: false},
        { name: 'B. Student', starID: 'bb1234bb', present: false}
    ])

    const mostRecentStudent = ref( {} ) // empty obj

    function addNewStudent(student) {
        studentList.value.push(student)
    }

    return {
        // reactive data
        studentList,
        mostRecentStudent,

        // functions
        addNewStudent,

    }

})