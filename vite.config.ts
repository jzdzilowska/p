import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Using a custom domain via CNAME, so base stays at root.
  // If deploying to <username>.github.io/<repo> without a custom domain,
  // change this to '/<repo-name>/'.
  base: '/',
})
