import {litcssPlugin} from './scripts/lit.mjs';
import {defineConfig} from 'vite';

export default defineConfig({
    test: {
        environment: 'jsdom',
        include: ['./packages/**/__test__/*.ts'],
        globals: true
    },
    plugins: [litcssPlugin]
});
