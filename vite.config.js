import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
        signup: resolve(__dirname, 'signup.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        course: resolve(__dirname, 'course.html'),
        payment: resolve(__dirname, 'payment.html'),
        admin: resolve(__dirname, 'admin.html'),
        liveSessions: resolve(__dirname, 'live-sessions.html'),
      },
    },
  },
})
