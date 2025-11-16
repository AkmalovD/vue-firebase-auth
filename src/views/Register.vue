<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const localError = ref('')
const isLoading = ref(false)

const handleRegister = async () => {
  if (!email.value || !password.value || !confirmPassword.value) {
    localError.value = 'Please fill in all fields'
    return
  }

  if (password.value.length < 6) {
    localError.value = 'Password must be at least 6 characters'
    return
  }

  if (password.value !== confirmPassword.value) {
    localError.value = 'Passwords do not match'
    return
  }

  isLoading.value = true
  localError.value = ''
  
  const result = await authStore.register(email.value, password.value)
  
  isLoading.value = false

  if (result.success) {
    router.push('/dashboard')
  } else {
    localError.value = result.error
  }
}
</script>

<template>
  <div class="auth-container">
    <div class="auth-card">
      <h1>Create Account</h1>
      <p class="subtitle">Sign up to get started</p>

      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Enter your password (min 6 characters)"
            required
          />
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            v-model="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            required
          />
        </div>

        <div v-if="localError" class="error-message">
          {{ localError }}
        </div>

        <button type="submit" class="btn-primary" :disabled="isLoading">
          {{ isLoading ? 'Creating account...' : 'Sign Up' }}
        </button>
      </form>

      <div class="auth-links">
        <p>
          Already have an account?
          <router-link to="/login">Sign In</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  padding: 20px;
}

.auth-card {
  background: white;
  border-radius: 12px;
  padding: 40px;
  max-width: 420px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

h1 {
  margin: 0 0 10px 0;
  color: #333;
  font-size: 28px;
  text-align: center;
}

.subtitle {
  margin: 0 0 30px 0;
  color: #666;
  text-align: center;
  font-size: 14px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
  font-size: 14px;
}

input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #42b883;
}

.btn-primary {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
  margin-top: 10px;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error-message {
  background: #fee;
  color: #c33;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 15px;
  font-size: 14px;
}

.auth-links {
  margin-top: 25px;
  text-align: center;
  font-size: 14px;
}

.auth-links a {
  color: #42b883;
  text-decoration: none;
  font-weight: 500;
}

.auth-links a:hover {
  text-decoration: underline;
}

.auth-links p {
  margin-top: 15px;
  color: #666;
}
</style>

