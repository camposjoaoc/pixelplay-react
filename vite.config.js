import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  scss: {
    api: 'modern',
    additionalData: '@use "$lib/assets/scss/variables.scss" as *;'
  }
})
