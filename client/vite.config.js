import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  server:{
    allowedHosts:["5175-tharun3644-cms-project-9icubl8tlx.app.codeanywhere.com"],
  
  },
  plugins: [react(),tailwindcss()]
})
