import { css } from 'lit';

export const fontFallback = css`
    * {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Helvetica Neue, Arial, Noto Sans, sans-serif, apple color emoji,
            segoe ui emoji, Segoe UI Symbol, noto color emoji;
    }
`;

export const boxSizing = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;
