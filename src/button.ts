import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { size, type } from './util/type';
import className from '@akrc/classnames';
import { fontFallback } from './util/style';
import './loading';

@customElement('sw-button')
export class Button extends LitElement {
    static styles = css`
        ${fontFallback}
        button {
            --primary: #1890ff;
            --primary-hover: #40a9ff;
            --font-color: #000;
        }
        @media (prefers-color-scheme: dark) {
            button {
                --primary: #177ddc;
                --primary-hover: #095cb5;
                --font-color: #fff;
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
            cursor: pointer;
            user-select: none;
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
        button.loading,
        button[disabled] {
            opacity: 0.5;
        }
    `;

    @property({ type: Boolean })
    primary = false;

    @property()
    size: size = 'normal';

    @property()
    type: type = 'info';

    @property({ type: Boolean })
    loading = false;

    @property({ type: Boolean })
    disabled = false;

    formatLoading = () => {
        if (this.loading) {
            const size = this.size === 'small' ? '14px' : '18px';
            const color = this.primary ? '#fff' : 'var(--font-color)';
            return html` <style>
                    sw-loading {
                        margin-right: 0.5em;
                    }
                    button.size-small sw-loading {
                        margin-right: 0.25em;
                    }
                </style>
                <sw-loading size=${size} color=${color}></sw-loading>`;
        }
    };

    classNames = () =>
        className(
            { primary: this.primary },
            { [`size-${this.size}`]: this.size },
            { [`type-${this.type}`]: this.type },
            { loading: this.loading }
        );

    render() {
        return html`<button
            class=${this.classNames()}
            ?disabled=${this.disabled}
        >
            ${this.formatLoading()}
            <p><slot></slot></p>
        </button>`;
    }
}
