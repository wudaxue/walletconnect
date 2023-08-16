import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, './src')}/`,
    },
  },
  server: {
    host: true,
    hmr: true,
  },
  plugins: [
    react(),
    nodePolyfills(),
    Icons({ autoInstall: true }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.md$/, // .md
        /\.json$/, // .json
      ],
      // global imports to register
      imports: ['react'],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      resolvers: [
        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({ prefix: 'Icon' }),
      ],
      dts: './auto-imports.d.ts',
    }),
  ],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
})
