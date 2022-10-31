import { defineConfig } from 'rollup';
import glob from 'glob';
import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import alias from '@rollup/plugin-alias';
import litCss from 'rollup-plugin-lit-css';
import del from 'rollup-plugin-delete';
import MinifyHTML from 'rollup-plugin-minify-html-literals';

export default defineConfig({
    input: glob.GlobSync('./src/*.ts').found,
    output: {
        dir: 'dist',
        chunkFileNames: 'chunk/[hash].js',
        compact: true,
    },
    plugins: [
        litCss(),
        MinifyHTML.default(),
        esbuild({ minify: true }),
        resolve(),
        alias({ entries: { '@': './src', '#': './style' } }),
        del({ targets: 'dist/*' }),
    ],
});
