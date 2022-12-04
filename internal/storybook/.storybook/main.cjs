const path = require("path");
const fs = require("fs");
const postcss = require("postcss");
const postcssNesting = require("postcss-nesting");
const processor = postcss(postcssNesting());
const syntax = require("postcss-less");

module.exports = {
    stories: ["../../../packages/", "../introduction.stories.mdx"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@styled/storybook-dark-mode",
    ],
    framework: "@storybook/web-components",
    features: {
        storyStoreV7: true,
        previewMdx2: true,
    },
    core: {
        builder: process.env.NODE_ENV === 'development'
            ? "@storybook/builder-vite"
            : "webpack5"
    },
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.less$/,
            loader: "lit-css-loader",
            options: {
                transform: (css, { filePath }) => {
                    const base = fs
                        .readFileSync(
                            path.resolve("../../packages/shared/base.less")
                        ).toString();
                    return processor.process(base + css, {
                        from: filePath,
                        syntax,
                    }).css;
                },
            },
        });

        return config;
    },
};
