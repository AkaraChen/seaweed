import { defineConfig } from 'rollup';
import glob from 'glob';
import fs from 'fs'
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import alias from '@rollup/plugin-alias';
import litCss from 'rollup-plugin-lit-css';
import del from 'rollup-plugin-delete';
import MinifyHTML from 'rollup-plugin-minify-html-literals';
import postcss from 'postcss';
import postcssNesting from 'postcss-nesting';
import syntax from 'postcss-less';
import autoprefixer from 'autoprefixer'

const processor = postcss(postcssNesting(), autoprefixer());

export default defineConfig({
    input: glob.GlobSync('./src/*.ts').found,
    output: {
        dir: 'dist',
        chunkFileNames: 'chunk/[hash].js',
        compact: true,
    },
    plugins: [
        litCss({
            include: /\.less$/i,
            transform: (css, { filePath }) => {
                const base = fs.readFileSync(path.resolve("./style/base.less")).toString()
                return processor.process(base + css, { from: filePath, syntax }).css
            }
        }),
        MinifyHTML.default(),
        esbuild({ minify: true }),
        resolve(),
        alias({ entries: { '@': './src', '#': './style' } }),
        del({ targets: 'dist/*' }),
    ],
});
