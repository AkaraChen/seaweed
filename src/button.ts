import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('sw-button')
export class Button extends LitElement {
    static styles = css`
        button {
            display: inline-flex;
            height: 32px;
            align-items: center;
            justify-content: center;
            padding-inline-start: 1em;
            padding-inline-end: 1em;
            border-radius: 2px;
            outline: none;
            border: none;
            border: 1px solid #d9d9d9;
            background-color: white;
            box-shadow: 0 2px #00000004;
            transition: 0.25s;
        }
        button:hover {
            border-color: #3498db;
            color: #3498db;
        }
    `;
    render() {
        return html`<button><slot /></button>`;
    }
}
