import path from 'path'
import vue from '@vitejs/plugin-vue'

export default {
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  plugins: [vue()]
}
