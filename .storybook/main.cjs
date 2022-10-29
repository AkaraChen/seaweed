const config = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
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
};

module.exports = config;
