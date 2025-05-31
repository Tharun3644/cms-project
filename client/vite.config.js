import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  server:{
    allowedHosts:["5174-tharun3644-cms-project-9dklsr5cuk.app.codeanywhere.com"],
  
  },
  plugins: [react(),tailwindcss()]

})
