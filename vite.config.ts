import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo_mitas.png'],
      manifest: {
        name: 'E-Book Ramadhan Abadi',
        short_name: 'RamadhanBook',
        description: 'Kisah Kejayaan Islam & Jejak Peradaban',
        theme_color: '#020617',
        background_color: '#020617',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: [
          {
            src: 'logo_mitas.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logo_mitas.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
