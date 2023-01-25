import { defineConfig } from 'dumi';

export default defineConfig({
    themeConfig: {
        name: 'Seaweed',
        nav: [
            { title: '介绍', link: '/guide/introduction' },
            { title: '组件', link: '/components/button' }
        ],
        prefersColor: {
            default: 'auto',
            switch: false
        }
    },
    mfsu: false
});
