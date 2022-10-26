import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sw-button')
export class Button extends LitElement {
    static styles = css`
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
            transition: 0.25s;
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
    `;

    @property()
    primary: string = 'false';

    @property()
    size: string = 'normal';

    @property()
    render() {
        return html`<button class="${this.primary === 'true' ? 'primary' : ''}">
            <slot></slot>
        </button>`;
    }
}
