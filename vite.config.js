import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000
  },
  // Set base path for GitHub Pages
  // If your repo is: https://github.com/username/vue-firebase-auth
  // Then your GitHub Pages URL will be: https://username.github.io/vue-firebase-auth/
  base: process.env.NODE_ENV === 'production' ? '/vue-firebase-auth/' : '/'
})

