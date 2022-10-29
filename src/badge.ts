import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('sw-badge')
export class Badge extends LitElement {
    static styles = css`
        :host {
            display: inline;
        }
        .badge {
            --bg: #fafafa;
            --bd: #e0e0e6;
            --color: #333
            background-color: var(--bg);
            border: var(--bd) solid 1px;
            border-radius: 2px;
            padding: 2px 8px;
            font-size: 15px;
            color: #E0E0E6;
        }
        .badge.primary {
            --bg: 
        }
    `;

    render() {
        return html`<div class="badge">
            <slot></slot>
        </div>`;
    }
}
