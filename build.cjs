const esbuild = require('esbuild');
const glob = require('glob');
const clear = require('@akrc/esbuild-plugin-clean');

esbuild.build({
    entryPoints: glob.GlobSync('./src/*.ts').found,
    bundle: true,
    format: 'esm',
    outdir: 'dist',
    logLevel: 'info',
    color: true,
    splitting: true,
    chunkNames: 'chunks/[hash]',
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    drop: ['console', 'debugger'],
    plugins: [clear()],
});
