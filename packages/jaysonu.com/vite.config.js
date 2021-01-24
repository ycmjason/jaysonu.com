import path from 'path'
import vue from '@vitejs/plugin-vue'

export default {
  alias: [
    { find: '@', replacement: path.resolve(__dirname, 'src') },
  ],
  plugins: [vue()]
}
