import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'src/dev',
  build: {
    lib: {
      entry: 'src/lib/index.js',
      name: 'SimpleComponentLibrary',
      fileName: 'my-react-lib'
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  }
})
