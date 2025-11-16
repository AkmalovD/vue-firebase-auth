<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const handleLogout = async () => {
  const result = await authStore.logout()
  
  if (result.success) {
    router.push('/login')
  }
}
</script>

<template>
  <div class="dashboard">
    <nav class="navbar">
      <div class="navbar-content">
        <h2>Dashboard</h2>
        <button @click="handleLogout" class="btn-logout">
          Logout
        </button>
      </div>
    </nav>

    <div class="dashboard-content">
      <div class="welcome-card">
        <h1>Welcome!</h1>
        <p class="subtitle">You have successfully logged in</p>

        <div class="user-info">
          <div class="info-item">
            <span class="label">Email:</span>
            <span class="value">{{ authStore.user?.email }}</span>
          </div>
          <div class="info-item">
            <span class="label">User ID:</span>
            <span class="value">{{ authStore.user?.uid }}</span>
          </div>
          <div class="info-item">
            <span class="label">Account Created:</span>
            <span class="value">
              {{ new Date(authStore.user?.metadata?.creationTime).toLocaleDateString() }}
            </span>
          </div>
          <div class="info-item">
            <span class="label">Last Sign In:</span>
            <span class="value">
              {{ new Date(authStore.user?.metadata?.lastSignInTime).toLocaleString() }}
            </span>
          </div>
        </div>

        <div class="features">
          <h3>What's Protected:</h3>
          <ul>
            <li>- This dashboard is only accessible to authenticated users</li>
            <li>- Authentication state persists across page refreshes</li>
            <li>- Route guards prevent unauthorized access</li>
            <li>- Firebase Authentication manages your session</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  min-height: 100vh;
  background: #f5f7fa;
}

.navbar {
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
}

.navbar-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.navbar h2 {
  margin: 0;
  color: #333;
  font-size: 24px;
}

.btn-logout {
  padding: 10px 24px;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.btn-logout:hover {
  transform: translateY(-2px);
}

.dashboard-content {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
}

.welcome-card {
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

h1 {
  margin: 0 0 10px 0;
  color: #333;
  font-size: 32px;
}

.subtitle {
  margin: 0 0 30px 0;
  color: #666;
  font-size: 16px;
}

.user-info {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 30px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #e9ecef;
}

.info-item:last-child {
  border-bottom: none;
}

.label {
  font-weight: 600;
  color: #495057;
}

.value {
  color: #42b883;
  font-family: monospace;
  font-size: 14px;
}

.features {
  margin-top: 30px;
}

.features h3 {
  margin: 0 0 15px 0;
  color: #333;
  font-size: 20px;
}

.features ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features li {
  padding: 10px 0;
  color: #666;
  font-size: 15px;
}

@media (max-width: 768px) {
  .navbar-content {
    flex-direction: column;
    gap: 15px;
  }

  .welcome-card {
    padding: 24px;
  }

  .info-item {
    flex-direction: column;
    gap: 5px;
  }
}
</style>

