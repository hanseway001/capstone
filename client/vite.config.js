import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //we added this to point to our server listening on port 3001
  server: {
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
})
