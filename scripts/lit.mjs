// @ts-check
import { litCss } from 'rollup-plugin-lit-css';
import postcss from 'postcss';
import postcssNesting from 'postcss-nesting';
import syntax from 'postcss-less';
import fs from 'node:fs';
import path from 'node:path';

const base = fs
    .readFileSync(path.resolve('./packages/shared/base.less'))
    .toString();

export const litcssPlugin = litCss({
    include: /\.less$/i,
    transform: (css, { filePath: from }) => {
        const processor = postcss(postcssNesting());
        return processor.process(base + css, {
            from,
            syntax
        }).css;
    }
});
