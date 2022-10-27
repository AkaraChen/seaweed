const { buildSync } = require('esbuild');
const glob = require('glob')
const rimraf = require('rimraf')

rimraf.sync('./dist')

buildSync({
    entryPoints: glob.GlobSync('./src/*.ts').found,
    bundle: true,
    minify: true,
    format: 'esm',
    outdir: 'dist',
    logLevel: 'info',
    color: true,
    splitting: true,
    chunkNames: "chunks/[hash]"
});
