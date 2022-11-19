const path = require("path");
const fs = require("fs");
const postcss = require("postcss");
const postcssNesting = require("postcss-nesting");
const processor = postcss(postcssNesting());
const syntax = require("postcss-less");
const { Processor } = require("windicss/lib");
const { HTMLParser } = require("windicss/utils/parser");

module.exports = {
    stories: ["../stories/*.stories.mdx"],
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
        builder: "webpack5",
    },
    webpackFinal: async (config) => {
        config.resolve.alias["@"] = path.resolve(__dirname, "../src");
        config.resolve.alias["#"] = path.resolve(__dirname, "../style");

        config.module.rules.push({
            test: /\.less$/,
            loader: "lit-css-loader",
            options: {
                transform: (css, { filePath }) => {
                    const fileName = filePath
                        .replaceAll("/", "\\")
                        .split("\\")
                        .at(-1);
                    const template = path.resolve(
                        "./src",
                        fileName.split(".")[0] + ".ts"
                    );
                    const content = fs.readFileSync(template).toString();
                    const windiProcessor = new Processor();
                    const htmlClasses = new HTMLParser(content)
                        .parseClasses()
                        .map((i) => i.result)
                        .join(" ");
                    const interpretedSheet =
                        windiProcessor.interpret(htmlClasses).styleSheet;
                    const styles = interpretedSheet.build();

                    const base = fs
                        .readFileSync(path.resolve("./style/base.less"))
                        .toString();
                    return processor.process(base + css + styles, {
                        from: filePath,
                        syntax,
                    }).css;
                },
            },
        });

        return config;
    },
};
