import { litcssPlugin } from './scripts/lit.mjs';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'happy-dom',
        include: ['./packages/**/*.test.ts'],
        globals: true
    },
    plugins: [litcssPlugin]
});
