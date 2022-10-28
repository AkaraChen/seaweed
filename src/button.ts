import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { size, type } from './util/type';
import className from '@akrc/classnames';
import { fontFallback } from './util/style';

@customElement('sw-button')
export class Button extends LitElement {
    static styles = css`
        ${fontFallback}
        button {
            --primary: #1890ff;
            --primary-hover: #40a9ff;
        }
        @media (prefers-color-scheme: dark) {
            button {
                --primary: #177ddc;
                --primary-hover: #095cb5;
            }
        }
        button {
            display: inline-flex;
            height: 32px;
            align-items: center;
            justify-content: center;
            padding: 4px 15px;
            border-radius: 2px;
            outline: none;
            border: none;
            border: 1px solid #d9d9d9;
            background-color: transparent;
            box-shadow: 0 2px #00000004;
            transition: 0.25s all;
            color: black;
            font-size: 15px;
        }
        button:hover,
        button:focus {
            border-color: var(--primary-hover);
            color: var(--primary-hover);
        }
        @media (prefers-color-scheme: dark) {
            button {
                border-color: #434343;
                color: white;
                box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
            }
            button:hover,
            button:focus {
                border-color: var(--primary-hover);
                color: var(--primary-hover);
            }
        }
        button.primary {
            background-color: var(--primary);
            color: white;
            border-color: var(--primary);
        }
        button.primary:hover,
        button.primary:focus {
            border-color: var(--primary-hover);
            background-color: var(--primary-hover);
        }
        button.size-large {
            height: 40px;
            font-size: 16px;
            padding: 6px 15px;
        }
        button.size-small {
            font-size: 14px;
            padding: 0 7px;
            height: 24px;
        }
        button.type-error {
            --primary: #ff4d4f;
            --primary-hover: #ff7875;
        }
        @media (prefers-color-scheme: dark) {
            button.type-error {
                --primary: #a61d24;
                --primary-hover: #800f19;
            }
        }
        button.type-warning {
            --primary: #faad14;
            --primary-hover: #ffc53d;
        }
        @media (prefers-color-scheme: dark) {
            button.type-warning {
                --primary: #d48806;
                --primary-hover: #ad6800;
            }
        }
        button.type-success {
            --primary: #52c41a;
            --primary-hover: #73d13d;
        }
        @media (prefers-color-scheme: dark) {
            button.type-success {
                --primary: #389e0d;
                --primary-hover: #237804;
            }
        }
    `;

    @property({ type: Boolean })
    primary: boolean = false;

    @property()
    size: size = 'normal';

    @property()
    type: type = 'info';

    classNames = () =>
        className(
            { primary: this.primary },
            { [`size-${this.size}`]: this.size },
            { [`type-${this.type}`]: this.type }
        );

    render() {
        return html`<button class=${this.classNames()}>
            <slot></slot>
        </button>`;
    }
}
