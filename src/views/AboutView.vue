<template>
    <h1>Vee Validation</h1> <br>
  <div class="about">
    <Form @submit="handleSubmit">
      <div>
        <label for="name">Username:</label>
        <Field name="name" :rules="isRequired" placeholder="Enter username" />
        <ErrorMessage name="name" />
      </div>

      <div>
        <label for="age">Age:</label>
        <Field
          name="age"
          :rules="ageValidation"
          placeholder="Enter age"
          type="number"
        />
        <ErrorMessage name="age" />
      </div>

      <button type="submit">OK</button>
    </Form>
  </div>
</template>

<script setup>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import axios from 'axios';

// Validation
function isRequired(value) {
  if (value && value.trim()) {
    return true;
  }
  return "This field is required";
}

function ageValidation(value) {
  if (!value) {
    return "Age is required";
  }
  if (isNaN(value) || value < 0) {
    return "Age must be a positive number";
  }
  if (value == 0){
    return "Age must be greater than 1";
  }
  return true;
}


// const handleSubmit = (values) => {
//   console.log(values);
//   alert(`${values.name}'s age is ${values.age}`);
//   return values; 
// };

const handleSubmit = async (values) => {
  try {
    const response = await axios.post('http://localhost:3000/submit', values);
    alert(response.data);
  } catch (error) {
    console.error("There was an error saving the data!", error);
  }
};

</script>

<style lang="sass" scoped>
input 
  width: 300px 
  height: 40px 
  padding-left: 20px 
  display: block 
  margin-bottom: 30px 
  margin-left: auto 
  margin-right: auto 
  border: 1px solid pink 
span 
  color: red 
  display: block 
  text-align: center 
  font-weight: bold
  // margin-bottom: 15px
button 
  width: 330px 
  height: 40px 
  border: 1px solid 
  border-radius: 20px
  background: purple 
  color: white 
  font-weight: bold 
  cursor: pointer
  margin-top: 15px
  &:hover 
    background: white 
    color: purple
</style>
