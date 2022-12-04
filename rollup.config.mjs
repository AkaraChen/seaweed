import {defineConfig} from 'rollup';
import glob from 'glob';
import fs from 'node:fs';
import path from 'node:path';
import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import litCSS from 'rollup-plugin-lit-css';
import del from 'rollup-plugin-delete';
import MinifyHTML from 'rollup-plugin-minify-html-literals';
import postcss from 'postcss';
import postcssNesting from 'postcss-nesting';
import syntax from 'postcss-less';
import filesize from 'rollup-plugin-filesize';
import externals from 'rollup-plugin-node-externals';

const processor = postcss(postcssNesting());
const packages = new glob.GlobSync('./packages/*').found
    .map(item => item.slice('./packages/'.length))
    .filter(item => !['shared'].includes(item))
    .map(item => `./packages/${item}/${item}.ts`);

export default defineConfig({
    input: packages,
    output: {
        dir: 'dist',
        chunkFileNames: 'chunk/[hash].js',
        compact: true
    },
    plugins: [
        litCSS({
            include: /\.less$/i,
            transform: (css, {filePath}) => {
                const base = fs
                    .readFileSync(
                        path.resolve('./packages/shared/base.less')
                    ).toString();
                return processor.process(base + css, {
                    from: filePath,
                    syntax
                }).css;
            }
        }),
        MinifyHTML.default(),
        esbuild({minify: true}),
        externals({
            include: ['lit']
        }),
        resolve(),
        del({targets: 'dist/*'}),
        filesize()
    ]
});
