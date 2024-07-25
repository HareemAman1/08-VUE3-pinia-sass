<template>
    <h1>Vee Validation</h1> <br>
  <div class="about">
    <Form @submit="handleSubmit">
      <div>
        <label for="name">Name:</label>
        <Field name="name" :rules="isRequired" placeholder="Enter name" />
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
  if (isNaN(value) || value <= 0) {
    return "Age must be a positive number";
  }
  return true;
}


const handleSubmit = (values) => {
  console.log(values);
  alert(`Name:, ${values.name}`);
  return values; 
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
button 
  width: 330px 
  height: 40px 
  border: 1px solid 
  border-radius: 20px
  background: purple 
  color: white 
  font-weight: bold 
  cursor: pointer
  &:hover 
    background: white 
    color: purple
</style>
