import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import electron from 'vite-plugin-electron'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    electron({
      main: {
        // 置顶 electron 入口文件
        entry: "electron/index.ts"
      }
    }),
  ],
  server: {
    port: 2048,
  }
})
