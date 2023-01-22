import clsx from 'clsx';
import { html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Reactify, size, sizeArray } from 'shared/type';
import { styles } from './card.less';

@customElement('sw-card')
export class Card extends LitElement {
    static override styles = styles;

    @property()
    size: size = 'normal';

    @property()
    title = '';

    @property({ type: Boolean })
    noborder: false;

    clsx = () =>
        clsx(
            'card',
            { [`size-${this.size}`]: sizeArray.includes(this.size) },
            { noborder: this.noborder }
        );

    render() {
        return html`
            <div class=${this.clsx()}>
                ${this.title === ''
                    ? nothing
                    : html`<div class="title">${this.title}</div>`}
                <slot></slot>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sw-card': Card;
    }

    namespace JSX {
        interface IntrinsicElements {
            'sw-card': Reactify<Card>;
        }
    }
}
