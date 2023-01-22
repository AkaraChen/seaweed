import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import pages from 'vite-plugin-pages';

export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement(tag) {
                        return tag.startsWith('sw-');
                    }
                }
            }
        }),
        pages({
            dirs: './fixture/pages'
        })
    ]
});
