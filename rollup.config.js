import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';

const settings = require('./package.json');

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: settings.main,
                format: 'cjs',
                sourcemap: false,
                name: settings.name
            },
            {
                file: settings.module,
                format: 'esm',
                sourcemap: false
            }
        ],
        plugins: [
            external(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            terser()
        ],
        external: ['react', 'react-dom', 'styled-components', '@heroicons/react']
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()]
    }
];