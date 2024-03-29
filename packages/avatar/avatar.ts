/* eslint-disable no-shadow */
import clsx from 'clsx';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Reactify, size, sizeArray } from 'shared/type';
import { styles } from './avatar.less';

@customElement('sw-avatar')
export class Avatar extends LitElement {
    static override styles = styles;

    @property()
    src: string;

    @property()
    size: size | number = 'normal';

    @property({ type: Boolean })
    rounded: boolean;

    getSize() {
        const sizeMap = {
            small: 28,
            normal: 34,
            large: 40
        };
        if (typeof this.size === 'string' && sizeArray.includes(this.size)) {
            return sizeMap[this.size];
        }
        if (!Number.isNaN(Number(this.size))) {
            return Number(this.size);
        }
        console.warn('Unexpected args');
        return 50;
    }

    clsx = () => clsx({ rounded: this.rounded });

    override render() {
        const size = this.getSize();
        return html`
            <img
                src=${this.src}
                height=${size}
                width=${size}
                class=${this.clsx()}
            />
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sw-avatar': Avatar;
    }

    namespace JSX {
        interface IntrinsicElements {
            'sw-avatar': Reactify<Avatar>;
        }
    }
}
