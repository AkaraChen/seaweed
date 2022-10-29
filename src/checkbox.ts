import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { boxSizing, fontFallback } from './util/style';
import { size } from './util/type';
import className from '@akrc/classnames';

@customElement('sw-checkbox')
export class CheckBox extends LitElement {
    static styles = css`
        ${boxSizing}
        ${fontFallback}
        :host {
            display: inline-block;
            margin-right: 0.5em;
        }
        input {
            --size: 1em;
            --color: #1890ff;
            --border-color: #c8c8c8;
            --border-width: 1.5px;
            appearance: none;
            font-size: 16px;
            width: var(--size);
            height: var(--size);
            border: var(--border-width) solid var(--border-color);
            border-radius: 2px;
            cursor: pointer;
            transition: 0.25s all;
        }
        @media (prefers-color-scheme: dark) {
            input {
                --border-color: #666;
            }
        }
        input::before {
            content: '';
            display: block;
            width: var(--size);
            height: var(--size);
            position: relative;
            right: var(--border-width);
            bottom: var(--border-width);
            border-radius: 2px;
            transition: 0.25s all;
            opacity: 0;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FFF' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
        }
        input:checked::before {
            background-color: var(--color);
            opacity: 1;
        }
        input.size-large {
            font-size: 20px;
            --border-width: 2px;
        }
        input.size-large + label {
            font-size: 18px;
        }
        input.size-small {
            font-size: 12px;
            --border-width: 1px;
        }
        input.size-small + label {
            font-size: 12px;
        }
        label {
            user-select: none;
            cursor: pointer;
        }
        div {
            display: flex;
            vertical-align: center;
            align-items: center;
        }
        label {
            margin-left: 0.5em;
        }
        @media (prefers-color-scheme: dark) {
            label {
                color: #ffffffd9;
            }
        }
        input[disabled] {
            background-color: rgb(245, 245, 245);
            cursor: no-drop;
        }
        input[disabled]::before {
            background-color: #ddd;
        }
        @media (prefers-color-scheme: dark) {
            input[disabled] {
                background-color: #444;
            }
            input[disabled]::before {
                background-color: #848484;
            }
        }
    `;

    @property({ type: Boolean })
    checked: boolean = false;

    @property()
    size: size = 'normal';

    @property({ type: Boolean })
    disabled: boolean;

    @property()
    label: string = '';

    formatLabel() {
        if (this.label !== '') {
            return html`<label for="checkbox">${this.label}</label>`;
        }
    }

    classNames = () =>
        className({ [`size-${this.size}`]: this.size != 'normal' });

    private handler(e: Event) {
        const element = e.target as HTMLInputElement;
        const state = element.checked;
        this.dispatchEvent(
            new CustomEvent('change', {
                detail: {
                    value: state,
                },
            })
        );
    }

    render() {
        return html`
            <div>
                <input
                    type="checkbox"
                    class=${this.classNames()}
                    @input=${this.handler}
                    ?disabled=${this.disabled}
                    ?checked=${this.checked}
                    id="checkbox"
                />
                ${this.formatLabel()}
            </div>
        `;
    }
}
