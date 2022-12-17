import {defineConfig} from 'rollup';
import fg from 'fast-glob';
import fs from 'node:fs';
import resolve from '@rollup/plugin-node-resolve';
import MinifyHTML from 'rollup-plugin-minify-html-literals';
import esbuild from 'rollup-plugin-esbuild';
import rimraf from 'rimraf';
import summary from 'rollup-plugin-summary';
import {litcssPlugin} from './scripts/lit.mjs';

const isDevelopment = process.env.NODE_ENV === 'development';

if (!isDevelopment) rimraf.sync('./dist');

const packagesNames = fg
    .sync('./packages/*', {onlyDirectories: true})
    .map((item) => item.slice('./packages/'.length))
    .filter((item) => !['shared'].includes(item));

fs.writeFileSync(
    './index.ts',
    packagesNames
        .map(
            (packageName) =>
                `import './packages/${packageName}/${packageName}';\n`
        )
        .join('')
);

const packages = packagesNames.map((item) => `./packages/${item}/${item}.ts`);

const plugins = isDevelopment
    ? [litcssPlugin, resolve({extensions: ['.mjs', '.js', '.ts']}), esbuild()]
    : [
          litcssPlugin,
          MinifyHTML.default(),
          resolve({extensions: ['.mjs', '.js', '.ts']}),
          esbuild({minify: true}),
          summary()
      ];

export default defineConfig({
    input: [...packages, './index.ts'],
    output: {
        dir: 'dist',
        chunkFileNames: 'chunk/[hash].js',
        compact: true
    },
    plugins
});
