<script setup>
import { useAuthStore } from './stores/auth'

const authStore = useAuthStore()
</script>

<template>
  <div id="app">
    <div v-if="authStore.loading" class="loading-screen">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>
    <router-view v-else />
  </div>
</template>

<style scoped>
.loading-screen {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  color: white;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-screen p {
  font-size: 18px;
  font-weight: 500;
}
</style>

