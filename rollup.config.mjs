import {defineConfig} from 'rollup';
import fg from 'fast-glob';
import resolve from '@rollup/plugin-node-resolve';
import MinifyHTML from 'rollup-plugin-minify-html-literals';
import esbuild from 'rollup-plugin-esbuild';
import rimraf from 'rimraf';
import summary from 'rollup-plugin-summary';
import {litcssPlugin} from './scripts/lit.mjs';

const isDevelopment = process.env.NODE_ENV === 'development';

if (!isDevelopment) rimraf.sync('./dist');

const packages = fg.sync('./packages/*', {onlyDirectories: true})
    .map(item => item.slice('./packages/'.length))
    .filter(item => !['shared'].includes(item))
    .map(item => `./packages/${item}/${item}.ts`);

const plugins = isDevelopment
    ? [
        litcssPlugin,
        resolve({extensions: ['.mjs', '.js', '.ts']}),
        esbuild()
    ]
    : [
        litcssPlugin,
        MinifyHTML.default(),
        resolve({extensions: ['.mjs', '.js', '.ts']}),
        esbuild({minify: true}),
        summary()
    ];

export default defineConfig({
    input: packages,
    output: {
        dir: 'dist',
        chunkFileNames: 'chunk/[hash].js',
        compact: true
    },
    plugins
});
