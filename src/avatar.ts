/* eslint-disable no-shadow */
import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styles} from '#/avatar.less';
import {size, sizeArray} from '../util/type';

@customElement('sw-avatar')
export class Avatar extends LitElement {
    static override styles = styles;

    @property()
        src: string;

    @property()
        size: size | number = 'normal';

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

    override render() {
        const size = this.getSize();
        return html`
          <img src=${this.src} height=${size}> width=${size}</img>
        `;
    }
}
