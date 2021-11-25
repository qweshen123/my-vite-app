import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
import Inspect from 'vite-plugin-inspect';
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'vant',
        esModule: true,
        resolveStyle(name) {
          return `vant/es/${name}/style/index.js`
        },
      }]
    }),
    Inspect()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  server: {
    host: '0.0.0.0'
  }
})
