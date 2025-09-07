import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'dist/index.esm.js',
        format: 'es',
        sourcemap: true
      },
      {
        file: 'dist/index.min.js',
        format: 'iife',
        name: 'QSticker',
        sourcemap: true,
        plugins: [terser()]
      }
    ],
    plugins: [
      resolve(),
      typescript({
        tsconfig: './tsconfig.json'
      })
    ]
  }
];