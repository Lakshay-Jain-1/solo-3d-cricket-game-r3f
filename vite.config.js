import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import preload from 'vite-plugin-preload'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    preload({
      rel: 'preload',
      include: ['/wicket.glb', '/ground.glb'], // only preload critical models
    }),
    visualizer({ open: true }) 
  ],
})
