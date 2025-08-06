import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import aliases from './aliases.json'

// Convert aliases object to Vite's expected format
const aliasEntries = Object.entries(aliases).map(([key, value]) => ({
  find: key,
  replacement: path.resolve(__dirname, value)
}))

export default defineConfig({
  resolve: {
    alias: aliasEntries
  },
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3030
  }
})
