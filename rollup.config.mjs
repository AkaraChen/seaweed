import { defineConfig } from "rollup";
import glob from "glob";
import fs from "node:fs";
import path from "node:path";
import resolve from "@rollup/plugin-node-resolve";
import esbuild from "rollup-plugin-esbuild";
import alias from "@rollup/plugin-alias";
import litCss from "rollup-plugin-lit-css";
import del from "rollup-plugin-delete";
import MinifyHTML from "rollup-plugin-minify-html-literals";
import postcss from "postcss";
import postcssNesting from "postcss-nesting";
import syntax from "postcss-less";
import autoprefixer from "autoprefixer";
import { Processor } from "windicss/lib";
import { HTMLParser } from "windicss/utils/parser";

const processor = postcss(postcssNesting(), autoprefixer());

export default defineConfig({
    input: glob.GlobSync("./src/*.ts").found,
    output: {
        dir: "dist",
        chunkFileNames: "chunk/[hash].js",
        compact: true,
    },
    plugins: [
        litCss({
            include: /\.less$/i,
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
                    .map((index) => index.result)
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
        }),
        MinifyHTML.default(),
        esbuild({ minify: true }),
        resolve(),
        alias({ entries: { "@": "./src", "#": "./style" } }),
        del({ targets: "dist/*" }),
    ],
});
