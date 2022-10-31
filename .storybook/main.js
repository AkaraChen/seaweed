const path = require('path');

module.exports = {
    stories: ['../stories/*.stories.mdx'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@styled/storybook-dark-mode',
    ],
    framework: '@storybook/web-components',
    features: {
        storyStoreV7: true,
        previewMdx2: true,
    },
    core: {
        builder: 'webpack5',
    },
    webpackFinal: async (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname, '../src');
        config.resolve.alias['#'] = path.resolve(__dirname, '../style');

        config.module.rules.unshift({
            test: /\.css$/,
            use: 'lit-css-loader',
            include: path.resolve(__dirname, '../style/'),
        });

        return config;
    },
};
