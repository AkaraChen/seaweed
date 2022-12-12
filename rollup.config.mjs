import {defineConfig} from 'rollup';
import fg from 'fast-glob';
import fs from 'node:fs';
import path from 'node:path';
import resolve from '@rollup/plugin-node-resolve';
import litCSS from 'rollup-plugin-lit-css';
import MinifyHTML from 'rollup-plugin-minify-html-literals';
import postcss from 'postcss';
import postcssNesting from 'postcss-nesting';
import syntax from 'postcss-less';
import filesize from 'rollup-plugin-filesize';
import esbuild from 'rollup-plugin-esbuild';
import rimraf from 'rimraf';

rimraf.sync('./dist');

const packages = fg.sync('./packages/*', {onlyDirectories: true})
    .map(item => item.slice('./packages/'.length))
    .filter(item => !['shared'].includes(item))
    .map(item => `./packages/${item}/${item}.ts`);

const base = fs
    .readFileSync(
        path.resolve('./packages/shared/base.less')
    ).toString();

export const litcssPlugin = litCSS({
    include: /\.less$/i,
    transform: (css, {filePath}) => {
        const processor = postcss(postcssNesting());
        return processor.process(base + css, {
            from: filePath,
            syntax
        }).css;
    }
});

export default defineConfig({
    input: packages,
    output: {
        dir: 'dist',
        chunkFileNames: 'chunk/[hash].js',
        compact: true
    },
    plugins: [
        litcssPlugin,
        MinifyHTML.default(),
        resolve({extensions: ['.mjs', '.js', '.ts']}),
        esbuild(),
        filesize()
    ]
});
