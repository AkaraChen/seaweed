import { litcssPlugin } from './scripts/lit.mjs';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'happy-dom',
        include: ['./packages/**/__test__/*.ts'],
        globals: true
    },
    plugins: [litcssPlugin]
});
