<template>
  <div class="page-container">
    <!-- White squares with specified dimensions -->
    <div class="white-square top-left"></div>

    <div class="signup-form-container">
      <h2>Create An Account</h2>
      <p class="signup-text">Create an account to enjoy all the services without any ads for free!</p>

      <!-- Your existing form content -->
      <form @submit.prevent="handleSubmit" class="signup-form">
     
        <div class="form-group">
          <input id="email" type="email" v-model="formData.email" required class="rounded-input" placeholder="Email Address">
          <span v-if="errors.email" class="error">{{ errors.email }}</span>
        </div>

      
        <div class="form-group">
          <input id="password" type="password" v-model="formData.password" required class="rounded-input" placeholder="Password">
          <span v-if="errors.password" class="error">{{ errors.password }}</span>
        </div>

       
        <div class="button-container">
          <button type="submit" class="green-button">Create Account</button>
        </div>
      </form>

    
      <div class="signin-container">
        <span>Already have an account? </span>
        <a href="#" class="signin-link" @click.prevent="handleSignIn">Sign In</a>
      </div>
    </div>

    <!-- Second white square for bottom right -->
    <div class="white-square bottom-right"></div>
  </div>
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

  // If no errors, proceed with signup
  if (Object.keys(errors.value).length === 0) {
    console.log('Form submitted with data:', { email: formData.value.email, password: formData.value.password });
    formData.value.email = '';
    formData.value.password = '';
  }
};

const isValidEmail = (email: string) => {
  // Basic email validation regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const handleSignIn = () => {
  console.log('Redirecting to sign in page...');
  // Sign in redirection
};
</script>

<style scoped>
.page-container {
  background-color: #A7D7C5;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* Ensure relative positioning for absolute child */
  overflow: hidden; 
}

.white-square {
  width: 550px;
  height: 550px;
  background-color: #C1E3D6;
  position: absolute;
  border-radius: 160px;
  transform: rotate(45deg);
}

.white-square.top-left {
  top: -190px;
  left: -190px;
}

.white-square.bottom-right {
  width: 550px;
  height: 550px;
  background-color: #C1E3D6;
  position: absolute;
  border-radius: 160px;
  transform: rotate(45deg);
  bottom: -190px;
  right: -190px;
}

.signup-form-container {
  width: 596px;
  height: 400px;
  padding: 20px;
  border-radius: 48px;
  border: 1px solid #DDDDDD;
  background-color: #F6FBF9;
  text-align: center;
  position: relative; 
  z-index: 1; /* Ensure form is above the white squares */
}

.signup-form-container h2 {
  font-size: 32px;
  margin-bottom: 10px;
}

.signup-text {
  width: 268px;
  margin: 0 auto; /* Center-align horizontally */
  font-size: 12px;
  color: #333;
  margin-bottom: 50px;
}

.rounded-input {
  width: 500px; 
  height: 40px; 
  padding: 10px;
  margin-bottom: 20px; /* Added margin between input fields */
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 15px; 
}

.rounded-input::placeholder {
  font-size: 15px; 
}

.error {
  color: red;
  font-size: 14px; 
  display: block; 
  margin-top: 4px;
}

.button-container {
  margin-top: 20px;
}

.green-button {
  background-color: #84C7AE;
  color: white;
  border: none;
  padding: 12px 0; /* Adjusted padding to match height */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 22px;
  cursor: pointer;
  border-radius: 15px;
  width: 320px; 
  height: 48px; 
}

.green-button:hover {
  background-color: #45a049;
}

.signin-container {
  margin-top: 20px;
}

.signin-container span,
.signin-link {
  font-size: 15px;
}

.signin-link {
  text-decoration: underline;
  cursor: pointer;
}

.signin-link:hover {
  text-decoration: none;
}
</style>