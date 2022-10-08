import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import packageJson from './package.json'

export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'Geely-Business-Components-Docs',
      // the proper extensions will be added
      fileName: 'Geely-Business-Components-Docs',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖 ...(packageJson.dependencies || {}), ...(packageJson.peerDependencies || {})
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
