import resolve from '@rollup/plugin-node-resolve';
import fs from 'node:fs';
import rimraf from 'rimraf';
import { defineConfig } from 'rollup';
import esbuild, { minify } from 'rollup-plugin-esbuild';
import MinifyHTML from 'rollup-plugin-minify-html-literals';
import progress from 'rollup-plugin-progress';
import summary from 'rollup-plugin-summary';
import typescript from 'rollup-plugin-ts';
import { isDev } from './scripts/env.mjs';
import { litcssPlugin } from './scripts/lit.mjs';
import { generatedIndex, packages } from './scripts/package.mjs';

if (!isDev) rimraf.sync('./dist');

fs.writeFileSync('./index.ts', generatedIndex);

const getPlugins = () => {
    const base = [
        litcssPlugin,
        resolve({ extensions: ['.mjs', '.js', '.ts'] })
    ];
    if (isDev) {
        base.push(esbuild());
    } else {
        base.push(
            MinifyHTML.default(),
            typescript({ tsconfig: './tsconfig.json' }),
            summary(),
            minify(),
            progress()
        );
    }
    return base;
};

export default defineConfig({
    input: [...packages, './index.ts'],
    output: {
        dir: 'dist',
        chunkFileNames: 'chunk/[hash].js',
        compact: true
    },
    plugins: getPlugins()
});
