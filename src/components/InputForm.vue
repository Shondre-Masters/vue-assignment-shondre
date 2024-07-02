<template>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email">Email Address:</label>
        <input id="email" type="email" v-model="formData.email" required class="rounded-input" placeholder="Enter your email">
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>
  
      <div class="form-group">
        <label for="password">Password:</label>
        <input id="password" type="password" v-model="formData.password" required class="rounded-input" placeholder="Enter your password">
        <span v-if="errors.password" class="error">{{ errors.password }}</span>
      </div>
  
      <button type="submit" class="green-button">Submit</button>
    </form>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  interface FormDataType {
    email: string;
    password: string;
  }
  
  const formData = ref<FormDataType>({
    email: '',
    password: ''
  });
  
  const errors = ref<{ email?: string; password?: string }>({});
  
  const handleSubmit = () => {
    // Reset errors on submit
    errors.value = {};
  
    // Validate email
    if (!formData.value.email) {
      errors.value.email = 'Email is required.';
    } else if (!isValidEmail(formData.value.email)) {
      errors.value.email = 'Please enter a valid email address.';
    }
  
    // Validate password
    if (!formData.value.password) {
      errors.value.password = 'Password is required.';
    } else if (formData.value.password.length < 8) {
      errors.value.password = 'Password must be at least 8 characters long.';
    }
  
    // If no errors, proceed with form submission
    if (Object.keys(errors.value).length === 0) {
      alert('Form submitted successfully!');
      // You can reset form data here if needed
    }
  };
  
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 20px;
  }
  
  .label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .rounded-input {
    width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .error {
    color: red;
    font-size: 14px;
    margin-top: 4px;
  }
  
  .green-button {
    background-color: #84C7AE;
    color: white;
    border: none;
    padding: 12px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
  }
  </style>
  