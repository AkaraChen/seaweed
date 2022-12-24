import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './link.less';
import clsx from 'clsx';
import { Reactify, type, typeArray } from 'shared/type';

@customElement('sw-link')
export class Link extends LitElement {
    static override styles = [styles];

    @property({ type: Boolean })
    disabled = false;

    @property({ type: Boolean })
    underline = false;

    @property()
    href: string;

    @property()
    type: type = 'info';

    @property()
    target: '_blank' | '_parent' | '_self' | '_top' = '_blank';

    clsx = () =>
        clsx(
            { disabled: this.disabled },
            { underline: this.underline && !this.disabled },
            { [`type-${this.type}`]: typeArray.includes(this.type) }
        );

    override connectedCallback() {
        super.connectedCallback();

        this.addEventListener('click', (event: Event) => {
            if (this.disabled) {
                event.preventDefault();
            }
        });
    }

    override render() {
        return html`
            <a class=${this.clsx()} href=${this.href} target=${this.target}>
                <slot></slot>
            </a>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sw-link': Link;
    }

    namespace JSX {
        interface IntrinsicElements {
            'sw-link': Reactify<Link>;
        }
    }
}
