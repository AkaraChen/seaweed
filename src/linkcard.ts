import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators';
import { type } from './defines';

@customElement('sw-link-card')
class LinkCard extends LitElement {
    constructor() {
        super();
    }
    static styles = css`
        .container {
        }
    `;

    @property()
    type?: type = 'info';

    render() {
        return html`<div class="container ${this.type}"></div>`;
    }
}
