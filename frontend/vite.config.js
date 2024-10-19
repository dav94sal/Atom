import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    eslint({ // add linter
      lintOnStart: true, // enables linter to run at build time
      failOnError: mode === "production" // set to false on development - will not prevent vite from trying to run app
    })
  ],
  server: {
    open: true  // open app in browser upon starting server
  }
}))
