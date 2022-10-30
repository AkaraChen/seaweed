const { mergeConfig } = require('vite');

const config = {
    stories: [
        '../stories/**/*.stories.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@styled/storybook-dark-mode',
    ],
    framework: '@storybook/web-components',
    core: {
        builder: '@storybook/builder-vite',
    },
    features: {
        storyStoreV7: true,
        previewMdx2: true,
    },
    async viteFinal(config) {
        return mergeConfig(config, {
            resolve: {
                alias: { '@': '../src' },
            },
        });
    },
};

module.exports = config;
