import clsx from 'clsx';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './collapse.less';

@customElement('sw-collapse')
export class Collapse extends LitElement {
    static override styles = styles;

    @property({ type: Boolean })
    open = false;

    @property()
    summary = '';

    @property({ type: Boolean })
    transparent = false;

    clsx = () =>
        clsx('container', { open: this.open }, { normal: !this.transparent });

    toggle() {
        this.open = !this.open;
    }

    icon() {
        return html`<svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chevron-right"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <polyline points="9 6 15 12 9 18"></polyline>
        </svg>`;
    }

    override render() {
        return html`
            <div class=${this.clsx()}>
                <div class="summary" @click=${this.toggle}>
                    ${this.icon()} ${this.summary}
                </div>
                <div class="content">
                    <div class="wrapper">
                        <div class="inner">
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
