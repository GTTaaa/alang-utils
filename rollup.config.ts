import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { dts } from 'rollup-plugin-dts'
import terser from '@rollup/plugin-terser'

import packageJson from './package.json' assert { type: 'json' }

const isProd = process.env.NODE_ENV === 'production'

const basePlugins = [
  resolve(),
  commonjs(),
  typescript({ tsconfig: './tsconfig.json' })
]

const prodPlugins = isProd ? [
  terser({
    format: { comments: false },
    compress: {
      drop_console: true,
      drop_debugger: true
    }
  })
] : []

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: !isProd,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: !isProd,
      },
    ],
    plugins: [...basePlugins, ...prodPlugins],
    external: ['lodash']
  },
  {
    input: 'src/index.ts',
    output: [{ file: packageJson.types, format: 'esm' }],
    plugins: [dts()],
  },
]